"use client";
import React from "react";
import Image from "next/image";

const W03 = () => {
  return (
    <div>
      <div className=" relative w-full md:h-screen flex flex-col md:flex-row bg-slate-500 overflow-hidden">
        <div className="w-full relative">
          <div className=" absolute top-0 left-0  w-full h-full bg-gradient-to-b from-black/40 via-black/30 to-black/15 z-10"></div>
          <Image
            src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w03/cover.jpg`}
            alt="image"
            width={200}
            height={200}
            priority={false}
            layout="responsive"
            objectFit="cover"
            className="w-full group-hover/p01:scale-110 transition-all duration-500 z-0"
            data-aos="zoom-out"
          />
          <div className=" absolute z-10 text-white bottom-5 md:text-3xl font-thin w-3/4 md:w-2/3 text-right right-5">
            15
            層新古典造型風格建築，以極簡幾何、渾厚石材打造俐落線條，展現當代美學的優雅況味，敘寫北屯生活唯一品味。
          </div>
        </div>

        <div className="z-10 md:w-[300px] w-full h-full bg-[#c82b2b] flex flex-col  text-white py-4 px-6">
          <div className="text-4xl font-medium md:mt-12">
            <div className="text-sm text-white/80 mb-1">2020</div>
            大漁ONE
          </div>
          <ul className="mt-6 space-y-2 text-sm ">
            <li>坪數：24-34坪，2-3房</li>
            <li>基地面積：458坪</li>
            <li>棟戶規劃：3棟，68戶住家，1戶店</li>
            <li>樓層規劃：地上15層,地下3層</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  my-10 w-10/12 mx-auto gap-6 md:gap-0">
        <div className="md:w-1/2 w-full  relative group/p01 cursor-pointer">
          <div className="w-full overflow-hidden   " data-aos="fade">
            <Image
              src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w03/p01.jpg"
              alt="image"
              width={200}
              height={200}
              priority={false}
              layout="responsive"
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className="work-text-under-img">
            跳脫街道常規，大漁ONE以標誌性的前庭森林創造自成一格的蓊鬱。豐茂錯落的林木，容納四季不同風景，讓城市生活也能擁抱極致綠意。
          </div>
        </div>
        <div className="md:w-1/2 w-full   relative group/p01 cursor-pointer">
          <div className="w-full overflow-hidden   " data-aos="fade">
            <Image
              src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w03/p02.jpg"
              alt="image"
              width={200}
              height={200}
              priority={false}
              layout="responsive"
              objectFit="cover"
              className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
              // data-aos="zoom-out"
            />
          </div>
          <div className="work-text-under-img">
            社區平面車位領先市場裝設電動車充電閥，前瞻環保趨勢及科技運用，將車行便利落實為社區的用心。
          </div>
        </div>
      </div>

      <div>
        <div className="w-full overflow-hidden   " data-aos="fade">
          <Image
            src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w03/p03.jpg"
            alt="image"
            width={200}
            height={200}
            priority={false}
            layout="responsive"
            objectFit="cover"
            className="w-full h-full group-hover/p01:scale-110 transition-all duration-500"
            // data-aos="zoom-out"
          />
        </div>
        <div className="work-text-under-img">
          銜接天幕的頂樓露台以優雅、開闊、自然為題，設置花園雅席，演繹慢活涵氧的輕奢品味。
        </div>
      </div>

      <div>
        <div className="w-full overflow-hidden   " data-aos="fade">
          <Image
            src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w03/p04.jpg"
            alt="image"
            width={200}
            height={200}
            priority={false}
            layout="responsive"
            objectFit="cover"
            className="work-text-under-img"
            // data-aos="zoom-out"
          />
        </div>
        <div className="work-text-under-img">
          雨水回收系統的設置，讓雨水從頂樓經導水管流至地下室設置的沉砂槽，最後經由噴灌系統供中庭景觀植栽澆灌使用，充分達到自然資源再利用，節能且環保。
        </div>
      </div>
    </div>
  );
};

export default W03;
