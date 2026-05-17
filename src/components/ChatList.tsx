import SearchBar from './SearchBar'
import ChatCard from './ChatCard'


const CHAT_LIST = [
    {
        username : "Elena Vance",
        timeStamp : "12:45 PM",
        lastMessage : "The neural interface is stable now...",
        imageURl : "./Avatar_1.png",
        isActive : true,
        isOnline : true,
    },
    {
        username : "Marcus Kaine",
        timeStamp : "Yesterday",
        lastMessage : "Did you see the latest uplink speed?",
        imageURl : "./Avatar_2.png",
        isActive : false,
        isOnline : false,
    },
    {
        username : "Sasha Grey",
        timeStamp : "Monday",
        lastMessage : "Meeting at 09:00 encryption secure.",
        imageURl : "./Avatar_3.png",
        isActive : false,
        isOnline : false,
    },
] 

const ChatList = () => {
    return (
        <div className='w-sm h-screen bg-[#0A0A0A] border-r border-r-[#1C1B1B]/70 flex flex-col'>
            <div className='p-5'>
                <SearchBar />
            </div>
            <div className='p-5 pt-0 flex flex-col gap-1'>
                {
                    CHAT_LIST.map((chat, index)=>(
                        <ChatCard username={chat.username} timestamp={chat.timeStamp} lastMessage={chat.lastMessage} imageURL={chat.imageURl} isActive={chat.isActive} isOnline={chat.isOnline} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChatList
