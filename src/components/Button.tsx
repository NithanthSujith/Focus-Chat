import React, { type ReactElement } from 'react'

interface ButtonProps {
    title : string;
    onclick : ()=>void;
    icon : ReactElement<any, any>
}

const Button = ({title, onclick, icon}:ButtonProps) => {
  return (
    <div className='flex w-full h-full justify-center items-center bg-[#DDB7FF] rounded-xl mt-5 group cursor-pointer hover:bg-[#CA93FF] transition-all duration-200   '>
      <p className='text-[#490080] text-lg flex justify-center items-center mb-1'>{title}</p>
      <p className='flex justify-center items-end text-[#490080]  group-hover:translate-x-2 transition-all duration-200'>{icon}</p>

      
    </div>
  )
}

export default Button
