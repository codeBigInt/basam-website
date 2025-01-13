"use client"
import React from 'react'
import bg from "../../public/assets/images/bg.jpg"
import BookingForm from './BookingForm'
import Typewriter from 'typewriter-effect';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, ArrowLeft } from 'lucide-react';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


interface Props {
  isDisplayed: boolean;
  setIsDisplayed: (val: boolean) => void
}

const Hero = ({ isDisplayed, setIsDisplayed }: Props) => {
  const bgProps = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={bgProps} className='w-full min-h-[650px] max-sm:h-[500px] md:h-[650px]'>
      <div className='bg-black/50 relative px-6 lg:px-20 py-10 w-full h-full flex flex-row items-center'>
        <div className='flex flex-col gap-2 w-full lg:max-w-[50%] md:flex-1'>
          <div className='flex lg:flex-row flex-col lg:items-end gap-3'>
            <h1 className='text-[40px] lg:text-[70px] font-bold capitalize text-white'>Basam</h1>
            <div className='lg:text-[30px] text-[25px] font-extralight  text-white -translate-y-4'>your partners in</div>
          </div>
          <div className='text-white font-bold capitalize text-[40px] lg:text-[70px] min-lg:leading-10 leading-4 lg:space-y-3'>
            <Typewriter
              options={{
                strings: ['Project Mgmt', "Construction", "Real-estate", 'Consultation',],
                autoStart: true,
                loop: true,
                cursor: "_",
                wrapperClassName: "lg:leading-[85px] leading-[60px]"
              }}
            />
          </div>
          <p className='text-white text-[14px] lg:text-[16px]'>Delivering Uncompromisung Construction services.</p>
          <div className='md:flex-row flex flex-col lg:gap-3'>
            <button onClick={() => typeof window !== "undefined" && window.innerWidth > 740 ? setIsDisplayed(!isDisplayed) : (() => { })} className='py-3 lg:my-4 my-3 md:flex hidden px-8 items-center gap-2 hover:bg-[#45355f]/20 border text-white border-white w-max rounded-lg'>
              <MdOutlineLibraryBooks />
              <span className='text-[14px]'>Make Appointment</span>
            </button>
            <Dialog>
              <DialogTrigger asChild className='flex md:hidden'>
                <button className='py-3 lg:my-4 my-3 flex px-8 items-center gap-2 hover:bg-[#45355f]/20 border text-white border-white w-max rounded-lg'>
                  <MdOutlineLibraryBooks />
                  <span className='text-[14px]'>Make Appointment</span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-full flex justify-center bg-transparent border-none">
                <DialogTitle className='hidden'>Booking Form</DialogTitle>
                <BookingForm className='w-full max-w-full' />
              </DialogContent>
            </Dialog>
            <Link href={"#projects"}>
              <button className='py-3 lg:my-4 my-3 flex px-8 items-center gap-2 hover:text-white hover:bg-white/20 border bg-white text-[#45355f] border-white w-max rounded-lg'>
                <span className='text-[14px]'>View Projects</span>
                <ArrowDownCircle size={16} />
              </button>
            </Link>
          </div>
        </div>
        {isDisplayed && <BookingForm />}
        <Link href={"#about"} className='absolute max-sm:-right-3 right-0 self-end mb-6'>
          <Button className='bg-white/20 backdrop:blur-md rounded-3xl border-[2px] border-white -rotate-90'>
            <ArrowLeft />
            <span className='font-bold uppercase'>Scroll</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
