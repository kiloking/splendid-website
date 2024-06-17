import React from 'react'
import Image from 'next/image'
const History = () => {
  return (
    <div className='mt-[88px] px-20'>
      <div className='w-full aspect-[16/5] overflow-hidden  bg-zinc-400 rounded-lg'>
        <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/historyBanner.jpg' alt="image" 
          width={200} height={24} priority={false} 
          layout="responsive" 
          objectFit="cover"
          className="w-full h-full top-0 left-0 object-cover  "
          data-aos="fade"
        />
      </div>
      <div className='flex w-10/12 my-10 mx-auto items-stretch gap-10'>
        <div className=' flex flex-col items-start gap-4'>
          <div className=' bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md' data-aos="fade-left">企業歷程</div>
          <div className='text-5xl font-thin  tracking-tight' data-aos="fade-left">OUR HISTORY</div>

          <div className='flex flex-col gap-20 mt-10'>
            <div className='w-full flex items-end gap-5'>
              <div className='w-1/2 leftBubble overflow-hidden'>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/h01.jpg' alt="image" 
                  width={200} height={24} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover  "
                  data-aos="zoom-out"
                />
              </div>
              <div className='w-1/2 text-black/80 flex flex-col gap-2'>
                <div className=' font-black text-3xl'>深耕台中</div>
                <div className=' font-thin text-5xl'>1992</div>
                <div>懷抱著回饋在地的初心，大漁建設於台中扎根，用選地的堅持、嚴謹的工藝，踏實凝聚每一顆愛家的心。</div>
                <ul className='text-sm'>
                  <li>2004 大漁．環中新墅</li>
                  <li>2005 理想大地</li>
                  <li>2006 香榭大道</li>
                  <li>2007 大漁理想大地3期 </li>
                  <li>2008 大漁豐馥</li>
                  <li>2009 大漁任所適</li>
                  <li>2012 大漁・理想大地5期</li>
                </ul>

              </div>
            </div>

            <div className='w-full flex items-end gap-5'>
              <div className='w-1/2 order-2 rightBubble overflow-hidden'>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/h02.jpg' alt="image" 
                  width={200} height={24} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover "
                  data-aos="zoom-out"
                />
              </div>
              <div className='w-1/2 text-black/80 flex flex-col gap-2 order01 text-right '>
                <div className=' font-black text-3xl'>住宅轉型</div>
                <div className=' font-thin text-5xl'>2015</div>
                <div>回應台中都市發展變遷，大漁由過往對別墅的耕耘轉向住宅大樓的鑽研，推出「自遊自宅」創寫大里在地經典。</div>
                <ul className='text-sm'>
                  <li>2015 自遊自宅</li>
                  <li>2017 森自在</li>
                </ul>
              </div>
            </div>

            <div className='w-full flex items-end gap-5 '>
              <div className='w-1/2 leftBubble overflow-hidden'>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/h03.jpg' alt="image" 
                  width={200} height={24} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover "
                  data-aos="zoom-out"
                />
              </div>
              <div className='w-1/2 text-black/80 flex flex-col gap-2'>
                <div className=' font-black text-3xl'>在地寫手</div>
                <div className=' font-thin text-5xl'>2018</div>
                <div>攜手台中新銳建築師林環金，深化在地人的視角與祈願，讓建築進一步實現職人精神，從設計到監造一以貫之。</div>
              </div>
  
            </div>

            <div className='w-full flex items-end gap-5'>
              <div className='w-1/2 order-2 rightBubble overflow-hidden'>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/h04.jpg' alt="image" 
                  width={200} height={24} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover "
                  data-aos="zoom-out"
                />
              </div>
              <div className='w-1/2 text-black/80 flex flex-col gap-2 order01 text-right '>
                <div className=' font-black text-3xl'>輕奢品味</div>
                <div className=' font-thin text-5xl'>2020</div>
                <div>「理元建設」成立，以精琢技術、凝鍊品味，推動更高質感的追求，讓居住體驗朝精品邁進。</div>
                <ul className='text-sm'>
                  <li>2020 大漁ONE</li>
                  <li>2021 大漁ONE PLUS</li>
                  <li>2024 大漁仰昀</li>
                </ul>
              </div>

            </div>

            <div className='w-full flex items-end gap-5'>
              <div className='w-1/2 leftBubble overflow-hidden'>
                <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/h05.jpg' alt="image" 
                  width={200} height={24} priority={false} 
                  layout="responsive" 
                  objectFit="cover"
                  className="w-full h-full top-0 left-0 object-cover "
                  data-aos="zoom-out"
                />
              </div>
              <div className='w-1/2 text-black/80 flex flex-col gap-2'>
                <div className=' font-black text-3xl'>美學生活</div>
                <div className=' font-thin text-5xl'>2024</div>
                <div>大漁，期待大於你對生活的想像。未來，我們將透過生活美學、在地體驗、永續實踐的多方經營，探索更多家的幸褔溫度。</div>
              </div>
  
            </div>


          </div>
          <br />
        </div>
        
      </div>
    </div>
  )
}

export default History