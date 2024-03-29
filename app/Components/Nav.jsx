"use client"

import Hamburger from 'hamburger-react'
import Link from 'next/link'


const Nav = ({state}) => {

const scroll = ()=>{
               
 }

// useEffect(()=>{
//     lock();
  
// },[state.menu])
// const lock = () =>{if(state){useLockBodyScroll()}}
// if(state.menu){document.body.style.overflow = "hidden";}
// else {document.body.style.overflow = "scroll"}
  return (
    <div className={`relative ${state.menu ? 'fixed h-[800px]': ''}`}>
        <div className={`z-0 absolute ${state.menu ? '': 'hidden'} bg-secondary z-90 w-[1000px] h-[10000px]`}>
                <ul className='text-[#F7EBDF] text-[20px] font-light p-5'>
                    <li className='rounded-lg bg-[#F7EBDF] w-[348px] h-[55px] mb-14 text-secondary font-semibold p-3'>
                        Close 
                    </li>
                    <li className='py-7 border-b-2 border-b-[#F7EBDF] w-[300px] pointer btn2 btn-background-slide2' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>
                        <div className='pl-2'>About</div></li>
                    <li className='py-7 border-b-2 border-b-[#F7EBDF] w-[300px] pointer btn2 btn-background-slide2' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>
                        <div className='pl-2'>Projects</div>
                    </li>
                    <li className='py-7 border-b-2 border-b-[#F7EBDF] w-[300px] pointer btn2 btn-background-slide2' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>
                        <div className='pl-2'>Blog</div>
                    </li>
                    <li className='py-7 border-b-2 border-b-[#F7EBDF] w-[300px] pointer btn2 btn-background-slide2' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>
                        <div className='pl-2'>Contact</div>
                    </li>
                </ul>
            </div>
    <div className='flex justify-between p-7 '>
        <div >Logo</div>
        <ul  className='md:flex space-x-9 hidden md:text-primary text-[#FFFFFF]'>
            <li className='pt-2 cursor-pointer' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            } >About</li>
            <li className='pt-2 cursor-pointer' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>Projects</li>
            <li className='pt-2 cursor-pointer' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>Blog</li>
            <li className='bg-primary cursor-pointer px-5 py-2 rounded-2xl white' onClick={
                 state.about.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }>Contact Me</li>
        </ul>
    <div className='sm:hidden'>
        <div className='relative'>
            <div className={`z-10 absolute right-3 top-[-5px] ${state.menu? 'bg-secondary  rounded-md':''}`}>
                <Hamburger toggled={state.menu} toggle={state.setMenu} color="#FFFFFF" />
            </div>
            
        </div>
    </div>
    
    </div>
        
        </div>
  )
}

export default Nav