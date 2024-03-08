"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "./hover-title-top (1).svg";
import image2 from "./hover-title-top (2).svg";
import image3 from "./hover-title-top.svg";

const Service = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="w-full bg-black text-white flex flex-col mt-24 md:h-[600px]">
      <div className="text-center pt-28">
        <p>FROM TOUCHSCREENS TO TACTILE ROBOTS</p>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-4xl">
          We deliver customized digital products,
          <br />
          <span className="block">tailored to your needs</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center text-wrap pt-16 mx-10">
        <div className="md:w-[330px] md:mr-10 mb-10 md:mb-0">
          <p>
            As a research and development company focused on services, we
            evaluate our clients' needs, whether they involve design materials,
            web applications, or embedded systems. Our dynamic and inventive
            team is committed to addressing your requirements effectively.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 ml-20 mb-6">
          <div
            className="flex flex-col items-center"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            <div
              className={`bg-blue-500 text-center text-white py-2 hover-text ${
                showText || window.innerWidth < 768 ? "block" : "hidden"
              }`}
            >
              Data Science
            </div>
            <Image alt="service-image" width={200} height={200} src={image3} />
          </div>
          <div
            className="flex flex-col items-center"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            <div
              className={`bg-blue-500 text-center text-white py-2 hover-text ${
                showText || window.innerWidth < 768 ? "block" : "hidden"
              }`}
            >
              Robotics
            </div>
            <Image alt="service-image" width={200} height={200} src={image1} />
          </div>
          <div
            className="flex flex-col items-center"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            <div
              className={`bg-blue-500 text-center text-white py-2 hover-text ${
                showText || window.innerWidth < 768 ? "block" : "hidden"
              }`}
            >
              Robotics
            </div>
            <Image alt="service-image" width={200} height={200} src={image2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
