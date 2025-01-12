"use client";
import Image from "next/image";
import ContactHeader from "./components/ContactHeader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Goals from "./components/Goals";
import Services from "./components/Services";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { useState } from "react";


export default function Home() {
  const [isDislayed, setIsDisplayed] = useState(false)
  return (
    <div className="w-full min-h-screen text-[#45355f] overflow-hidden">
      <ContactHeader />
      <Nav isDisplayed={isDislayed} setIsDisplayed={setIsDisplayed} />
      <Hero isDisplayed={isDislayed} setIsDisplayed={setIsDisplayed} />
      <About />
      <Goals />
      <Services />
      <Project />
      <Footer />
    </div>
  );
}
