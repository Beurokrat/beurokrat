'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.svg'
import Button from '../button'
import NavLinks from './nav-links'
import MobileMenu from './mobile-menu'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const [overlayAction, setOverlayAction] = useState(false)
    const [isWindowWidthGreaterThanMd, setIsWindowWidthGreaterThanMd] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleResize = () => {
            const mdBreakpoint = 1024
            setIsWindowWidthGreaterThanMd(window.innerWidth > mdBreakpoint)
        }
        setIsOpen(false)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [isWindowWidthGreaterThanMd])

    const handleCompanyHover = () => {
        setOnHover(true)
    }

    const handleCompanyLeave = () => {
        setOnHover(false)
    }
    const closeMobileMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleClick = () => {
        console.log('Button clicked!')
        router.push('/contact')
    }

    return (
        <div style={{ zIndex: 300 }} className="fixed top-0 left-0 right-0 rounded-sm w-full">
            <div className="my-10 mx-auto border border-[#505050] md:rounded-[38px] sm:rounded-[17px] bg-[#303030] text-white md:h-[59px] sm:h-[59px] flex flex-row items-center justify-between sm:w-[93%] md:w-[82%] shadow-lg">
                <div className="p-2 flex flex-row leading-none items-center justify-between w-full">
                    <Link href="/">
                        <Image
                            src="/assets/img/logo_light.png"
                            alt="Beurokrat logo"
                            height={19}
                            width={98}
                            className="sm:ml-[10px] md:ml-[28px]"
                        />
                    </Link>
                    {/* Desktop menu */}
                    <div className="sm:hidden md:flex">
                        <div className="lg:flex hidden">
                            <Link href="/work" className="pt-[6px] px-[15px] text-[14px] m-[15px]">
                                Work
                            </Link>
                            {/* <div
                                className="text-[14px] m-[15px] relative"
                                onMouseEnter={handleCompanyHover}
                                onMouseLeave={handleCompanyLeave}
                            > */}
                            <Link href="/company" className="pt-[6px] px-[15px] text-[14px] m-[15px] cursor-pointer">
                                Company
                            </Link>

                            {/* {onHover && <NavLinks width={23} />} */}
                            {/* </div> */}
                            <Link href="/careers" className="pt-[6px] px-[15px] text-[14px] m-[15px]">
                                Careers
                            </Link>
                            <Link href="/blog" className="pt-[6px] px-[15px] text-[14px] m-[15px]">
                                Blog
                            </Link>
                            <Button text="Contact Us" onClick={handleClick} />
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className="my-[8px] mx-[5px] py-[18px]  flex items-center justify-center w-[70px] md:hidden rounded-xl bg-primary">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center ">
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H24M1 11H24" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && !isWindowWidthGreaterThanMd && (
                // <div style={{zIndex: -10}} className="absolute top-0 left-0 w-full h-screen bg-white"></div>
                <MobileMenu closeMobileMenu={closeMobileMenu} overlayAction={overlayAction} setOverlayAction={setOverlayAction} />
            )}
        </div>
    )
}
