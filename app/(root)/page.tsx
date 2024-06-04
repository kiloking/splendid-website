'use client'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import Image from "next/image";
import { frontNavLinks} from '../../constants/index'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
export default function Home() {
  const homeimgs = [
    "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p01.jpg",
    "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p02.jpg",
    "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p03.jpg",
  ] 

  return (
    <>
      <section className=" ">
        <div className="relative pt-[56.2%] w-full -z-10  pointer-events-none overflow-hidden">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sCmFKqpO76k"
            className='react-player'
            playing
            playsinline
            muted
            loop
            controls={false}
            width='100vw'
            height='100%'
            config={{
              youtube: {
                playerVars: { showinfo: 0 }
              }
            }}
          />
        </div>
        <div className="z-10 absolute top-0  bg-black/0 w-full flex items-center px-10 pt-8 pb-6 space-x-10 group/navbarC">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b via-black/30 from-black/50 transition-all opacity-0 group-hover/navbarC:opacity-100 -z-10 pointer-events-none"></div>
          <div className="w-[10%]">
            <Image src='/assets/images/logo_w.png' alt="image" width={200} height={24} priority={false}/>
          </div>

          <ul className="flex flex-center w-full space-x-10 text-white">
            {frontNavLinks.map((item,index)=>{
              return(
                <li key={`navtitle`+index} className="group relative dropdown text-white/80">
                  <a href="/" className="hover:text-white">{item.label}</a>
                  {item.sub &&
                    <div className="group-hover:block dropdown-menu absolute hidden h-auto left-1/2 -translate-x-1/2  ">

                      <ul className="top-0 bg-black/70 shadow px-6 py-6 w-auto  ">
                          {item.sub.map((subitem,index)=>{
                            return(
                              <li key={`navsub`+index} className="py-1">
                                <a className="block text-white/80 font-bold break-keep  hover:text-white cursor-pointer">
                                  {subitem.label}
                                </a>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  }
                </li>
              )
            })}

          </ul>
        </div>
      </section>
      <section className=" w-full ">
        <Swiper
          modules={[Autoplay,Pagination,Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }} 
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className='w-full '
        >
          {
            homeimgs.map((item,index)=>{
              return(
                <SwiperSlide key={`slide`+index}>
                  <div className='w-full '>
                    <img src={item} alt="" className="w-full" />
                  </div>

                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  );
}
