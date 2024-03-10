import Image from "next/image";
import React from "react";
import HomeImage from "./Rangitikei_2_.png";
import Arrow from "../../../../public/vector.svg";

const Hero = () => {
  return (
    <>
      <section className="h-[600px] bg-white">
        <div className="h-[600px] flex justify-center items-center mt-[80px] pl-10 pr-10 md:pl-0 md:pr-0 ">
          <div>
            <Image
              alt="home-image"
              src={HomeImage}
              quality={100}
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Mobile view */}
        <div className="w-full flex flex-col items-center justify-center text-center text-bk-black font-inter md:hidden">
          <div className="h-284 w-16 bg-primary flex items-center justify-center p-2.5 box-border mb-4">
            <Image
              className="h-auto w-[30px]  overflow-hidden"
              loading="lazy"
              alt="down-arrow"
              src={Arrow}
              width={30}
              height={30}
            />
          </div>
          <div className="leading-[21px] font-medium">SCROLL TO EXPLORE</div>
        </div>

        {/* Non-mobile view */}
        <div className=" hidden md:flex md:w-full md:flex-row md:items-center md:justify-start md:gap-[0px_16px] md:text-left md:text-[15px] md:text-bk-black md:font-inter">
          <div className="ml-20 h-14 w-16 bg-primary flex flex-row items-center justify-center p-2.5 box-border">
            <Image
              className="h-[30px] w-[30px]  overflow-hidden shrink-"
              loading="lazy"
              alt="down-arrow"
              src={Arrow}
              width={30}
              height={30}
            />
          </div>
          <div className=" leading-[21px] font-medium">SCROLL TO EXPLORE</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
