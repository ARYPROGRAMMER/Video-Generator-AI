import React, { useEffect, useState } from 'react';
import {Player} from '@remotion/player';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,

  } from "@/components/ui/dialog"
  
import RemotionVideo from './RemotionVideo';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { VideoData } from '@/configs/schema';
import { eq } from 'drizzle-orm';

  
function PlayerDialog({playVideo,videoid}) {
    const [openDialog,setOpenDialog]=useState(false);
    const [videoData,setVideoData]=useState();

    useEffect(() => {
        setOpenDialog(playVideo)
        videoid&&GetVideoData();

    },[playVideo])

    const GetVideoData = async ()=>{
        const result = await db.select().from(VideoData)
        .where(eq(VideoData.id,videoid));
        console.log(result);
        setVideoData(result[0]);

    }
  return (
    <Dialog open={openDialog}>

  <DialogContent className="bg-white flex flex-col items-center">

      <DialogTitle className="text-3xl font-bold my-5">Your Completed Video</DialogTitle>
      <Player
        component={RemotionVideo}
        durationInFrames={120}
        compositionWidth={300}
        compositionHeight={450}
        fps={30}
    />
    <div className='flex gap-10'>
        <Button variant="ghost">
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