import {Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
 
const RoundedMidBox: React.FC<{color: string}> = ({color}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const { fps } = useVideoConfig();
 
  const scale = spring({
    fps,
    frame,
  });

  // const bounce = interpolate(frame, [90, 115], [0.8, 1], {
  //   easing: Easing.bounce,
  //   extrapolateRight: "clamp",
  // });

  
 
  return (
    <div style={{transform: `scale(${scale})`}} className={'flex w-full'}>
    {/* <div style={{opacity}} className={'flex w-full'}> */}
      <div className={`flex w-full mx-16 h-48 rounded-3xl shadow-lg shadow-gray-600 ${color}`}>
        <div className=' shrink'>
          <Img src={staticFile("/images/img_iosnotif.png")} className='flex my-auto p-6 h-full w-fit'/>
        </div>
        
        <div className='grow flex flex-col gap-y-4'>
          <p className='text-gray-900 text-4xl mt-12'><b>Videoklik</b></p>
          <p className='text-gray-500 text-4xl '>Get special discount only for you</p>
        </div>

        <div className='shrink mt-12 text-3xl text-gray-500 mr-10'>
        now
        </div>
        
      </div>
      
    </div>
  );
};

export default RoundedMidBox