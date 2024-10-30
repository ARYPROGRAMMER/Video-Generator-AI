import React, { useState } from 'react'
import { Thumbnail } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import PlayerDialog from './PlayerDialog';

function VideoList({videoList}) {
    const [openPlayDialog,setOpenPlayDialog]=useState(false);
    const [videoid,setVideoid]=useState();

  return (
    <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {videoList?.map((video,index)=>(
                <div key={video?.id || index} className='cursor-pointer hover:scale-105 transition-all shadow-sm'
                onClick={()=>{setOpenPlayDialog(Date.now());setVideoid(video?.id)}}>
                     <Thumbnail
                        component={RemotionVideo}
                        compositionWidth={350}
                        compositionHeight={550}
                        frameToDisplay={30}
                        durationInFrames={120}
                        fps={30}
                        style={{
                            borderRadius: 20,
         
                            overflow: 'hidden',
                            
                            imageRendering: 'pixelated',

                        }}
                        inputProps={{
                            ...video,
                            setDurationinFrames:(v)=>console.log(v)
                        }}
                        />
                     
                </div>
                
        ))}   <PlayerDialog playVideo={openPlayDialog} videoid={videoid}/>
    </div>
  )
}

export default VideoList