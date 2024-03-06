import Image from "next/image";
import React from "react";
import HomeImage from "./Rangitikei_2_.png";
import Arrow from "../../../../public/noun-arrow-down-86557.svg";

const HomeSlider = () => {
  return (
    <>
      <div className="h-[600px] flex justify-center items-center bg-white mt-[130px]">
        <div>
          <Image alt="home-image" src={HomeImage} width={800} height={600} />
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-start gap-[0px_16px] text-left text-[15px] text-bk-black font-inter">
        <div className="ml-10 h-14 w-16 bg-primary flex flex-row items-center justify-center p-2.5 box-border">
          <Image
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt="down-arrow"
            src={Arrow}
            width={30}
            height={30}
          />
        </div>
        <div className="relative leading-[21px] font-medium">
          SCROLL TO EXPLORE
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
