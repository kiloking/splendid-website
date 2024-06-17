import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div className='mt-[120px] px-20'>
      <div className=' w-full mx-auto items-stretch gap-10'>
        <div className=' flex flex-col items-start gap-4'>
          <div className=' bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md' data-aos="fade-left">新案鑑賞</div>
          <div className='text-5xl font-thin  tracking-tight ' data-aos="fade-left">PROJECTS</div>
        </div>

        <div className='flex justify-between gap-5 my-10'>
          <div className='w-1/2  aspect-square relative group/p01 cursor-pointer'>
            <div className='w-full overflow-hidden rounded-2xl relative   ' data-aos="zoom-out">
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/project01.jpg' alt="image" 
                  width={200} height={200} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
                  // data-aos="zoom-out"
                />
                <div className=' bg-gradient-to-t from-[#1F0B03] via-[#1F0B0300] transition-all duration-500 opacity-0 group-hover/p01:opacity-100   w-full h-full absolute z-10 top-0 left-0  flex flex-col justify-end items-start p-8 text-white/90'>
                  <div className=' mb-2'>城心留白秘境｜大里城心，留白謐境，讓居住沐光，為鄰里富藏</div>
                  <ul>
                    <li>24-38坪 ，2-3房</li>
                    <li>基地面積 455.8坪</li>
                    <li>棟戶規劃 2幢，2棟，53戶住家</li>
                    <li>樓層規劃 地上10層，地下2層</li>
                  </ul>
                </div>
            </div>
            <div className='mt-4'>
              <div className=' flex items-end gap-3'> <div className=' font-bold text-3xl'>大漁仁美</div> <span>2024</span></div>
              <div className='text-black/80 text-sm mt-2'>台中市北屯區</div>
            </div>
           
           
          </div>
          <div className='w-1/2  aspect-square relative group/p02 cursor-pointer' data-aos="zoom-out">
            <div className='w-full overflow-hidden rounded-2xl relative   '>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/project02.jpg' alt="image" 
                  width={200} height={200} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full group-hover/p02:scale-110 transition-all duration-500"
                />
                <div className=' bg-gradient-to-t from-[#1F0B03] via-[#1F0B0300] transition-all duration-500 opacity-0 group-hover/p02:opacity-100   w-full h-full absolute z-10 top-0 left-0  flex flex-col justify-end items-start p-8 text-white/90'>
                  <div className=' mb-2'>綠意跳島建築｜安身氣度、居住無界，夢想格局在此展開</div>
                  <ul>
                    <li>37-45坪， 3房 </li>
                    <li>基地面積482坪</li>
                    <li>棟戶規劃 2幢，2棟，44戶住家，1戶店面</li>
                    <li>樓層規劃 地上12、5層，地下3層</li>
                  </ul>
                </div>
            </div>
            <div className='mt-4'>
              <div className=' flex items-end gap-3'> <div className=' font-bold text-3xl'>大漁仰昀</div> <span>2022</span></div>
              <div className='text-black/80 text-sm mt-2'>台中市大里區</div>
            </div>
           
           
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects