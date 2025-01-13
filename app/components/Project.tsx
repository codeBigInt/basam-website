"use client";
import React, { useState } from 'react'
import img1 from "../../public/assets/images/wuye.jpg";
import img3 from "../../public/assets/images/img3.jpg";
import img4 from "../../public/assets/images/img4.jpg";
import img5 from "../../public/assets/images/img5.jpg";
import img7 from "../../public/assets/images/img6.jpg";
import img8 from "../../public/assets/images/img8.jpg";
import img9 from "../../public/assets/images/img9.jpg";

const Project = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const images = [
        { src: img1.src, title: "Project One", gridSpan: "lg:col-span-2 lg:row-span-2", aspectRatio: "aspect-square" },
        { src: img3.src, title: "Project Three", aspectRatio: "aspect-video", gridSpan: "lg:col-span-2" },
        { src: img4.src, title: "Project Four", gridSpan: "lg:col-span-2", aspectRatio: "aspect-video" },
        { src: img5.src, title: "Project Five", gridSpan: "lg:col-span-2", aspectRatio: "aspect-video" },
        { src: img7.src, title: "Project Seven", gridSpan: "lg:col-span-2", aspectRatio: "aspect-video" },
        { src: img8.src, title: "Project Eight", aspectRatio: "aspect-video" },
        { src: img9.src, title: "Project Nine", aspectRatio: "aspect-video" }
    ]
    return (
        <div id='projects' className="w-full min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <h2 className="text-4xl lg:text-5xl lg:text-[70px] font-semibold text-[#45355f] mb-12">
                    Project Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] ${image.gridSpan || ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div 
                                className={`relative w-full ${image.aspectRatio}`}
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