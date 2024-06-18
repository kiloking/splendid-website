"use client"
import React from 'react'
import Image from 'next/image'

const W02 = () => {
  return (
    <div >
      <div className=' relative w-full md:h-screen flex flex-col md:flex-row bg-slate-500 overflow-hidden'>
        <div className='w-full relative'>
          <div className=' absolute top-0 left-0  w-full h-full bg-gradient-to-b from-black/40 via-black/30 to-black/15 z-10'></div>
          <Image src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w02/cover.jpg`} alt="image" 
            width={200} height={200} priority={false} 
            layout="responsive" 
            objectFit="cover"
            className="w-full group-hover/p01:scale-110 transition-all duration-500 z-0"
            data-aos="zoom-out"
          />
          <div className=' absolute z-10 text-white bottom-5 md:text-3xl font-thin w-3/4 md:w-2/3  text-right right-5'>
            坐收萬坪公園的翠綠蓊鬱，Dali Art 國際藝術村環抱其中，「森自在」以得天獨厚之姿為住戶提供高氧綠意的舒適環境，讓公園裡的晨跑、漫步，成為美好一天的開始。
          </div>
        </div>

        <div className='z-10 md:w-[300px] w-full h-full bg-[#c82b2b] flex flex-col  text-white py-4 px-6'>
        
          <div className='text-4xl font-medium md:mt-12'>
            <div className='text-sm text-white/80 mb-1'>2017</div>
            森自在 
          </div>
          <ul className='mt-6 space-y-2 text-sm '>
            <li>坪數：28-54坪，2-4房</li>
            <li>基地面積：485坪</li>
            <li>棟戶規劃：1棟，86戶住家</li>
            <li>樓層規劃：地上15層,地下3層</li>
          </ul>
        </div>
      </div>

      
      <div className='flex flex-col md:flex-row justify-between  my-10 w-10/12 mx-auto gap-6 md:gap-0 '>
        <div className='md:w-1/2 w-full   relative group/p01 cursor-pointer'>
          <div className='w-full overflow-hidden   ' data-aos="fade">
            <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w02/p01.jpg' alt="image" 
              width={200} height={200} priority={false} 
              layout="responsive" 
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className='text-lg mt-3 font-semibold text-black/80'>
            藉由木質主題與兩旁的「東湖公園」及「青年公園」榫接，以獨特樹木剪影包覆建築外觀，創造於公園樹海及創藝能量之間的自然居遊。</div>
        </div>
        <div className='md:w-1/2 w-full   relative group/p01 cursor-pointer'>
          <div className='w-full overflow-hidden   ' data-aos="fade">
            <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w02/p02.jpg' alt="image" 
              width={200} height={200} priority={false} 
              layout="responsive" 
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className='text-lg mt-3 font-semibold text-black/80'>
            多功能閱聽室配備先進音響設備及大屏幕投影，無論是舉辦小型講座、電影放映，或音樂欣賞，皆能為住戶提供極致的影音享受。
          </div>
        </div>
      </div>

      <div>
        <div className='w-full overflow-hidden   ' data-aos="fade">
          <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w02/p03.jpg' alt="image" 
            width={200} height={200} priority={false} 
            layout="responsive" 
            objectFit="cover"
            className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
            // data-aos="zoom-out"
          />
        </div>
        <div className='text-lg mt-3 font-semibold text-black/80 text-center w-8/12 mx-auto'>
          開闊的L型落地窗設計讓自然光充盈大廳，與外觀樹型結構相疊合，打造出光影交錯的夢幻空間。舒適的休憩座椅提供交流、獨處的舒心場域，讓室內時光沉浸於日光之中，提供居民共享的寧靜。
        </div>
      </div>

      

      

    </div>
  )
}

export default W02