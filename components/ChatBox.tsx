
 
const ChatBox: React.FC<{
  message: string
  fromOwner: boolean
}> = ({message, fromOwner}) => {

  const stylePanel = fromOwner ? "shrink bg-purple-500 text-white" : "mr-48 bg-gray-300 border border-1 border-gray-400 text-black"
  // const styleDate = fromOwner ? "text-white" : "text-gray-500"
 
  return (
    <div className={'flex w-full'}>
            {fromOwner ? <div className="grow"></div> : <></>}
            <div className={`flex max-w-96 w-fit rounded-2xl shadow-sm shadow-gray-600 p-4 ${stylePanel} flex-col text-xl`}>
            {message}
            {/* <br></br>
            <div className="flex">
            <div className="grow"></div>
            <div className={`shrink ${styleDate} mt-2 text-xs`}>11.00 PM</div>
            </div> */}
            </div>
          </div>
  );
};

export default ChatBox