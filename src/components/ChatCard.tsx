import clsx from "clsx";

interface ChatCardProps {
  username: string;
  timestamp: string;
  lastMessage: string;
  imageURL: string;
  isActive: boolean;
  isOnline: boolean;
}

const ChatCard = ({
  username,
  timestamp,
  lastMessage,
  imageURL,
  isActive,
  isOnline,
}: ChatCardProps) => {
  return (
    <div
      className={clsx(
        "flex px-5 py-4 items-center text-[#E5E2E1] gap-4 cursor-pointer rounded-xl  transition-all duration-200",
        isActive && "bg-[#313030] hover:bg-[#313030]",
        !isActive && "hover:bg-[#313030]/70",
      )}
    >
      <div className="size-12 rounded-full bg-black relative">
        <img src={imageURL} alt="img" className="object-cover" />
        {isOnline && (
          <div className="size-4 rounded-full p-1 bg-black bottom-1 -right-1 absolute flex justify-center items-center">
            <p className="w-full h-full rounded-full bg-[#00DBE7] "></p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex justify-between items-center ">
          <div className="text-md font-semibold">{username}</div>
          <div className="text-xs text-[#737373]">{timestamp}</div>
        </div>
        <div className="text-[#A3A3A3] text-sm w-3/4 max-h-10 overflow-hidden">{lastMessage}</div>
      </div>
    </div>
  );
};

export default ChatCard;
