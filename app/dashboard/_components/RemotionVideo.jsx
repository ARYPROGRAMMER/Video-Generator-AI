import React from 'react'
import { AbsoluteFill, Img, Sequence, useVideoConfig , Audio, useCurrentFrame, interpolate} from 'remotion'

function RemotionVideo({script,audioFileUrl,captions,imageList,setDurationinFrames}) {

  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();
  const getDurationFrames = ()=>{
    setDurationinFrames(captions[captions?.length-1]?.end/1000*fps)
    return captions[captions?.length-1]?.end/1000*fps
  }

  const getCurrentCaptions = ()=>{
    const currentTime = frame/fps*1000 
    const currentCaption=captions.find((word)=>currentTime>=word.start && currentTime<=word.end)
    return currentCaption?currentCaption.text:''
  }
  return script&&(
    <AbsoluteFill className='bg-black'>
      {imageList?.map((item,index)=>
     { 
      
      const startTime = ((index*getDurationFrames())/imageList?.length)
      const duration = getDurationFrames();
      const scale=(index)=>interpolate(
        frame,
        [startTime,startTime+duration/2,startTime+duration],
        index%2==0?[1,1.8,1]:[1.8,1,1.8],
        {
          extrapolateLeft:'clamp',
          extrapolateRight:'clamp'
        }
      )
      return (
     
        <Sequence key={index} from={startTime} durationInFrames={getDurationFrames()}>
          <AbsoluteFill style={{justifyContent: 'center',alignItems: 'center'}}>
          <Img 
            src={item}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${scale(index)})`
            }}
          />
          <AbsoluteFill style={{
            color: 'white',
            justifyContent: 'center',
            top: undefined,
            bottom: 50,
            height: 150,
            textAlign: 'center',
            width: '100%'
          }}>
            <h2 className='text-2xl '>
              {getCurrentCaptions()}
            </h2>
          </AbsoluteFill>
          </AbsoluteFill>
        </Sequence>
  
      )}
      
      )}
     <Audio src={`${audioFileUrl}`} />
     
    </AbsoluteFill>
  )
}

export default RemotionVideo