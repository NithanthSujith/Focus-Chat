import { BiSolidMessage } from "react-icons/bi";
import { PiNetwork } from "react-icons/pi";
import { MdOutlineCall } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { useState } from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import clsx from "clsx";


const SIDEBAR_ITEMS = [
    {
        icon: <BiSolidMessage size={20} />,
        title: "Messages",
        link: "/chat"
    },
    {
        icon: <PiNetwork size={20} />,
        title: "Channels",
        link: "/chat"
    },
    {
        icon: <MdOutlineCall size={20} />,
        title: "Calls",
        link: "/chat"
    },
    {
        icon: <LuSettings size={20} />,
        title: "Settings",
        link: "/chat"
    },

]

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className='w-65 h-screen border-r border-r-[#1C1B1B]/70 text-white p-5 flex flex-col justify-between' >
            <div className='w-full flex flex-col gap-10'>
                <div className='flex gap-4 items-center'>
                    <div className='size-12 border border-[#313030] aspect-square rounded-lg overflow-hidden'>
                        <img src="/profilePic.png" alt="img" className='object-cover' />
                    </div>
                    <div className='flex flex-col '>
                        <div className='text-2xl font-extrabold text-[#B76DFF] tracking-wide'>Nick</div>
                        <div className='flex items-center gap-1 '>
                            <p className='size-2 bg-[#00DBE7] rounded-full'></p>
                            <p className='text-xs text-[#A3A3A3]'>Active Now</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-1">
                    {
                        SIDEBAR_ITEMS.map((item, index) => (
                            <div className={clsx(
                                'flex items-center gap-3 rounded-xl h-11 justify-between overflow-hidden group hover:bg-[#A855F7]/10 cursor-pointer transition-all duration-200',
                                activeTab === index && "bg-[#A855F7]/10",
                            )}
                                onClick={() => {
                                    setActiveTab(index)
                                }}
                            >
                                <div className="px-3 py-2 flex items-center gap-3">
                                    <div className={clsx(
                                        'text-[#737373] group-hover:text-[#C084FC] transition-all duration-200',
                                        activeTab === index && "text-[#C084FC]"
                                    )}>{item.icon}</div>
                                    <p className={clsx(
                                        'text-[#737373] group-hover:text-[#C084FC] transition-all duration-200',
                                        activeTab === index && "text-[#C084FC]"
                                    )}>{item.title}</p>
                                </div>
                                {
                                    index === activeTab && <p className="w-0.75 h-full bg-[#C084FC]"></p>
                                }

                            </div>
                        ))
                    }

                </div>
            </div>
            <div>
                <div className="flex justify-center items-center gap-3 bg-[#F0DBFF] py-2 rounded-lg cursor-pointer hover:bg-[#DDB7FF] transition-all duration-200">
                    <div className="text-[#490080]"><LuMessageSquarePlus size={20} /></div>
                    <div className="text-[#490080] font-semibold">New Chat</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
