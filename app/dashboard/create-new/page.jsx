"use client"
import React, { useContext, useEffect, useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import {Outfit} from 'next/font/google'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoading from './_components/Loading'
import {v4 as uuidv4} from 'uuid'
import { VideoDataContext } from '@/app/_context/VideoDataContext'
import { Users, VideoData } from '@/configs/schema'
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db'
import PlayerDialog from '../_components/PlayerDialog'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { toast } from 'sonner'
import { eq } from 'drizzle-orm'

const outfit = Outfit({subsets: ["latin-ext"],weight: "600"});

function CreateNew() {

  const [formData,setFormData]= useState([]);
  const [loading,setLoading]=useState(false);
  const [videoScript,setVideoScript]=useState();
  const [audioFileUrl,setAudioFileUrl]=useState();
  const [caption,setCaption]=useState();
  const [imageList,setImageList]=useState();
  const {videoData,setVideoData} = useContext(VideoDataContext);
  const {user}=useUser();
  const [playVideo,setPlayVideo]=useState();
  const [videoid,setVideoid]=useState();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);



  const onHandleChange=(fieldName,fieldValue)=>{
    setFormData(
      prev=>({
        ...prev,
        [fieldName]:fieldValue
      })
    )
  }

  const onCreateClickHandler=()=>{
    if (userDetail?.credits<=0)
    {
      console.log(userDetail?.credits);
      toast('You do not have enough credits to create a video. Please buy more credits to continue.');
      return;
    }
    GetVideoScript();
  }

  const GetVideoScript = async ()=>{
    setLoading(true)
    const fixedPrompt = 
    "Write a Script that generates "+formData.duration+" video on the topic "+formData.topic+" along with AI Image prompt in "+formData.imageStyle+" Style for each scene and give me the result in JSON format with imagePrompt and contentText as field and without the word json or anything else, just the response. No Plain text";
    const result = await axios.post('/api/get-video-script',
       {prompt: fixedPrompt}
      );
      
      if (result.data){
        setVideoData(prev=>({
            ...prev,
          videoScript: result.data
          }))

        setVideoScript(result.data)
        await GetAudioFile(result.data);
      }
        
  }

  const GetAudioFile = async (videoScriptData)=>{
    let script = '';
    const id = uuidv4();
    videoScriptData.forEach(item=>{
      script=script+item.contentText+' ';
    })
    const responseaudio = await axios.post('/api/generate-audio-file',
      {
        text: script,
        id: id
      });

      setVideoData(prev=>({
          ...prev,
          'audioFileUrl': responseaudio.data.Result
        }))
        setAudioFileUrl(responseaudio.data.Result);
        responseaudio.data.Result&& await GenerateAudioCaption(responseaudio.data.Result,videoScriptData);
  }

  const GenerateAudioCaption= async (fileUrl,videoScriptData)=>{
    const res = await axios.post('/api/generate-caption',
    {
      audioFileUrl: fileUrl
    }
    );

    setVideoData(prev=>({
        ...prev,
        'captions': res.data.result
      }))
      setCaption(res?.data?.result);
      res.data.result&& await GenerateImage(videoScriptData);

  }

  const GenerateImage = async(videoScriptData)=>{
    let images=[];
    for (const element of videoScriptData){
     try{
      const res = await axios.post('/api/generate-image',
        {
          prompt: element.imagePrompt
        });
        images.push(res.data.result);
     }
     catch(e){
       console.log('ERROR'+e);
     }
    }

    setVideoData(prev=>({
        ...prev,
        'imageList': images
      }))
    setImageList(images);
    setLoading(false);
  }

  useEffect(()=>{
    if (Object.keys(videoData).length==4){
      SaveVideoData(videoData);
    }
  },[videoData])

  const SaveVideoData = async (videoData)=>{
    setLoading(true);
    const result = await db.insert(VideoData).values({
      script: videoData?.videoScript,
      audioFileUrl: videoData?.audioFileUrl,
      captions: videoData?.captions,
      imageList: videoData?.imageList,
      createdBy: user?.primaryEmailAddress?.emailAddress
    }).returning({id:VideoData?.id})

    await UpdateUserCredits();
    setVideoid(result[0].id);
    setPlayVideo(true);
    setLoading(false);
  }

  const UpdateUserCredits=async()=>{
    const result =await db.update(Users).set({
      credits: userDetail?.credits-10
    }).where(eq(Users?.email,user?.primaryEmailAddress?.emailAddress))

    setUserDetail(prev=>({
      ...prev,
      "credits": userDetail?.credits-10
    }))
  }
  
  return (
    <div className='md:px-20'>
      <h2 className={`text-4xl text-primary text-center ${outfit.className}`}>Create A New Video</h2>

      <div className='mt-7 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleChange}/>

        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleChange}/>
        
        {/* Duration */}
        <SelectDuration onUserSelect={onHandleChange}/>

        {/* Create Button */}
        <Button className='mt-10 w-full h-10' onClick={onCreateClickHandler}>
          Generate The Video
        </Button>

      </div>

      <CustomLoading loading={loading}/>
      <PlayerDialog playVideo={playVideo} videoid={videoid}/>
    </div>
  )
}

export default CreateNew