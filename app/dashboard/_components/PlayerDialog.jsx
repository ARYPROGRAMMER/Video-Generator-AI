import React, { useEffect, useState } from 'react';
import {Player} from '@remotion/player';

import {
    Dialog,
    DialogContent,
    DialogTitle,

  } from "@/components/ui/dialog"
  
import RemotionVideo from './RemotionVideo';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { VideoData } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

  
function PlayerDialog({playVideo,videoid}) {
    const [openDialog,setOpenDialog]=useState(true);
    const [videoData,setVideoData]=useState();
    const [durationinFrames,setDurationinFrames]=useState(100);
    const router = useRouter();

    useEffect(() => {
        setOpenDialog(!openDialog)
        videoid&&GetVideoData();

    },[playVideo])

    const GetVideoData = async ()=>{
        const result = await db.select().from(VideoData)
        .where(eq(VideoData.id,videoid));
        setVideoData(result[0]);

    }
  return (
    <Dialog open={openDialog}>

  <DialogContent className="bg-white flex flex-col items-center">

      <DialogTitle className="text-3xl font-bold my-5">Your Video is Generated</DialogTitle>
      <Player
        component={RemotionVideo}
        durationInFrames={Number(durationinFrames.toFixed(0))}
        compositionWidth={450}
        compositionHeight={650}
        fps={30}
        controls={true}
        inputProps={{
            ...videoData,
            setDurationinFrames:(frameValue)=>setDurationinFrames(frameValue)
        }}
    />
    <div className='flex gap-10 mt-7'>
        <Button variant="ghost" onClick={()=>{router.replace('/dashboard');setOpenDialog(false)}}>
            Cancel
        </Button>
        <Button>
            Export
        </Button>
    </div>
  </DialogContent>
</Dialog>

  )
}

export default PlayerDialog