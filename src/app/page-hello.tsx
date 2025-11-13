"use client";
import Header from "../sections/Header";
import Intro from "../sections/Intro";
import Features from "../sections/Features";
import Advantage from "../sections/Advantage";
import LevelUp from "../sections/LevelUp";
import Plan from "../sections/Plan";
import Support from "../sections/Support";
import Testimonials from "../sections/Testimonials";
import Tailored from "../sections/Tailored";
import Divider from "../sections/Divider";
import Footer from "../sections/Footer";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    // Show button when we scroll down 200px
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="relative">
        <Intro />
        <Features />
        <Advantage />
        <LevelUp />
        <Plan />
        <Support />
        <Testimonials />
        <Tailored />
        <Divider />
        <Footer />
        <div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
          {showButton && (
            <button
              className="absolute bottom-12 w-[50px] h-[50px] -right-10 translate-x-[100%] bg-gradient-to-b from-[#555555] to-black shadow-[0px_10px_25px_-3px_#00000026] rounded-full flex justify-center items-end"
              onClick={handleScrollToTop}
            >
              <Image src="/assets/uparrow.png" alt="↑" width={20} height={35} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
