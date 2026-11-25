"use client";
import React, { useState } from 'react'
import img1 from "../../public/assets/images/wuye.jpg";
import img3 from "../../public/assets/images/img3.jpg";
import img4 from "../../public/assets/images/img4.jpg";
import img5 from "../../public/assets/images/img5.jpg";
import img7 from "../../public/assets/images/img6.jpg";
import img8 from "../../public/assets/images/img8.jpg";
import img9 from "../../public/assets/images/img9.jpg";
import l1 from "../../public/assets/images/landscape1.jpg";
import l2 from "../../public/assets/images/landscape2.jpg";
import l3 from "../../public/assets/images/landscape3.jpg";
import l4 from "../../public/assets/images/landscape4.jpg";
import l5 from "../../public/assets/images/landscape5.jpg";
import l6 from "../../public/assets/images/landscape6.jpg";

const Project = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Layout (lg, 4 cols): one 2x2 feature + two 2x1 tiles, then rows of two 2x1 tiles. No gaps.
    const images = [
        { src: l1.src, title: "Landscaping Works" },
        { src: l2.src, title: "Landscaping Works" },
        { src: l3.src, title: "Landscaping Works" },
        { src: l4.src, title: "Landscaping Works" },
        { src: l5.src, title: "Landscaping Works" },
        { src: l6.src, title: "Landscaping Works" },
        { src: img1.src, title: "Residential Apartments" },
        { src: img3.src, title: "Residential Estate Development" },
        { src: img4.src, title: "Apartment Block, Completed" },
        { src: img5.src, title: "Commercial Plaza" },
        { src: img7.src, title: "Apartment Entrance, Completed" },
        { src: img8.src, title: "Terraced Apartments" },
        { src: img9.src, title: "Residential Units, Completed" },
    ]
    return (
        <div id='projects' className="w-full min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <h2 className="text-4xl lg:text-5xl lg:text-[70px] font-semibold text-[#45355f] mb-12">
                    Project Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px] gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-2'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div 
                                className="relative w-full h-full aspect-video lg:aspect-auto"
                            >
                                <div 
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `url(${image.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                         height: '100%'
                                    }}
                                />
                                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className={`text-white text-xl font-semibold transform transition-all duration-300 ${
                                        hoveredIndex === index 
                                            ? 'translate-y-0 opacity-100' 
                                            : 'translate-y-4 opacity-0'
                                    }`}>
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project