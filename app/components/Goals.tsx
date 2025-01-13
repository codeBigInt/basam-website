import React from 'react';
import { Blocks, ScanQrCode, ShieldCheck, Verified } from "lucide-react"
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Goals = () => {
    const goalsArr = [
        {
            text: 'Mission',
            image: "",
            desc: "Delivering solid and high-quality services to clients through uncompromising construction services."
        },
        {
            text: 'vision',
            image: "",
            desc: "To become the most preferred company by attaining excellence through our exceptional constructions and designs."
        }
    ]

    const values = [
        {
            color: "text-purple-500",
            title: "Transparency",
            icon: <ScanQrCode />,
        },
        {
            color: "text-purple-500",
            title: "Professionalism",
            icon: <Verified />,
        },
        {
            color: "text-blue-500",
            title: "Safety",
            icon: <ShieldCheck />,
        },
        {
            color: "text-yellow-500",
            title: "Creativity",
            icon: <Blocks />,
        },
    ]

    return (
        <div className="w-full bg-[#45355f]/10 flex lg:flex-row flex-col px-6 lg:px-20 py-24 gap-[5%]">
            <div className='flex flex-col gap-3 lg:max-w-[40%]'>
                <h2 className='lg:text-[70px] text-[50px] font-bold'>Our Goals</h2>
                <p className='lg:text-3xl text-xl font-light text-wrap'>Share in our dream by partnering to build your next big project</p>
                <div className='flex-1 flex justify-end flex-col gap-6'>
                    <h3 className='font-semibold text-[18px] text-[#0045db]'>Core values</h3>
                    <div className='flex items-center gap-2 w-full flex-wrap'>
                        {
                            values.map((value,index) => (
                                <span key={index} className={cn(`border flex w-[48.5%] items-center gap-2 lg:w-max p-2 px-4 rounded-3xl bg-transparent`, {
                                    "border-purple-500": index == 0,
                                    "border-pink-500": index == 1,
                                    "border-blue-500": index == 2,
                                    "border-yellow-500": index == 3,
                                })}>
                                    <span className={`lg:text-[14px] text-[12px]`}>{value.icon}</span>
                                    <span className='text-[12px]'>{value.title}</span>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex-1 flex md:flex-row flex-col pt-10 lg:pt-0 gap-4'>
                {
                    goalsArr.map((goal, index) => (
                        <div key={index} className='shadow-xl p-6 my-4 lg:my-0 border bg-white rounded-lg flex flex-col gap-4'>
                            <div className='bg-blue-400/5 flex justify-center items-end rounded-lg w-full min-h-[300px]'>
                                <Image width={200} height={200} src={index === 0 ? "/assets/images/fit.svg" : "/assets/images/best-place.svg"} className='w-full h-full rounded-lg object-fill' alt="rocket" />
                            </div>
                            <h3 className='text-lg font-semibold capitalize'>{goal.text}</h3>
                            <p>{goal.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Goals
