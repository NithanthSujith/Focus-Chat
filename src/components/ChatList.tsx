import React from 'react'
import SearchBar from './SearchBar'
import ChatCard from './ChatCard'

const ChatList = () => {
    return (
        <div className='w-sm h-screen bg-[#0A0A0A] border-r border-r-[#1C1B1B]/70 flex flex-col'>
            <div className='p-5'>
                <SearchBar />
            </div>
            <div className='p-5 pt-0 '>
                <ChatCard/>
            </div>
        </div>
    )
}

export default ChatList
