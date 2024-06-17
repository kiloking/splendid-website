"use client"
import React from 'react'
import Image from 'next/image'

const W01 = () => {
  return (
    <div >
      <div className=' relative w-full h-screen flex bg-slate-500 overflow-hidden'>
        <div className='w-full relative'>
          <div className=' absolute top-0 left-0  w-full h-full bg-gradient-to-b from-black/40 via-black/30 to-black/15 z-10'></div>
          <Image src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w01/cover.jpg`} alt="image" 
            width={200} height={200} priority={false} 
            layout="responsive" 
            objectFit="cover"
            className="w-full group-hover/p01:scale-110 transition-all duration-500 z-0"
            data-aos="zoom-out"
          />
          <div className=' absolute z-10 text-white bottom-5 text-3xl font-thin w-2/3 text-right right-5'>
            禮聘2012年威尼斯建築展團隊廖偉立建築師、陳世榮建築師雙人打造。壯闊面寬的日系清水模外觀搭配細緻木質列柱，以樸實大器風格成就新世代的禪意綠建築。
          </div>
        </div>

        <div className='z-10 w-[300px] h-full bg-[#c82b2b] flex flex-col  text-white py-4 px-6'>
          <div className='text-4xl font-medium mt-12'>
            <div className='text-sm text-white/80 mb-1'>2015</div>
            自遊自宅
          </div>
          <ul className='mt-6 space-y-2 text-sm '>
            <li>坪數：27-67坪，2-3房</li>
            <li>基地面積：931坪</li>
            <li>棟戶規劃：2棟，106戶住家</li>
            <li>樓層規劃：地上10層,地下2層</li>
          </ul>
        </div>
      </div>

      
      <div className='flex justify-between  my-10 w-10/12 mx-auto'>
        <div className='w-1/2   relative group/p01 cursor-pointer'>
          <div className='w-full overflow-hidden   ' data-aos="fade">
            <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w01/p01.jpg' alt="image" 
              width={200} height={200} priority={false} 
              layout="responsive" 
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className='text-lg mt-3 font-semibold text-black/80'>
            住宅臨路謙退十四米，讓池水、樹影的愜意環繞社區。社區內種植七里香、桂花樹、山櫻花等百種生態植物實現大面積綠化，以「未來的森林」概念，作為建築綠意基調。
          </div>
        </div>
        <div className='w-1/2   relative group/p01 cursor-pointer'>
          <div className='w-full overflow-hidden   ' data-aos="fade">
            <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w01/p02.jpg' alt="image" 
              width={200} height={200} priority={false} 
              layout="responsive" 
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className='text-lg mt-3 font-semibold text-black/80'>
            前院水緞護城、中庭池水養心，讓波光雲影與樸實立面相映成趣，澄淨之間，守護日常寧靜。
          </div>
        </div>
      </div>

      <div>
        <div className='w-full overflow-hidden   ' data-aos="fade">
          <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w01/p03.jpg' alt="image" 
            width={200} height={200} priority={false} 
            layout="responsive" 
            objectFit="cover"
            className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
            // data-aos="zoom-out"
          />
        </div>
        <div className='text-lg mt-3 font-semibold text-black/80 text-center w-8/12 mx-auto'>
          總長200 米木棧板步道，以自然質感銜接室內的舒適與戶外的陽光，引導居者透過雙腳行走徜徉於光影之中，用身體感知捕捉四季溫度。
        </div>
      </div>

      <div>
        <div className='w-full overflow-hidden   ' data-aos="fade">
          <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w01/p04.jpg' alt="image" 
            width={200} height={200} priority={false} 
            layout="responsive" 
            objectFit="cover"
            className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
            // data-aos="zoom-out"
          />
        </div>
        <div className='text-lg mt-3 font-semibold text-black/80 text-center w-8/12 mx-auto'>
          寬敞的運動空間，設置籃球與桌球共用條件。邀請住戶透過運動為生活減壓，藉著律動與自己也與家人交流，讓健康與遊戲豐富生活的趣味。
        </div>
      </div>

      

      

    </div>
  )
}

export default W01