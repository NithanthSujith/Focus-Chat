import { BiSolidMessage } from "react-icons/bi";
import { PiNetwork } from "react-icons/pi";
import { MdOutlineCall } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import React, { useState, type SetStateAction } from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import clsx from "clsx";
import { IoIosArrowForward } from "react-icons/io";

const SIDEBAR_ITEMS = [
  {
    icon: <BiSolidMessage size={20} />,
    title: "Messages",
    link: "/chat",
  },
  {
    icon: <PiNetwork size={20} />,
    title: "Podules",
    link: "/chat",
  },
  {
    icon: <MdOutlineCall size={20} />,
    title: "Calls",
    link: "/chat",
  },
  {
    icon: <LuSettings size={20} />,
    title: "Settings",
    link: "/chat",
  },
];

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className={clsx(
        "w-20 h-screen border-r border-r-[#1C1B1B]/70 text-white p-5 flex flex-col justify-between relative transition-all duration-400",
        isSidebarOpen && "w-65",
      )}
    >
      <div
        className={clsx("flex size-5 bg-[#313030] absolute -right-2 top-8 rounded-full cursor-pointer justify-center items-center text-[#E5E2E1] transition-all duration-600", isSidebarOpen ? "rotate-180" : "rotate-0")}
        onClick={() => {
          setIsSidebarOpen((prev) => !prev);
        }}
      >
        <IoIosArrowForward size={12} />
      </div>
      <div className="w-full flex flex-col gap-10">
        <div className="flex items-center">
          <div className="size-10 border border-[#313030] aspect-square rounded-lg overflow-hidden shrink-0">
            <img src="/profilePic.png" alt="img" className="object-cover" />
          </div>
          <div
            className={clsx(
              "flex flex-col overflow-hidden",
              isSidebarOpen ? "w-40 ml-4" : "w-0 ml-0",
            )}
          >
            <div className="text-2xl font-extrabold text-[#B76DFF] tracking-wide">
              Nick
            </div>
            <div className="flex items-center gap-1 ">
              <p className="size-2 bg-[#00DBE7] rounded-full"></p>
              <p className="text-xs text-[#A3A3A3] whitespace-nowrap">
                Active Now
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {SIDEBAR_ITEMS.map((item, index) => (
            <div
              className={clsx(
                "flex items-center gap-3 rounded-md h-10 justify-between overflow-hidden group hover:bg-[#A855F7]/10 cursor-pointer transition-all duration-200 relative",
                activeTab === index && "bg-[#A855F7]/10",
              )}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              <div className="px-2 py-2 flex items-center">
                <div
                  className={clsx(
                    "text-[#737373] group-hover:text-[#C084FC] transition-all duration-200",
                    activeTab === index && "text-[#C084FC]",
                    !isSidebarOpen && "ml-0.5",
                  )}
                >
                  {item.icon}
                </div>
                <p
                  className={clsx(
                    "text-[#737373] group-hover:text-[#C084FC] transition-all duration-200 text-sm overflow-hidden",
                    activeTab === index && "text-[#C084FC]",
                    isSidebarOpen ? "w-32 ml-3" : "w-0 ml-0",
                  )}
                >
                  {item.title}
                </p>
              </div>
              {index === activeTab && isSidebarOpen && (
                <p className="w-0.5 h-full bg-[#C084FC]"></p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center bg-[#F0DBFF] py-2 rounded-lg cursor-pointer hover:bg-[#DDB7FF] transition-all duration-200">
          <div className={clsx("text-[#490080]")}>
            <LuMessageSquarePlus size={20} />
          </div>
          <div
            className={clsx(
              "text-[#490080] font-semibold overflow-hidden whitespace-nowrap",
              isSidebarOpen ? "w-20 ml-3" : "w-0 ml-0",
            )}
          >
            New Chat
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
