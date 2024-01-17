"use client"
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    <div className='flex justify-between p-7 '>
        <div >Logo</div>
        <ul  className='md:flex space-x-9 hidden md:text-primary text-[#FFFFFF]'>
            <li className='pt-2 '>About</li>
            <li className='pt-2 '>Projects</li>
            <li className='pt-2 '>Blog</li>
            <li className='bg-primary px-5 py-2 rounded-2xl white'>Contact Me</li>
        </ul>
    <div className='sm:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
    </div>
    
    </div>
        
        </>
  )
}

export default Nav