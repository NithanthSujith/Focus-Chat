import { MdSend } from "react-icons/md";
import type { MessageBoxProps } from "./MessageBox";
import MessageBox from "./MessageBox";

const MESSAGE_LIST : MessageBoxProps[] = [
  {
    message : "Hey, have you checked the encryption logs for the Aura protocol? I'm seeing some unusual activity in the tertiary node.",
    timestamp : "12:42 PM",
    user : "reciever",
    id : "1"
  },
  {
    message : "Checking them now. I'll initiate a ghost-scan on the node immediately. Stand by.",
    timestamp : "12:43 PM",
    user : "self",
    id : "2"
  },
  {
    message : "The neural interface is stable now. We're ready for the full sync when you are.",
    timestamp : "12:45 PM",
    user : "reciever",
    id : "3"
  },

]

const Chatbox = () => {
  return (
    <div className="h-screen flex-1 bg-[#0E0E0E] border-r border-r-[#1C1B1B]/70 flex flex-col">
      <div className="w-full h-[calc(100%-6.25rem)] relative pt-5">
        <div className="text-[#737373] border  left-1/2 w-fit m-auto px-4 py-1 rounded-full text-sm flex justify-center items-center pb-1.5 border-[#313030]/70 bg-[#171717]/80">
          Today, June 2nd
        </div>
        <div className="w-full h-full flex-col flex p-5 gap-3 overflow-y-auto chatScrollbar">
          {
            MESSAGE_LIST.map((item)=>(
              <MessageBox message={item.message} timestamp={item.timestamp} user={item.user} id={item.id} key={item.id} />
            ))
          }
         
        </div>
      </div>
      <div className="w-full h-25 p-5 flex items-center  gap-3 bg-[#0E0E0E]/10 backdrop-blur-xl">
        <div className="flex-1 rounded-xl border border-[#313030]/70 bg-[#171717]/80 h-12"></div>
        <div className="size-10 rounded-lg bg-[#DDB7FF] flex justify-center items-center cursor-pointer hover:bg-[#c082ff] duration-200 transition-all"><MdSend size={20} color="#490080" /></div>
      </div>
    </div>
  );
};

export default Chatbox;
