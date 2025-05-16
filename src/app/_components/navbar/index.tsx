'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Button from '../button'
import MobileMenu from './mobile-menu'
import { Drawer, DrawerContent, DrawerTrigger } from '../shadui/drawer'
import { trackEvent } from '@/utils/analytics'

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

    const closeMobileMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleClick = (route: string, featureName: string) => {
        trackEvent(route, { feature_name: featureName })
        router.push(route)
    }

    return (
        <div style={{ zIndex: 10 }} className="fixed top-0 left-0 right-0 rounded-sm w-full">
            <div className="my-10 mx-auto border border-[#505050] md:rounded-[38px] sm:rounded-[17px] bg-[#303030] text-white md:h-[59px] sm:h-[59px] flex flex-row items-center justify-between sm:w-[93%] md:w-[82%] shadow-lg">
                <div className="p-2 flex flex-row leading-none items-center justify-between w-full">
                    <div onClick={() => handleClick('/', 'bk logo clicked')} className="cursor-pointer">
                        <Image
                            src="/assets/img/logo_light.png"
                            alt="Beurokrat logo"
                            height={19}
                            width={98}
                            className="sm:ml-[10px] md:ml-[28px]"
                        />
                    </div>
                    {/* Desktop menu */}
                    <div className="sm:hidden md:flex">
                        <div className="lg:flex hidden">
                            <div
                                onClick={() => handleClick('/work', 'work page clicked')}
                                className="cursor-pointer pt-[6px] px-[15px] text-[14px] m-[15px]"
                            >
                                Work
                            </div>
                            <div
                                onClick={() => handleClick('/company', 'company page clicked')}
                                className="cursor-pointer pt-[6px] px-[15px] text-[14px] m-[15px]"
                            >
                                Company
                            </div>

                            {/* {onHover && <Navdivs width={23} />} */}
                            {/* </div> */}
                            <div
                                onClick={() => handleClick('/careers', 'careers page clicked')}
                                className="cursor-pointer pt-[6px] px-[15px] text-[14px] m-[15px]"
                            >
                                Careers
                            </div>
                            <div
                                onClick={() => handleClick('/blog', 'blog page clicked')}
                                className="cursor-pointer pt-[6px] px-[15px] text-[14px] m-[15px]"
                            >
                                Blog
                            </div>
                            <Button text="Contact Us" onClick={() => handleClick('/contact', 'contact page clicked')} />
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <>
                    <Drawer open={isOpen} onOpenChange={setIsOpen}>
                        <DrawerTrigger
                            className="my-[8px] mx-[5px] py-[18px]  flex items-center justify-center w-[70px] md:hidden rounded-xl bg-primary"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <p className="flex items-center ">
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H24M1 11H24" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </p>
                        </DrawerTrigger>
                        <DrawerContent className="h-full border-none">
                            <MobileMenu
                                closeMobileMenu={closeMobileMenu}
                                overlayAction={overlayAction}
                                setOverlayAction={setOverlayAction}
                            />
                        </DrawerContent>
                    </Drawer>
                </>
            </div>
        </div>
    )
}
