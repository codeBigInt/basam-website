import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { RiTwitterXLine } from 'react-icons/ri'

const ContactHeader = () => {
    return (
        <div id='contact-us' className="flex justify-between bg-[#0045db] max-sm:bg-[#1f186a] items-end lg:items-center py-4 lg:px-20 px-6 text-white">
            <div className='flex lg:flex-row flex-col lg:items-center gap-3 lg:gap-6'>
                <span className='flex items-center gap-3 font'>
                    <FiPhone className='font-bold' size={16} />
                    <p className='lg:text-[14px] text-[12px]'>+234 (0) 7034481384</p>
                </span>
                <span className='flex items-center gap-3 font'>
                    <HiOutlineEnvelope className='font-bold' size={16} />
                    <span className='lg:text-[14px] text-[12px]'>info@basamconstruction.com</span>
                </span>
            </div>
            <div className='lg:flex hidden items-center gap-4'>
                <RiTwitterXLine size={20} />
                <FaInstagram size={20} />
                <FaLinkedin size={20} />
            </div>
        </div>
    )
}

export default ContactHeader
