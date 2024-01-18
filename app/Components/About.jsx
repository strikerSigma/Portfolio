"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'
import Mypic from '@/public/Mypic.webp'

const About = () => {
  return (
    <div className='w-full md:h-[600px] md:pl-[140px] h-[1200px]  md:pt-16 bg-secondary flex flex-col-reverse md:flex-row '>
        <div className='pl-16 md:pl-0 pt-14 md:pt-0'>
            <span className='text-[#FFFFFF]  text-[30px] font-extrabold hidden md:inline'>
                About Me</span>
            <span className='text-primary  text-[30px] font-extrabold hidden md:inline'>:</span>
            <p className='text-[#FFFFFF]  font-light md:ml-10 pt-8 pr-10 md:pr-4'>
                I'm a web developer who blends creativity, 
                code, and stunning Ui to craft digital experiences that
                connect and inspire. My passion for engineering and coding
                led me to pursue undergrad in Electrical
                Engineering at COMSATS University of Science and Technology. 
                Despite my degree being more hardware focused in nature, I 
                honed my skills for full stack web development,
                Data visualization and Ui/Ux design.
            </p>
        <button className='mb-20 md:mb-0 mt-16 px-7 py-2 md:rounded-[25px] rounded-[3px] bg-primary relative button_slide'>
            <span className='mr-6 mt-5 text-[#FFFFFF]'>Contact Me</span>
            <FaArrowRightLong  className={` text-[#FFFFFF]  mt-0 arrow`}/>
        </button>
        </div>
        <div className=' md:pt-12 ml-5 mr-16 lg:mr-48 lg:ml-16 '>
            <span className='text-[#FFFFFF]  text-[30px] font-extrabold md:hidden'>
                About Me</span>
            <span className='text-primary  text-[30px] font-extrabold md:hidden '>:</span>
            <img src='../../Mypic.webp' alt="Picture of Me" className='lg:w-[1000px] md:w-[2000px] w-[300px] mt-16 md:mt-0 ml-7'/>
        </div>
    </div>
  )
}

export default About