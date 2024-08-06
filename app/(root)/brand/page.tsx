import React from "react";
import Image from "next/image";
const Brand = () => {
  return (
    <div className="md:mt-[88px] px-4 md:px-20">
      <div className="w-full aspect-[16/5] overflow-hidden  bg-zinc-400 rounded-lg">
        <Image
          src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/brandBanner.jpg"
          alt="image"
          width={200}
          height={24}
          priority={false}
          layout="responsive"
          objectFit="cover"
          className="w-full h-full top-0 left-0 object-cover "
          data-aos="fade"
        />
      </div>

      <div className="flex my-10 items-stretch gap-10">
        <div
          className="w-1/3 md:flex  bg-cover bg-center bg-no-repeat hidden "
          style={{
            backgroundImage: `url('${"https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/brandbg2.jpg"}')`,
          }}
        ></div>
        <div className=" flex flex-col items-start gap-4  md:w-2/3">
          <div className=" bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md">
            品牌初心
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="text-5xl font-thin my-2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              人本，幸福住居
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <Image
                src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/brand01.jpg"
                alt="image"
                width={200}
                height={24}
                priority={false}
                layout="responsive"
                objectFit="cover"
                className="w-full h-full top-0 left-0 object-cover "
              />
            </div>

            <div
              className="text-black/80"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              建築，是生活的延伸 ; 住宅，是幸福的所在。
              <br />
              大漁建設創立三十餘年，堅持以家的溫度思考居住。
              <br />
              由銷售積累的大漁智慧，懂得讓設計著眼於生活，於是，我們建構為居者而築的「幸褔住居」，透過別出心裁的規劃、舒適慢活的哲學，串起每一方寸間的日常美好，讓細膩而獨特的空間演繹，喚起關於生活的嶄新想像。
            </div>
          </div>
          <br />
          <div className="flex flex-col gap-4">
            <div
              className="text-5xl font-thin my-2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              在地，溫度建築
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <Image
                src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/brand02.jpg"
                alt="image"
                width={200}
                height={24}
                priority={false}
                layout="responsive"
                objectFit="cover"
                className="w-full h-full top-0 left-0 object-cover "
              />
            </div>

            <div
              className="text-black/80"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              深耕臺中的年歲裡，大漁不只以創意涵養地方，伴隨城區演進，更持續以人文的情懷訴說在地永續。本於對每一塊土地的眷戀，大漁延攬在地精銳建築師共同細讀風土、描繪城區，將智慧節能、環境綠化融入設計思維，透過建築的溫度守護街廓情感，與萬物共生、也與自然相偕。
            </div>
          </div>
          <br />
          <div className="flex flex-col gap-4">
            <div
              className="text-5xl font-thin my-2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              大漁，匠心臻品
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <Image
                src="https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/brand03.jpg"
                alt="image"
                width={200}
                height={24}
                priority={false}
                layout="responsive"
                objectFit="cover"
                className="w-full h-full top-0 left-0 object-cover "
              />
            </div>

            <div
              className="text-black/80"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              「大漁」源於日文漢字「大漁祝」，相信臻品建築能為幸福保值，如船隻滿載漁獲，為每一位住戶帶來豐收。
              <br />
              帶著祝福，大漁以考究地段、嚴選建材，及踏實工法悉心回應每一個成家的珍重選擇，在建築美學的個性之上，更堅持以品質為第一，秉持著匠心執著，成就每一棟值得傳世的好宅。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
