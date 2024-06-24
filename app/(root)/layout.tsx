'use client'
import React, { useEffect } from "react";
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import Aos from "@/components/shared/Aos";
const layout = ({children}: { children:React.ReactNode}) => {

  return (
    <main className='root w-full '>
      <Aos />
      <Navbar />
      {children}
      
      <Footer />


    </main>
  )
}

export default layout