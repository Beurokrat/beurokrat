"use client"
import React from "react";
import Button from "../../_components/button";
import { useRouter } from 'next/navigation'
import Container from "../../_components/Container";

const AboutCompany = () => {
  const router = useRouter()
  const handleClick = () => {
      router.push('/about')
    }
  return (
    <section className=" bg-white h-[600px]">
      <Container>
      <div className="w-full flex flex-col items-center justify-start py-[100px] pr-5 pl-[21px] box-border gap-[50px_0px]  mq450:gap-[100px_0px] mq900:gap-[100px_0px]">
        <footer className="pt-28 flex flex-col items-center justify-start gap-[30px_0px] max-w-full text-center text-smi text-bk-black font-cta-button-text-title-case mq450:gap-[50px_0px]">
          <div className="flex flex-row items-start justify-start">
            <h3>
              START HERE, BUILD ANYTHING.
            </h3>
          </div>
          <h1 className="m-0 md:w-3/4">
            At Beurokrat, our products are our mode of expression
          </h1>
        </footer>
        <Button text= "About Our Company" onClick={handleClick} />
      </div>
      </Container>
    </section>
  );
};

export default AboutCompany;