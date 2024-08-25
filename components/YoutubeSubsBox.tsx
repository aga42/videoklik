
 
const YoutubeSubsBox: React.FC<{
  colorBg: string
}> = ({colorBg}) => {
 
  return (
    <div className={'flex w-full'}>
            <div className={`flex w-full mx-52 h-48 rounded-full shadow-lg shadow-gray-600 ${colorBg} `}>
              
            </div>
            
          </div>
  );
};

export default YoutubeSubsBox