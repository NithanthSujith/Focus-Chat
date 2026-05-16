import React from 'react'

const BaseBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-black min-h-screen relative '>
        {/* <div className='absolute top-1/10 right-1/5 w-150 h-130  bg-[#CA93FF]/20 rounded-full blur-[200px]'></div>
        <div className='absolute bottom-1/10 left-1/5 w-150 h-130  bg-[#FF76F6]/20 rounded-full blur-[200px]'></div> */}
        <div className='absolute top-1/20 right-1/6 w-170 h-130  bg-radial-[at_50%_75%] from-[#CA93FF]/60 to black rounded-full blur-[220px]'></div>
        <div className='absolute bottom-1/20 left-1/6 w-170 h-130  bg-radial-[at_50%_75%] from-[#FF76F6]/40 to black rounded-full blur-[220px]'></div>
      {children}
    </div>
  )
}

export default BaseBg;
