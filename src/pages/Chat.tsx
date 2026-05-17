import Sidebar from '../components/Sidebar'
import ChatList from '../components/ChatList'
import Chatbox from '../components/Chatbox'
import ChatUserDetails from '../components/ChatUserDetails'
import { useState } from 'react'

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div className='bg-black  min-h-screen flex'>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <ChatList/>
      <Chatbox/>
      <ChatUserDetails/>
    </div>
  )
}

export default Chat
