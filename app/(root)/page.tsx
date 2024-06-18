'use client'
import React, { useState, useRef } from 'react';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import Image from "next/image";
import { frontNavLinks} from '../../constants/index'
import { FaVolumeUp,FaVolumeMute } from "react-icons/fa";
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
    "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p04.jpg",
    "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p05.jpg",
  ] 
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // 初始音量設置為50%
  const [played, setPlayed] = useState(0); // 追踪播放進度
  const playerRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  return (
    <>
      <section className=" ">
        <div className="relative pt-[56.2%] w-full -z-0  ">
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=sCmFKqpO76k"
            className='react-player'
            playing
            playsinline
            muted={isMuted}
            volume={volume}
            onProgress={(state) => setPlayed(state.played)}
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
          <div  className=" cursor-pointer absolute bottom-0 left-0 md:bottom-10 md:left-10 z-[999] flex items-center gap-2">
            <button onClick={toggleMute}  className=" cursor-pointer  bg-black/60 text-white px-4 py-2 rounded-full">
              {isMuted ?   <div><FaVolumeMute /></div>: <div><FaVolumeUp /></div>}
            </button>
            <div className="controls bg-black/60 text-white px-4 py-0 rounded-full">
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
                className=" transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600 mb-[15px] rounded-full"
              />
           
            </div>
          </div>

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
