import { HousePlug, ListTodo, MessageCircleQuestion, Pickaxe } from 'lucide-react'
import React from 'react'

const Services = () => {
    const services = [
        {
            icon: <Pickaxe size={45} />,
            title: "Construction",
            desc: "Full-service residential, commercial, and hospitality construction with state-of-the-art infrastructure development. We undertake projects ranging from luxury villas to huge commercial complexes with great precision and innovation."
        },
        {
            icon: <ListTodo size={45} />,
            title: "Project Mgmt.",
            desc: "End-to-end project management that includes planning, scheduling, cost control, and quality control. Our structured approach ensures timely completion with budget maintenance and highest standards."
        },
        {
            icon: <HousePlug size={45} />,
            title: "Real-Estate",
            desc: "Professional advice on construction methodology, feasibility studies, and regulatory compliance. Our advisory services ensure optimized project outcomes through technical expertise and industry best practices."
        },
        {
            icon: <MessageCircleQuestion size={45} />,
            title: "Consultancy",
            desc: "Integrated property development services, from residential and commercial projects to renovations and architectural solutions. We transform spaces through strategic design and modern amenities, creating lasting value for our clients."
        },
    ]
    return (
        <div id='services' className='flex flex-col items-center ga-8 px-6 lg:px-20 py-20'>
            <div className='flex flex-col items-center mb-4 lg:mb-0'>
                <p className='text-xs bg-[#45355f]/10 rounded-3xl p-1 px-4 w-max uppercase'>What we offer</p>
                <h2 className='lg:text-[70px] text-[50px] font-semibold'>Services</h2>
            </div>
            <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-8'>
                {
                    services.map((service, index) => (
                        <div key={index} className='md:w-[45%] flex flex-col items-center gap-6 p-4 lg:p-6 py-20 rounded-lg bg-white border border-[#45355f] shadow-xl'>
                            <div className='flex flex-col items-center gap-4'>
                                <span className='max-sm:bg-[#45355f]/10 p-2 rounded-full'>{service.icon}</span>
                                <span className='text-[18px]'>{service.title}</span>
                                <p className='text-[14px] break-words'>{service.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
