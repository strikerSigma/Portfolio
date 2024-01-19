"use client"
import React,{useEffect} from 'react'
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
const fetcher = async() =>{ const res = await fetch('/Api/HandleMail');
return res;}
   useEffect(() => {
    const res = fetcher().then((e)=>e.json())
    console.log(res)
   },[])
  return (
    <div className='md:bg-[#FFFFFF] bg-primary flex justify-center'>
        <div className='flex mt-10 '>
            
            <div className='lg:pl-16 lg:pr-48'>
                <div className='text-[23px] md:text-[30px] font-medium md:mb-8 mb-4'>
                    Get in Touch
                </div>
                <form>
                    <label for="name" className='block font-semibold'>Name:</label>
                    <input type="text" id="name" className='md:w-[220px] w-[300px] focus:border-b-[1px] outline-0 border-b-[1px] mb-5 bg-primary md:bg-[#FFFFFF]'/>
                    
                    <label for="Email" className='block font-semibold'>Email:</label>
                    <input type="text" id="Email" className='md:w-[220px] w-[300px] focus:border-b-[1px] outline-0 border-b-[1px] mb-5  bg-primary md:bg-[#FFFFFF]'/>

                    <label for="Text" className='block font-semibold'>Message:</label>
                    <textarea id="multilineInput" name="multilineInput" rows="4" cols="50" className='md:w-[220px] w-[300px] border-[1.5px] outline-0 rounded-md  resize-none  bg-primary md:bg-[#FFFFFF]'></textarea>       
                    <button type="submit" className='md:w-[220px] w-[300px] block md:bg-primary bg-secondary px-[83px] py-[1px] text-[#FFFFFF] rounded-sm my-3 hover:opacity-90  hover:transition'>Submit</button>
                </form>
            </div>
            <div className='relative pl-24  hidden md:flex w-[300px] lg:w-[700px]'>
                <div className='bg-primary w-[24px] h-[24px] mt-[50px] ml-[28px] lg:ml-[85px] z-10'></div>
                <div className='w-[250px] h-[370px] bottom-0 bg-primary absolute ml-[132px] lg:ml-[200px] lg:w-[500px]'></div>
                <div className=' bg-secondary w-[260px] h-[204px] lg:p-10 lg:pt-7 lg:w-[300px] lg:h-[240px] top-16 lg:ml-24 ml-10 p-5 absolute'>
                    
                    <div className='flex space-x-5 mt-7'>
                        <IoIosMail  className='text-[#B7B7B7] mt-[1px]' />
                        <a href='ibrahimkhudai03@gmail.com' className='text-[#B7B7B7] hover:text-[#B7B7B7] text-[12px] hover:no-underline'>ibrahimkhudai03@gmail.com</a>
                    </div>
                    <div className='flex space-x-5 mt-3'>
                        <FaPhoneAlt className='text-[#B7B7B7] mt-[1px]' />
                        <div className='text-[#B7B7B7] hover:text-[#B7B7B7] text-[12px] hover:no-underline'>+92 303 911 032</div>
                    </div>
                    <div className='flex space-x-5 mt-3'>
                        <FaGithub  className='text-[#B7B7B7] mt-[1px]' />
                        <a href='ibrahimkhudai03@gmail.com' className='text-[#B7B7B7] hover:text-[#B7B7B7] text-[12px] hover:no-underline'>strikerSigma</a>
                    </div>
                </div>
                              
            </div>
        </div>
    </div>
  )
}

export default Contact