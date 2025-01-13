"use client";
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineLibraryBooks } from 'react-icons/md'

interface Props {
    isDisplayed: boolean;
    setIsDisplayed: (val: boolean) => void
}

const Nav = ({ isDisplayed, setIsDisplayed }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const nav = [
        {
            href: "#about",
            route: "About"
        },
        {
            href: "#services",
            route: "Services"
        },
        {
            href: "#project",
            route: "Projects"
        },
    ]

    return (
        <div className='flex justify-between sticky top-0 z-[40] bg-white items-center py-4 lg:px-20 px-6 text-black w-full'>
            <div className={`${scrolled ? 'flex' : 'hidden'}`}>
                <Image src='/assets/icons/mini-logo.webp' alt='mini-logo' width={50} height={50} />
            </div>
            <div className={`${scrolled ? 'hidden' : 'flex'}`}>
                <Image src='/assets/icons/basam.webp' className='lg:w-[180px] w-[130px]' alt='logo' width={180} height={60} />
            </div>
            <ul className='lg:flex hidden  items-center gap-6 font-bold uppercase text-[#45355f]'>
                <Link href={"#about"} className='hover:bg-[#45355f] hover:text-white text-[14px] cursor-pointer py-2 px-4 rounded-lg'>About</Link>
                <Link href={"#services"} className='hover:bg-[#45355f] hover:text-white text-[14px] cursor-pointer py-2 px-4 rounded-lg'>Services</Link>
                <Link href={"#projects"} className='hover:bg-[#45355f] hover:text-white text-[14px] cursor-pointer py-2 px-4 rounded-lg'>Projects</Link>
                <div>
                    <Link href={"#contact-us"}>
                        <button onClick={() => setIsDisplayed(!isDisplayed)} className='py-3 flex px-4 items-center gap-2 hover:bg-[#45355f]/20 border border-[#45355f] rounded-lg'>
                            <MdOutlineLibraryBooks />
                            <span className='text-[14px]'>Make Appointment</span>
                        </button>
                    </Link>
                </div>
            </ul>
            <Sheet>
                <SheetTrigger className="lg:hidden flex">
                    <div className='py-2 px-3 lg:hidden flex items-center gap-2 hover:bg-[#45355f]/20 border border-[#45355f] rounded-lg'>
                        <Menu />
                    </div>
                </SheetTrigger>
                <SheetContent className='pt-20 max-md:flex hidden flex-col overflow-y-auto items-start'>
                    <SheetTitle className='text-left text-2xl pb-4'>Basam Ltd.</SheetTitle>
                    {
                        nav.map((item, index) => {
                            return index !== 1 ? (
                                <SheetClose className='w-full justify-start flex text-start' key={index}>
                                    <Link className='text-[18px] py-4 border-b-[1px] w-full' href={item.href}>{item.route}</Link>
                                </SheetClose>
                            ) : (
                                <div className='w-full flex flex-col items-center justify-between' key={index}>
                                    <div className='w-full'>
                                        <button onClick={() => setIsOpen(!isOpen)} className='text-[18px] flex items-center justify-between py-4 border-b-[1px] w-full'>
                                            <span>{item.route}</span>
                                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                                        </button>
                                        {isOpen && <DropDown />}
                                    </div>
                                </div>
                            )
                        })
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Nav

export const DropDown = () => {
    const subNav = [
        {
            href: "#services",
            route: "Project Management"
        },
        {
            href: "#services",
            route: "Construction"
        },
        {
            href: "#services",
            route: "Real-estate"
        },
        {
            href: "#services",
            route: "Consultation"
        },
    ]
    return (
        <ul className='w-full pt-6 flex flex-col gap-2'>
            {
                subNav.map((item, index) => (
                    <li key={index} className='py-3 text-[14px] border-b'>{item.route}</li>
                ))
            }
        </ul>
    )
}