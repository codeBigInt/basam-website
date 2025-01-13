import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import React from 'react'
import bg from "../../public/assets/images/wuye.jpg"

const About = () => {
  const bgProps = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4 )), url(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
  return (
    <section id="about" className='px-6 lg:px-20 py-24 w-full flex lg:flex-row flex-col gap-[5%] items-stretch justify-between'>
      <div className='lg:w-[40%] w-full min-h-[400px] rounded-xl' style={bgProps}></div>
      <div className='flex-1 flex flex-col lg:gap-8 gap-6 pt-10 lg:pt-0'>
        <span className='bg-[#45355f]/15 text-[#45355f] uppercase p-1 px-3 max-sm:text-[14px] rounded-3xl w-max'>Who we are</span>
        <h2 className='lg:text-5xl text-3xl font-bold capitalize pr-10'>When you think home, Think <span className='text-[#0098db]'>Basam.</span></h2>
        <p>
          Basam is backed by a decade of insight and expertise. Over the years, we have successfully carved a niche as the best in building high-end infrastructures and delivering unparalleled experiences for our highly esteemed clients. Over the years, we have maintained our reputation by delivering premium-quality services. We are recognized as one of the best in delivering innovative Construction, Civic Engineering, Real Estate Development, Renovation, Architectural Design, and Interior Design solutions. We&apos;re here to ensure we meet and exceed clients&apos; and customers&apos; expectations.
        </p>
        <div className='flex md:flex-row flex-col gap-6 items-center'>
          <Button className='bg-transparent max-sm:w-full h-12 border hover:bg-gray-200 hover:text-[#45355f] hover:border-gray-500 border-[#45355f] rounded-lg text-[#45355f]'>Make an appointment</Button>
          <Button className='bg-[#45355f] max-sm:w-full flex items-center gap-2 h-12 rounded-lg text-white'>
            <span>View gallery</span>
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About
