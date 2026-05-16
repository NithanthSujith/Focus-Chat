import { useState } from 'react'
import BaseBg from '../components/BaseBg'
import Input from '../components/Input'
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineLockOpen } from "react-icons/md";
import Button from '../components/Button';
import { IoIosArrowRoundForward } from "react-icons/io";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <BaseBg>
            <div className='w-full h-screen flex justify-center items-center flex-col '>
                <div></div>
                <div className='flex flex-col mb-10 gap-3'>
                    <div className='text-white text-5xl font-bold tracking-wider text-center'>Focus</div>
                    <div className='text-[#C9C6C5]/60 text-center font-semibold text-sm tracking-wider'>INTERACT IN REAL TIME</div>
                </div>
                <div className='z-10 w-md p-8 h-120 bg-[#121212b3] shadow-sm rounded-3xl relative flex flex-col border border-t-none border-[#1C1B1B]'>
                    <div className='absolute top-0 left-0 bg-linear-to-r from-transparent via-[#FFD7F5]/30 to-transparent w-full h-0.5'></div>
                    <div className='flex flex-col gap-5 '>
                        <Input title='Email Address' type='text' icon={<MdAlternateEmail size={20} />} setState={setEmail} isNote={false} placeholder='name@gmail.com' />
                        <Input title='Password' type='password' icon={<MdOutlineLockOpen size={20} />} setState={setEmail} isNote={true} placeholder='••••••••••••••••' />
                        <div className='flex w-full h-12'>
                            <Button title='Authenticate' onclick={() => { }} icon={<IoIosArrowRoundForward size={25} />} />
                        </div>
                    </div>
                    <p className='border-t border-neutral-50/10 mt-12 w-full'></p>
                    <div className='flex w-full flex-1 justify-end items-center flex-col  gap-3'>
                        <div className='text-[#E5E2E1]/50 text-sm tracking-wider'>New to Focus ?</div>
                        <div className='flex justify-center items-center px-5 py-1 border border-[#FFABF3] text-[10px] text-[#FFABF3] rounded-full pb-1 font-bold tracking-widest cursor-pointer bg-transparent hover:bg-[#FFABF3]/15 transition-all duration-200'>REQUEST INVITATION </div>
                    </div>
                </div>
            </div>
        </BaseBg>
    )
}

export default Login
