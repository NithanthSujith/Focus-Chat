import React from 'react'

const ChatCard = () => {
    return (
        <div className='flex p-3 items-center text-[#E5E2E1] gap-3 cursor-pointer rounded-xl hover:bg-[#313030] transition-all duration-200'>
            <div className='size-12 rounded-full bg-black relative'>
                <img src="./Avatar_1.png" alt="img" className='object-cover' />
                <div className='size-3 rounded-full p-1 bg-black bottom-1 right-1 absolute'>
                    <p className='size-2 rounded-full bg-[#00DBE7] '></p>
                </div>
            </div>
            <div className='flex flex-col gap-1 flex-1'>
                <div className='flex justify-between items-center '>
                    <div className='text-md font-semibold'>Elena Vance</div>
                    <div className='text-xs text-[#737373]'>12:45 PM</div>
                </div>
                <div className='text-[#A3A3A3] text-sm w-3/4'>The neural interface is stable now...</div>
            </div>
        </div>
    )
}

export default ChatCard
