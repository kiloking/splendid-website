'use client'
import React, { useEffect } from "react";
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
const layout = ({children}: { children:React.ReactNode}) => {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <main className='root w-full '>
      <Navbar />
      {children}
      
      <Footer />


    </main>
  )
}

export default layout