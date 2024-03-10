"use client";
import React from "react";
import image from "./Rectangle 7.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import Container from "../Container";
import { useRouter } from "next/navigation";

const AboutBeurokrat = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Button clicked!");
    router.push("/careers");
  };
  return (
    <Container>
      <section className="bg-white mt-10 md:mt-[100px]">
        <div className="ml-4  text-center md:text-start">
          <p>ABOUT BEUROKRAT</p>
        </div>

        <div className="flex flex-col md:flex-row ml-4  pt-5">
          <div
            className="w-full md:w-1/2 md:order-1 "
            style={{
              width: "100%",
              maxWidth: "678px",
              top: "150px",
            }}
          >
            <h1 className="text-3xl md:text-5xl font-display font-normal text-black leading-[2.25rem] md:leading-[72px]">
              The drive to build is in <br /> all of us; the
              <br /> determination to make <br />
              things better.
            </h1>
            <Link href="/careers">
              <div className="mt-5">
                <Button text="Careers At Beurokrat" onClick={handleClick} />
              </div>
            </Link>
          </div>

          <div
            className="w-full md:w-1/2 md:ml-8 md:order-2 mt-4 md:mt-0 md:mr-16"
            style={{
              width: "100%",
              maxWidth: "683px",
              top: "160px",
              left: "764px",
            }}
          >
            <p className="text-base md:text-lg font-normal font-text text-black leading-[1.9375rem] md:leading-[31px]">
              Consensys is the leading blockchain and web3 software company.
              Since 2014, Consensys has been at the forefront of innovation,
              pioneering technological developments within the web3 ecosystem.
              Through our product suite, including the MetaMask platform,
              Infura, Linea, Diligence, and our NFT platform, we have become a
              trusted collaborator for users, creators, and developers. Whether
              building a dapp, an NFT collection, a portfolio, or a better
              future, the instinct to build is universal. Our mission is to
              inspire and empower the builder in everyone by making web3
              universally easy to use and develop on. Let’s build the world we
              want to see.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Image src={image} width={1372} height={600} alt="image" />
        </div>
      </section>
    </Container>
  );
};

export default AboutBeurokrat;
