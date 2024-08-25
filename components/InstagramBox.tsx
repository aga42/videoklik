import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
 
const InstagramBox: React.FC<{colorBg: string, colorText: string, title: string}> = ({colorBg, colorText, title}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const { fps } = useVideoConfig();

  const titleText = ` ${title}`
  const words = titleText.split(" ");

  const word: React.CSSProperties = {
    display: "inline-block",
  };
 
  return (
    // <div style={{transform: `scale(${scale})`}} className={'flex w-full'}>
    <div style={{opacity}} className={'flex w-full'}>
      <div className={`flex mx-auto h-48 rounded-full shadow-md shadow-gray-600 ${colorBg}`}>
        <div className=' shrink ml-8 my-4'>
          <Img src={staticFile("/images/img_iglogo.svg")} className='flex my-auto p-2 h-full w-fit'/>
        </div>
        
        <div className='grow flex flex-col gap-y-4 mr-32 ml-6'>
          <p className={`text-7xl mt-14 ${colorText}`}>
            {words.map((t: any, i: any) => {
              const delay = i * 5;

              const scale = spring({
                fps: fps,
                frame: frame - delay,
                config: {
                  damping: 1000,
                },
              });

              return (
                <span
                  key={t}
                  style={{
                    ...word,
                    transform: `scale(${scale})`,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default InstagramBox