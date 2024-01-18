import React from 'react'
import { FaGithub ,FaLinkedin  } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-secondary md:flex justify-between '>
        <div className='py-4 px-7 text-[#FFFFFF]'>
            <p className='inline-block'>Keep in touch</p>
            <div className='inline-block md:block ml-7 md:ml-0'>
                <div className='flex my-3 space-x-5 '>
                <FaLinkedin  className='text-[#FFFFFF] mt-[1px]'/>
                 <IoIosMail  className='text-[#FFFFFF] mt-[1px]' />
                <FaGithub  className='text-[#FFFFFF] mt-[1px]' />
            </div>
            </div>
            
        </div>
        <div className='md:py-4 px-7 text-[#FFFFFF] flex md:block'>
            <span className='mt-5 md:mt-0'>Subscribe to my Blog</span>
            <span className=' md:block ml-3 md:ml-0'>
                <button className=' my-3  px-7 py-2 md:rounded-[25px] rounded-[3px] bg-primary relative button_slide '>
            <span className='mr-6 mt-5 text-[#FFFFFF]'>Subscribe</span>
            <FaArrowRightLong  className={` text-[#FFFFFF]  mt-0 arrow`}/>
        </button>
            </span>
        
        </div>

    </div>
  )
}

export default Footer