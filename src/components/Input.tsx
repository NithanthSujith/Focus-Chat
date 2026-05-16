import React, { type Dispatch, type ReactElement, type SetStateAction } from 'react'
import { MdAlternateEmail } from "react-icons/md";

interface InputProps {
    title: string;
    icon: ReactElement<any, any>;
    type: string;
    setState: Dispatch<SetStateAction<string>>;
    isNote: boolean,
    placeholder ?: string,
}

const Input = ({ title, icon, type, setState, isNote, placeholder }: InputProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }
    return (
        <div className='flex flex-col gap-2 '>
            <div className='flex justify-between items-center'>
                <div className='text-sm font-semibold text-[#FFD7F5]/50 tracking-wider'>{title}</div>
                {isNote && <div className='text-[10px] font-semibold text-[#DDB7FF]/80 cursor-pointer hover:underline  hover:underline-offset-3'>FORGOT ACCESS ?</div>}

            </div>
            <div className='flex border-[0.5px] border-neutral-50/20 h-13 rounded-xl '>
                <div className='flex  w-10 justify-center items-center text-[#FFEBF8]/70'>{icon}</div>
                <input type={type} placeholder={placeholder} onChange={(e) => handleInputChange(e)} className='flex-1 border-none focus:outline-none text-white pr-3' />
            </div>
        </div>
    )
}

export default Input
