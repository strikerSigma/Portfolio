import Image from 'next/image'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'

export default function Home() {
  return (
<main >
    <div className='p-0 m-0 pb-10 bg-primary md:bg-[#FFFFFF]'>
      <Nav/>
      <Hero/>
     </div>
     <About/>
</main>
  )
}
