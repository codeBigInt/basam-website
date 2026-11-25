"use client";
import ContactHeader from "./components/ContactHeader";
const Nav = dynamic(() => import("./components/Nav"), { ssr: false })
import Hero from "./components/Hero";
import About from "./components/About";
import Goals from "./components/Goals";
import Services from "./components/Services";
import Project from "./components/Project";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { useState } from "react";
import dynamic from "next/dynamic";


export default function Home() {
  const [isDislayed, setIsDisplayed] = useState(false)
  // Scroll back to the top, then open the booking form.
  const openBooking = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsDisplayed(true)
  }
  return (
    <main className="w-full relative min-h-screen text-[#45355f]">
      <ContactHeader />
      <Nav openBooking={openBooking} />
      <div className="overflow-x-hidden">
        <Hero isDisplayed={isDislayed} setIsDisplayed={setIsDisplayed} />
        <About openBooking={openBooking} />
        <Partners />
        <Goals />
        <Services />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
