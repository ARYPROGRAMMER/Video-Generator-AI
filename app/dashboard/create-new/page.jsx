"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import {Outfit} from 'next/font/google'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoading from './_components/Loading'

const outfit = Outfit({subsets: ["latin-ext"],weight: "600"});

function CreateNew() {

  const [formData,setFormData]= useState([])
  const [loading,setLoading]=useState(false)
  const [videoScript,setVideoScript]=useState()

  const onHandleChange=(fieldName,fieldValue)=>{
    console.log(fieldName,fieldValue)
    setFormData(
      prev=>({
        ...prev,
        [fieldName]:fieldValue
      })
    )
  }

  const onCreateClickHandler=()=>{
    GetVideoScript();
  }

  //Script to generate video
  const GetVideoScript = async ()=>{
    setLoading(true)
    const fixedPrompt = 
    "Write a Script that generates "+formData.duration+" video on the topic "+formData.topic+" along with AI Image prompt in "+formData.imageStyle+" Style for each scene and give me the result in JSON format with imagePrompt and contentText as field and without the word json or anything else, just the response. No Plain text";
    const result = await axios.post('/api/get-video-script',
      
      {prompt: fixedPrompt}
      ).then((response) => {
        console.log(response.data)
        setVideoScript(response.data)
      })
      setLoading(false)
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
    </div>
  )
}

export default CreateNew