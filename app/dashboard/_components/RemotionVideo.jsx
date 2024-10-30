import React, { useEffect } from 'react';
import { AbsoluteFill, Img, Sequence, useVideoConfig, Audio, useCurrentFrame, interpolate } from 'remotion';

function RemotionVideo({ script, audioFileUrl, captions, imageList, setDurationinFrames }) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Set duration in frames using useEffect to avoid state update during render
  useEffect(() => {
    if (captions?.length > 0) {
      const durationInFrames = captions[captions.length - 1].end / 1000 * fps;
      setDurationinFrames(durationInFrames);
    }
  }, [captions, fps, setDurationinFrames]);

  const getDurationFrames = () => {
    return captions[captions?.length - 1]?.end / 1000 * fps;
  };

  const getCurrentCaptions = () => {
    const currentTime = (frame / fps) * 1000;
    const currentCaption = captions.find((word) => currentTime >= word.start && currentTime <= word.end);
    return currentCaption ? currentCaption.text : '';
  };

  return script && (
    <AbsoluteFill className="bg-black">
      {imageList?.map((item, index) => {
        const startTime = (index * getDurationFrames()) / imageList?.length;
        const duration = getDurationFrames();
        const scale = (index) => interpolate(
          frame,
          [startTime, startTime + duration / 2, startTime + duration],
          index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );
        return (
          <Sequence key={index} from={startTime} durationInFrames={getDurationFrames()}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Img
                src={item}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: `scale(${scale(index)})`,
                }}
              />
              {/* Explicit caption positioning at the bottom */}
              <div style={{
                position: 'absolute',
                bottom: 50,  // Keeps captions at the bottom
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '24px',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',  // Centers captions horizontally
                alignItems: 'center', // Ensures text is vertically centered within the div
              }}>
                <h2>
                  {getCurrentCaptions()}
                </h2>
              </div>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      <Audio src={`${audioFileUrl}`} />
    </AbsoluteFill>
  );
}

export default RemotionVideo;
