import React from 'react'

const Projects = () => {
  return (
        <div className='w-full bg-[#FFFFFF] py-10'>
        <div className='md:flex md:justify-center p-10'>
            <div>
                <p className='text-[30px] font-semibold'>Project Gallery</p>
                <div className='w-[132px] h-[5px] md:ml-[40px] bg-primary'></div>
                
            </div>
            
        </div>
        <div className='flex justify-center shadow-xl ml-5 mr-5'>
            <div className='flex '>
                <div className='hidden md:block lg:mr-48'>
                    <img src='../../project.png' alt='project photo' className='h-[400px] w-[1000px] lg:h-auto lg:w-[700px] '/>
                </div>
                <div className=' p-10 mf:pl-20 relative '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="#F45534" className='w-[22px] h-[22px] absolute md:hidden top-11 left-7'>
                        <path d="M21.7925 10.7003C13.6435 10.4236 11.2807 3.47072 11.1209 0C11.1209 8.54761 4.01255 10.6864 0.236329 10.7074C8.89954 10.8176 11.0849 16.9884 11.129 20.5098C11.3953 12.5193 18.1773 10.6421 21.7925 10.7003Z" fill="#F45534"/>
                    </svg>
                    <p className='font-bold text-[20px] lg:text-[30px] mb-3 lg:mb-10 ml-4 md:ml-0 lg:mt-16'> UI for a Startup in biotechnology</p>
                    <p> This project as of now is just for demo
                         purposes so the links might be broken
                          for this particular project, however
                           rest assured as more stunning projects
                            are on the way to fill the gallery.</p>
                    <ul className='lg:mt-16 text-[#5B5B5B] text-[10px] lg:text-[20px] space-x-2 mt-8 flex flex-wrap'>
                        <li className='border-[2px] rounded-md py-[2px] px-[8px] border-[#5B5B5B]' >Next js</li>
                        <li className='border-[2px] rounded-md py-[2px] px-[8px] border-[#5B5B5B]'>Material Ui</li>
                        <li className='border-[2px] rounded-md py-[2px] px-[8px] border-[#5B5B5B]'>Tailwind css</li>
                    </ul>  
                    <div className='md:flex mt-8 lg:mt-16'>
                        <button className='bg-primary text-[#FFFFFF] md:px-6 px-[52px] md:mb-0 mb-3 py-2 mr-2 lg:text-[20px] hover:opacity-90  hover:transition'>View Live</button>           
                        <button className='bg-[#FFFFFF] px-6 py-2 shadow-md text-primary lg:text-[20px] hover:opacity-90  hover:transition'>View Case Study</button>     
                    </div>          
                </div>
            </div>
        </div>
        </div>
  )
}

export default Projects