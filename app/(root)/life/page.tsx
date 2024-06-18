"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { lifes } from '@/constants';
const Life = () => {
  return (
    <div className='md:mt-[88px] px-10 md:px-20'>
      <div className='w-full aspect-[16/5] overflow-hidden  bg-zinc-400 rounded-lg relative'>
        <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/lifeBanner.jpg' alt="image" 
          width={200} height={24} priority={false} 
          layout="responsive" 
          objectFit="cover"
          className="w-full h-full top-0 left-0 object-cover  "
          data-aos="fade"
        />
      <div className=' flex flex-col items-start gap-4  absolute md:top-10 md:left-10 top-2 left-2 z-10'>
        <div className=' bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md' data-aos="fade-left">大漁生活</div>
        <div className=' text-3xl md:text-5xl font-thin  tracking-tight ' data-aos="fade-left">LIFE</div>
      </div>

      </div>

      <div className='mt-14 w-10/12 mx-auto'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={600}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination]}
        className='w-full'
      >
        {
          lifes.map((item,index)=>{
            return(
              <SwiperSlide>
                <div className='flex flex-col md:flex-row items-end gap-10'>
                  <div className='md:w-1/2 '>
                    <Image src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/life/${item.image}`} alt="image" 
                      width={200} height={40} priority={false} 
                      layout="responsive" 
                      objectFit="cover"
                      className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
                      // data-aos="zoom-out"
                    />
                  </div>
                  <div className='md:w-1/2 flex flex-col gap-4'>
                    <div className=' font-bold text-3xl'>{item.title}</div>
                    <div className='text-black/80 text-sm'>{item.desc}</div>
                  </div>

                </div>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>


    </div>
  )
}

export default Life