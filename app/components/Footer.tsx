import { MapPin } from 'lucide-react'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className=' py-20 flex lg:flex-row flex-col gap-[5%] items-center text-white px-6 lg:px-20 bg-[#45355f]'>
            <div className='lg:w-[45%] w-full'>
                <h3 className=' text-white uppercase text-4xl py-3'>Basam</h3>
                <p className='text-sm text-wrap'>
                    We are recognized as one of the best in delivering innovative Construction, Civic Engineering, Real Estate Development, Renovation, Architectural Design, and Interior Design solutions
                </p>
                <div className='py-4 flex items-center gap-2'>
                    <MapPin className='max-sm:text-[20px]' />
                    <span className='lg:text-[14px] text-[12px]'>First Floor, Block B 50, EbituUkiweStreet, (Bright Star Plaza) Jabi, Abuja, FCT</span>
                </div>
            </div>
            <div className='flex lg:gap-3 gap-6 flex-col max-sm:w-full max-sm:pt-10'>
                <div className='flex gap-2 flex-col'>
                    <span className='text-[18px]'>Reach Us</span>
                    <div className='flex lg:flex-row flex-col lg:items-center gap-6'>
                        <span className='flex items-center gap-3 font'>
                            <FiPhone className='font-bold' size={16} />
                            <p className='text-[14px]'>+234 (0) 7034481384</p>
                        </span>
                        <span className='flex items-center gap-3 font'>
                            <HiOutlineEnvelope className='font-bold' size={16} />
                            <span className='text-[14px]'>info@basamconstruction.com</span>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-[18px]'>Socials Handles</span>
                    <div className='flex items-center gap-4'>
                        <RiTwitterXLine size={typeof window !== "undefined" && window.innerWidth < 740 ? 28 : 32} />
                        <FaInstagram size={typeof window !== "undefined" && window.innerWidth < 740 ? 28 : 32} />
                        <FaLinkedin size={typeof window !== "undefined" && window.innerWidth < 740 ? 28 : 32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
