"use client"
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {useContext, createContext, useState,useRef} from 'react'





export default function Home() {
 const [menu , setMenu] = useState(false)
 const about = useRef();

  return (
   

<main className='w-full overflow-hidden '>
    <div className='p-0 m-0 pb-10 bg-primary md:bg-[#FFFFFF]'>
      <Nav state={{menu,setMenu,about}} />
      <Hero menu={menu}/>
     </div>
      <div className={`${menu ? 'hidden': ''}`}>
     <About state={{about}}/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     </div>
</main>
  )
}

