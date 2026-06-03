import clsx from "clsx";

type UserType = "self" |"reciever"

export interface MessageBoxProps {
    message : string;
    timestamp : string;
    user : UserType ;
    id : string;
}

const MessageBox = ({message, timestamp, user} : MessageBoxProps) => {
  return (
    <div className={clsx("flex flex-col",
        user == "self" ? "items-end" : "items-start"
    )}>
      <div className={clsx("max-w-6/10   p-4 text-md ",
        user == "self" ? "bg-linear-to-br from-[#ddb7ff] to-[#ffabf3] rounded-l-2xl rounded-br-2xl  text-[#40007]" : "bg-[#171717]/80 text-[#E5E2E1] rounded-r-2xl rounded-bl-2xl border border-[#262626]/70"
      )}>
        {message}
      </div>
      <div className={clsx("text-[#5F5E5E] text-xs mt-1",
        user == "self" ? "mr-3" : "ml-3" 
      )}>{timestamp}</div>
    </div>
  );
};

export default MessageBox;
