import {Easing, interpolate, useCurrentFrame} from 'remotion';
// import {useVideoConfig, spring} from 'remotion';
 
const RoundedBox: React.FC<{}> = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // const { fps } = useVideoConfig();
 
  // const scale = spring({
  //   fps,
  //   frame,
  // });

  const bounce = interpolate(frame, [90, 115], [0.8, 1], {
    easing: Easing.bounce,
    extrapolateRight: "clamp",
  });

  
 
  return (
    // <div style={{transform: `scale(${scale})`}}></div>
    // <div style={{opacity, textAlign: 'center', fontSize: '7em'}}>{title}</div>
    <div style={{opacity}} className={'flex w-full'}>
      <div className="flex w-full mx-16 h-28 rounded-full bg-white shadow-lg shadow-gray-600">
        <div className=' grow'>
          {/* <p className='text-4xl text-gray-500 ml-16 mt-9' style={{opacity: Number(cursorShown)}}>{textToShow}</p> */}
        </div>
        <div className=" flex-none items-end content-end w-64 h-24 rounded-full bg-blue-400 my-2 mr-2" style={{transform: frame < 90 ? 'null' : `scale(${bounce})`, background: frame > 90 && frame < 96 ? '#3b82f6' : '#60a5fa'}}>
          <p className='text-white text-4xl text-center mb-7'>Search</p>
        </div>
      </div>
      
    </div>
  );
};

export default RoundedBox