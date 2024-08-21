import { Img, staticFile } from 'remotion';
 
const TweetBox: React.FC<{color: string, title: string, username: string, image: any}> = ({color, title, username, image}) => {
 
  return (
    <div className={`flex w-full mx-16 h-96 rounded-3xl shadow-lg shadow-gray-600 ${color}`}>
        <div className=' shrink ml-8 mt-4'>
          { image === "" ?
            <Img src={staticFile("/images/img_aga.png")} className='flex my-auto p-6 h-52 w-fit rounded-full'/>
            :
            <Img src={image} className='flex my-auto p-6 h-full w-fit'/>
          }
        </div>
        
        <div className='grow flex flex-col gap-y-4 mt-4'>
          <p className='text-gray-900 text-4xl mt-12'><b>{title}</b></p>
          <p className='text-gray-500 text-4xl '>{username}</p>
        </div>

      </div>
  );
};

export default TweetBox