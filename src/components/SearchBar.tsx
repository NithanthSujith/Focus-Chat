import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center text-white bg-[#313030] w-full rounded-lg">
      <div className="flex justify-center items-center p-3 text-neutral-400"><IoSearchSharp size={18} /></div>
      <div className="flex-1 h-full">
        <input type="text" name="chatsearch" id="chatsearch" className="pr-3 py-3 text-sm text-neutral-100 w-full focus:outline-none" placeholder="Search conversations..."/>
      </div>
    </div>
  )
}

export default SearchBar
