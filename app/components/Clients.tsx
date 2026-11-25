"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const clients = [
    { name: "Nigeria Customs Service", src: "/assets/clients/nigeria-customs.png" },
    { name: "Homadil Realty", src: "/assets/clients/homadil.png" },
    { name: "SABC Limited", src: "/assets/clients/sabc.png" },
    { name: "JRB Construction Company Limited", src: "/assets/clients/jrb.webp" },
];

const Clients = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(false);

    // Only show the arrows when the logos don't all fit.
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 1);
        check();
        const ro = new ResizeObserver(check);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const scroll = (dir: 1 | -1) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
    };

    const arrowClass =
        "shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#45355f] text-white hover:bg-[#45355f]/80 transition-colors";

    return (
        <section id="clients" className="w-full bg-white px-6 lg:px-20 py-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-xs bg-[#45355f]/10 rounded-3xl p-1 px-4 w-max uppercase">Who we have served</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#45355f]">Our Clients</h2>
                </div>

                <div className="w-full flex items-center gap-4">
                    {canScroll && (
                        <button aria-label="Previous clients" onClick={() => scroll(-1)} className={arrowClass}>
                            <ArrowLeft size={18} />
                        </button>
                    )}
                    <div
                        ref={trackRef}
                        className="flex-1 flex items-center gap-6 overflow-x-auto [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {clients.map((p) => (
                            <div
                                key={p.name}
                                className="snap-center shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/5 lg:max-w-[20%] h-28 flex items-center justify-center px-4"
                            >
                                <Image
                                    src={p.src}
                                    alt={p.name}
                                    width={200}
                                    height={100}
                                    className="max-h-24 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {canScroll && (
                        <button aria-label="Next clients" onClick={() => scroll(1)} className={arrowClass}>
                            <ArrowRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Clients;
