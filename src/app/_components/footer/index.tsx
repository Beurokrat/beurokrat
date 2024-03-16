import Image from "next/image";
import React from "react";
import logo from "./Frame 8.svg";
import Avatar from "./fi-rr-user.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black overflow-hidden flex flex-col items-end justify-start  pb-[41px] pr-[71px] pl-[70px] box-border gap-[187px_0px] tracking-[normal] text-left text-lgi text-white font-body-large mq450:gap-[47px_0px] mq925:gap-[93px_0px] mq925:pl-[35px] mq925:pr-[35px] mq925:box-border">
        <div className="w-[285px] h-[283px] relative hidden">
          <div className="absolute top-[252px] left-[0px] flex flex-row items-start justify-start gap-[0px_18px]">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/firrcommentalt.svg"
              width={100}
              height={100}
            />
            <div className="self-stretch flex-1 relative leading-[31px] font-medium whitespace-nowrap">
              beurokrat@beurokrat.com
            </div>
          </div>
          <div className="absolute top-[183px] left-[0px] flex flex-row items-start justify-start gap-[0px_20px]">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/firrphonecall.svg"
              width={100}
              height={100}
            />
            <div className="self-stretch flex-1 relative leading-[31px] font-medium">
              98237489
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[0px_20px]">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/firrmapmarker.svg"
              width={100}
              height={100}
            />
            <div className="self-stretch flex-1 relative leading-[31px] font-medium">
              <p className="m-0">beurokrat,</p>
              <p className="m-0">address line1,</p>
              <p className="m-0">address line 2,</p>
              <p className="m-0">anothe line of address,</p>
              <p className="m-0">PIN - 632983</p>
            </div>
          </div>
        </div>
        <footer />
        <footer className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full text-left text-lgi text-white font-body-large">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_10px] max-w-full">
            <div className="w-[119px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="flex flex-col items-start justify-start gap-[30px_0px]">
                <div className="relative leading-[31px] font-medium">Works</div>
                <div className="relative text-mini leading-[21px] font-medium">
                  Services
                </div>
              </div>
            </div>
            <div className="w-[148px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="flex flex-col items-start justify-start gap-[30px_0px]">
                <div className="relative leading-[31px] font-medium">
                  Company
                </div>
                <div className="relative text-mini leading-[21px] font-medium">
                  About
                </div>
              </div>
            </div>
            <div className="w-[243px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="w-[183px] flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[31px] font-medium">
                  Careers
                </div>
                <div className="relative leading-[31px] font-medium">Blog</div>
              </div>
            </div>
            <div className="w-[123px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="flex flex-col items-start justify-start gap-[30px_0px]">
                <div className="relative leading-[31px] font-medium">
                  Socials
                </div>
                <div className="relative text-mini leading-[21px] font-medium">
                  Instagram
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
              <Image
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={Avatar}
                width={100}
                height={100}
              />
            </div>
            <div className="w-80 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="relative leading-[31px] font-medium">Login</div>
            </div>
            <Image
              className="h-[65px] flex-1 relative max-w-full overflow-hidden  min-w-[65px]"
              loading="lazy"
              alt=""
              src={logo}
              width={50}
              height={100}
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_64px] max-w-full text-mini mq450:gap-[0px_16px] mq700:flex-wrap mq700:gap-[0px_32px]">
            <div className="relative leading-[21px] font-medium">Products</div>
            <div className="flex flex-col items-start justify-start py-0 pr-[260px] pl-0 box-border gap-[30px_0px] max-w-full mq450:gap-[15px_0px] mq450:pr-5 mq450:box-border">
              <div className="relative leading-[21px] font-medium">Team</div>
              <div className="relative leading-[21px] font-medium">
                Recognition
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[30px_0px]">
              <div className="relative leading-[21px] font-medium">
                Facebook
              </div>
              <div className="relative leading-[21px] font-medium">x.com</div>
              <div className="relative leading-[21px] font-medium">
                Linkedin
              </div>
            </div>
          </div>
        </footer>
        <div className="self-stretch flex flex-col items-end justify-start gap-[20px_0px] max-w-full">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[0px_70px] max-w-full mq450:gap-[0px_17px] mq700:flex-wrap mq700:gap-[0px_35px]">
              <div className="relative leading-[31px] font-medium">
                Privacy policy
              </div>
              <div className="relative leading-[31px] font-medium">{`Terms & Conditions`}</div>
              <div className="relative leading-[31px] font-medium">
                Manage Cookies
              </div>
            </div>
            <div className="relative leading-[31px] font-medium">
              ©2024 beurokrat
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
