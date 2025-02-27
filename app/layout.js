"use client"
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CopyrightFooter from '@/components/CopyWrite';

import React, { useState, useEffect } from "react";


 const metadata = {
  title: 'Better.com Replica',
  description: 'A replica of Better.com using Next.js App Router.',
};

export default function RootLayout({ children }) {
  // 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Check if the bottom of the hero section is at or above the top of the viewport
        if (heroBottom <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // 

  
  return (
    <html lang="en">
      <body className="bg-white">
      <Navbar isScrolled={isScrolled} />

        <main className="container m-auto py-1 ">{children}</main>
        <Footer />
        <CopyrightFooter />

      </body>
    </html>
  );
}
