import React from 'react'
import { datas } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
const Works = () => {

  return (
    <div className='md:mt-[120px] px-10 md:px-20'>
      <div className=' w-full mx-auto items-stretch gap-10'>
        <div className=' flex flex-col items-start gap-4'>
          <div className=' bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md' data-aos="fade-left">經典作品</div>
          <div className='text-5xl font-thin  tracking-tight ' data-aos="fade-left">WORKS</div>
        </div>
      </div>

      <div className='grid md:grid-cols-4 gap-4 mt-10 min-h-[500px]'>
        {datas.map((d,index)=>{
          return(
            <Link  key={d.route} href={'/works/'+d.route} className=' relative group/p01 cursor-pointer'>
              <div className='w-full overflow-hidden rounded-2xl relative   ' data-aos="zoom-out">
                  <Image src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/${d.image}`} alt="image" 
                    width={200} height={200} priority={false} 
                    layout="responsive" 
                    objectFit="cover"
                    className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
                    // data-aos="zoom-out"
                  />
                  <div className=' bg-gradient-to-t from-[#1F0B03] via-[#1F0B0380] transition-all duration-500 opacity-0 group-hover/p01:opacity-100   w-full h-full absolute z-10 top-0 left-0  flex flex-col justify-end items-start p-4 text-white/90'>
                    <div className=' mb-2'>{d.desc}</div>
                  </div>
              </div>
              <div className='mt-2'>
                <div className=' flex items-end gap-3'> <div className=' font-bold text-2xl'>{d.title}</div> <span>{d.years}</span></div>
                <div className='text-black/80 text-sm mt-2'>{d.city}</div>
              </div>
            
            
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Works