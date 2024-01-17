"use client"
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div className='relative '>
        <div className='absolute bg-primary w-5/6 h-[341px] right-20 hidden md:block'>
            <div className='text-[#F7F7F733] opacity-30 font-extrabold relative'>
                <p className='text-[70px] absolute right-0 top-5'>MERN STACK DEVEL</p>
                <p className='text-[38px] absolute right-0 top-32'>DATA VISUALIZATION EXP</p>
                <p className='text-[15px] absolute left-[400px] top-48 '>UI/UX DESIGNER</p>
            </div>
        </div>
        <div className='absolute font-extrabold white lg:left-[240px] md:left-[70px] left-[30px] top-[100px]'>
            <span className='block md:text-[96px] text-[64px]'>Hi,</span>
            <span className='md:text-[60px] text-[36px]'>I'm Ibrahim</span>
            <span className='block md:text-[60px] text-[36px] text-secondary'>A Full Stack Developer</span>
        </div>
        <div className='md:pt-[450px] pt-[370px] lg:pl-[200px] pl-[35px] w-3/5 md:pl-[80px] flex flex-col md:block'>
        <button className='px-7 py-2 md:rounded-[25px] rounded-[3px] md:bg-primary bg-secondary relative button_slide'>
            <span className='mr-6 mt-5 text-[#FFFFFF]'>Learn More</span>
            <FaArrowRightLong  className={` text-[#FFFFFF]  mt-0 arrow`}/>
        </button>
        <button class="btn btn-background-slide md:mx-8 mt-5 md:mt-0 md:rounded-[25px] md:before:rounded-[25px] before:rounded-[3px] rounded-[3px]">Download CV</button>
        </div>
        
       
        
    </div>
  )
}

export default Hero