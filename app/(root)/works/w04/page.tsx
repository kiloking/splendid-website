"use client";
import React from "react";
import Image from "next/image";

const W04 = () => {
  return (
    <div>
      <div className=" relative w-full md:h-screen flex flex-col md:flex-row bg-slate-500 overflow-hidden">
        <div className="w-full relative">
          <div className=" absolute top-0 left-0  w-full h-full bg-gradient-to-b from-black/40 via-black/30 to-black/15 z-10"></div>
          <Image
            src={`https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w04/cover.jpg`}
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
            「單純」是一道淬鍊的歷程。「大漁ONE PLUS」
            以經典垂直柱列直上穹頂，搭配金屬格柵，承襲現代主義的內斂大方。延續大漁ONE精品住宅的理念，ONE
            PLUS以更精簡淬鍊的質感，實現Bigger than ONE 的美學高度與生活想像。
          </div>
        </div>

        <div className="z-10 md:w-[300px] w-full h-full bg-[#c82b2b] flex flex-col  text-white py-4 px-6">
          <div className="text-4xl font-medium md:mt-12">
            <div className="text-sm text-white/80 mb-1">2021</div>
            大漁ONE PLUS
          </div>
          <ul className="mt-6 space-y-2 text-sm ">
            <li>坪數：34-36坪，3房</li>
            <li>基地面積：258坪</li>
            <li>棟戶規劃：1棟，33戶住家，1戶店面</li>
            <li>樓層規劃：地上12層，地下3層</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between  my-10 w-10/12 mx-auto">
        <div className="md:w-1/2 w-full   relative group/p01 cursor-pointer">
          <div className="w-full overflow-hidden   " data-aos="fade">
            <Image
              src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w04/p01.jpg"
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
            成熟的風格美學，是低調不減奢華。大漁ONE
            PLUS彈性公共空間結合藝術大廳、生活講堂、收信區、吧台，讓品味生活一體成型，開創住居無界的質感體驗。
          </div>
        </div>
        <div className="md:w-1/2 w-full   relative group/p01 cursor-pointer">
          <div className="w-full overflow-hidden   " data-aos="fade">
            <Image
              src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w04/p02.jpg"
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
            極簡石材搭配大尺度框景，天際視野的sky
            lounge結合舒適氛圍與市區美景，讓聚會小酌、佳節賞月，都能俐落演繹都會品味。
          </div>
        </div>
      </div>

      <div>
        <div className="w-full overflow-hidden   " data-aos="fade">
          <Image
            src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/w04/p03.jpg"
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
          極簡設計與先進設備完美結合，展現質感運動美學。寬敞明亮的空間中，晨跑、力量訓練、靜心瑜伽皆能充分演繹，讓品味生活的健康與活力，在此無縫銜接。
        </div>
      </div>
    </div>
  );
};

export default W04;
