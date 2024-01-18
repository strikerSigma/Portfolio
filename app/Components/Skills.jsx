import React from 'react'

const Skills = () => {
  return (
    <div className='w-full bg-[#FFFFFF]'>
        <div className='md:flex md:justify-center p-10'>
            <div>
                <p className='text-[30px] font-semibold'>Technologies I use</p>
                <div className='w-[132px] h-[5px] md:ml-[70px] bg-primary'></div>
                
            </div>
            
        </div>
        <div className='flex justify-center px-12 md:px-28 mb-12'>
                I can create secure and scalable web servers using 
                Javascript, Python and Golang that include 
                authentification, catalog management, validation,
                handling media files and so on. On the frontend side
                I can utilize react/next js to build responsive Ui's.
        </div>
        <div className='flex justify-center px-12 md:px-28 mb-12'>
        <div className='flex flex-wrap flex-row md:space-x-20'>
            <ul className='mb-4 space-y-2 text-[#5B5B5B] relative'>
            {/* frontend */}
            <li className='font-1xl text-[25px]  text-secondary z-10 absolute pl-1 '>Frontend</li>
            <div className='absolute bg-primary w-[100px] h-[12px] top-[13px] z-0 '></div>
            <li className='pl-4 pt-10'>Next js/React js</li>
            <li className='pl-4'>Material Ui</li>
            <li className='pl-4'>Tailwind css</li>
            <li className='pl-4'>Framer motion</li>
            <li className='pl-4'>D3 & chart.js</li>
            {/* <img src='../../list.png' className='absolute top-11 h-[110px]'/> */}
        </ul>
        <ul className=' space-y-2 text-[#5B5B5B] relative ml-14 md:ml-0'>
            <li className='font-1xl text-[25px] text-secondary z-10 absolute pl-1 '>Cloud</li>
            <div className='absolute bg-primary w-[60px] h-[12px] top-[13px] '></div>
            <li className='pl-4 pt-10'>Rest Api</li>
            <li className='pl-4'>JSON</li>
            <li className='pl-4'>Docker</li>
            <li className='pl-4'>Linux</li>
            
        </ul>
        <ul className='space-y-2 text-[#5B5B5B] relative'>
            <li className='font-1xl text-[25px] text-secondary z-10 absolute pl-1 '>Backend</li>
            <div className='absolute bg-primary w-[100px] h-[12px] top-[13px] '></div>
            <li className='pl-4 pt-10'>Mongo db</li>
            <li className='pl-4'>Django</li>
            <li className='pl-4'>Express js</li>
            <li className='pl-4'>Golang-Gin</li>
            <li className='pl-4'>Postgresql</li>
        </ul>
        </div>
        </div>
        <div>


            <div class="terminal md:w-2/3 "><div class="terminal__task-bar"> 
            <span class="terminal__circle terminal__circle--red"></span>
             <span class="terminal__circle terminal__circle--yellow"></span>
              <span class="terminal__circle terminal__circle--green"></span>
              </div><div class="terminal__window"><p class="terminal__prompt">
                $ <span class="terminal__prompt--typing"><span class="cover cover--gimme-dev">
            </span>gimme code_for_this_website</span></p><p class="terminal__prompt terminal__prompt--checkout">
            checkout my github: <span class="terminal__window--highlight">
            <a href="https://github.com/strikerSigma/Portfolio" target="_blank">https://github.com/strikerSigma/Portfolio</a>
            </span></p><p class="terminal__prompt terminal__prompt--show-contact">$ <span class="terminal__prompt--typing">
            <span class="cover cover--show-contact"></span>show direct contact</span></p>
            <p class="terminal__prompt terminal__prompt--mail">mail: <span class="terminal__window--highlight">
            <a href="ibrahimkhudai03@gmail.com">ibrahimkhudai03@gmail.com</a></span></p></div></div> 

        </div>

    </div>
  )
}

export default Skills