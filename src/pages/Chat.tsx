import React from 'react'
import BaseBg from '../components/BaseBg'
import Sidebar from '../components/Sidebar'
import ChatList from '../components/ChatList'

const Chat = () => {
  return (
    <div className='bg-black  min-h-screen flex'>
      <Sidebar/>
      <ChatList/>
    </div>
  )
}

export default Chat
