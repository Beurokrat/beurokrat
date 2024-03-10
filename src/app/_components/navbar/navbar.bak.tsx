"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./logo.svg";
import Button from "../button";
import { useRouter } from "next/navigation";
import NavLinks from "../nav-links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyHover, setCompanyHover] = useState(false);
  const [sidebarAction, setSidebarAction] = useState(false);

  const router = useRouter();

  const handleCompanyHover = () => {
    setCompanyHover(true);
  };

  const handleCompanyLeave = () => {
    setCompanyHover(false);
  };

  const handleClick = () => {
    console.log("Button clicked!");
    router.push("/careers");
  };

  return (
    <section>
      <div className="fixed top-0 left-0 right-0 w-full bg-white h-[120px]">
        <div className=" container my-10 mx-auto p-[10px] bg-white flex flex-row items-center justify-between w-3/4 shadow-lg z-100">
          <Link href="/">
            <Image
              src={logo}
              alt="Beurokrat logo"
              quality={100}
              className={`mx-[30px]`}
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`block text-gray-800 focus:outline-none focus:text-gray-500 bg-primary  `}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="w-full h-[50px] lg:hidden ">
              <main className="top-50 bottom-0  flex flex-col items-center justify-start  w-[230px] h-[400px]   box-border gap-[16px]  text-left text-base  p-0 pb-10">
                <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-0 gap-[20px] pt-10  ">
                  <div className="relative leading-[21px] ">Work</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
                <div
                  className={`${!sidebarAction && "self-stretch"} flex ${
                    sidebarAction && "flex-row"
                  } items-center justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap`}
                >
                  <div className="relative leading-[21px]">Company</div>
                  {sidebarAction ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setSidebarAction(!sidebarAction)}
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                      <div className="flex flex-wrap ">
                        <NavLinks width={20} />
                      </div>
                    </>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setSidebarAction(!sidebarAction)}
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>

                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px]">
                  <div className="relative leading-[21px]">Careers</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[21px]">Blog</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
                <button className="cursor-pointer [border:none] p-5 bg-primary self-stretch rounded-[35px] flex flex-row flex-wrap items-center justify-center hover:bg-greenyellow">
                  <div className="relative text-base leading-[21px] capitalize font-cta-button-text-title-case-mob text-bk-black text-center">
                    Contact
                  </div>
                </button>
              </main>
            </div>
          )}
          <div className={`lg:flex  ${menuOpen ? "hidden" : "hidden"}`}>
            <div className="lg:relative">
              <div
                className="m-[15px] relative"
                onMouseEnter={handleCompanyHover}
                onMouseLeave={handleCompanyLeave}
              >
                <Link href="/company" className="cursor-pointer">
                  Company
                </Link>
                {companyHover && <NavLinks width={23} />}
              </div>
            </div>
            <Link href="/careers" className="m-[15px]">
              Careers
            </Link>
            <Link href="/blog" className="m-[15px]">
              Blog
            </Link>
            <Button text="Contact" onClick={handleClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
