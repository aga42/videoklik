import {useCurrentFrame, useVideoConfig} from 'remotion';

const TypingText: React.FC<{title: string}> = ({title}) => {

  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // A new character every 3 frames
	const charsShown = Math.floor(frame / 3);
	const textToShow = title.slice(0, charsShown);
	// Show the cursor while the text is typing, then start blinking
	const cursorShown =
		textToShow.length === title.length ? Math.floor(frame / 10) % 2 === 1 : true;

  return (
    <div className='flex w-full'>
      <p className='text-4xl text-gray-500 ml-16 mt-9' style={{opacity: durationInFrames < 90 ? Number(cursorShown) : 1}}>{title == textToShow ? title : textToShow}</p>
    </div>
  )

}

export default TypingText