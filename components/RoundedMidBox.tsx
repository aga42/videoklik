import { Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
 
const RoundedMidBox: React.FC<{color: string, title: string, desc: string}> = ({color, title, desc}) => {
  const frame = useCurrentFrame();

  const { fps } = useVideoConfig();
 
  const scale = spring({
    fps,
    frame,
  });

  return (
    <div style={{transform: `scale(${scale})`}} className={'flex w-full'}>
    {/* <div style={{opacity}} className={'flex w-full'}> */}
      <div className={`flex w-full mx-16 h-48 rounded-3xl shadow-lg shadow-gray-600 ${color}`}>
        <div className=' shrink'>
        <Img src={staticFile("/images/img_iosnotif.png")} className='flex my-auto p-6 h-full w-fit'/>
        </div>
        
        <div className='grow flex flex-col gap-y-4'>
          <p className='text-gray-900 text-4xl mt-12'><b>{title}</b></p>
          <p className='text-gray-500 text-4xl '>{desc}</p>
        </div>

        <div className='shrink mt-12 text-3xl text-gray-500 mr-10'>
        now
        </div>
        
      </div>
      
    </div>
  );
};

export default RoundedMidBox