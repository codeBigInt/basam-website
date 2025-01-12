"use client";
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
    <main className="w-full relative min-h-screen text-[#45355f]">
      <ContactHeader />
      <Nav isDisplayed={isDislayed} setIsDisplayed={setIsDisplayed} />
      <div className="overflow-x-hidden">
        <Hero isDisplayed={isDislayed} setIsDisplayed={setIsDisplayed} />
        <About />
        <Goals />
        <Services />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
