import React from "react";

const AboutCompany = () => {
  return (
    <section className=" bg-white h-[600px]">
      <div className="w-full flex flex-col items-center justify-start py-[100px] pr-5 pl-[21px] box-border gap-[50px_0px]  mq450:gap-[100px_0px] mq900:gap-[100px_0px]">
        <footer className="pt-28 flex flex-col items-center justify-start gap-[30px_0px] max-w-full text-center text-smi text-bk-black font-cta-button-text-title-case mq450:gap-[50px_0px]">
          <div className="flex flex-row items-start justify-start">
            <div className=" leading-[21px] font-medium">
              START HERE, BUILD ANYTHING.
            </div>
          </div>
          <h1 className="m-0  text-4xl leading-[72px] font-normal font-title-main">
            <p className="m-0">At Beurokrat, our products are</p>
            <p className="m-0">our mode of expression</p>
          </h1>
        </footer>
        <button className="cursor-pointer [border:none] p-5 bg-primary w-[248px] rounded-[35px] flex flex-row flex-wrap items-center justify-center box-border whitespace-nowrap hover:bg-greenyellow">
          <div className=" text-mini leading-[21px] capitalize font-cta-button-text-title-case text-bk-black text-center ">
            about our company
          </div>
        </button>
      </div>
    </section>
  );
};

export default AboutCompany;
