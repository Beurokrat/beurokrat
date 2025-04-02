'use client'
import React, { useEffect } from 'react'
import Container from '../../_components/container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRouter } from 'next/navigation' // Import useRouter

const AboutBeurokrat = () => {
    const tl = gsap.timeline({ repeat: 1 })
    const router = useRouter() // Initialize useRouter

    useGSAP(() => {
        tl.fromTo(
            '.fade-in-text-about',
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.fade-in-text-about',
                    start: 'top bottom',
                    end: 'top 60%',
                    scrub: true,
                },
                duration: 0.9,
                ease: 'expo.in',
            },
        ).fromTo(
            '.fade-in-button-about',
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.fade-in-text-about',
                    start: 'top bottom',
                    end: 'top 60%',
                    scrub: true,
                },
                duration: 0.9,
                ease: 'expo.in',
            },
            '<',
        )
    }, [])

    const navigateToAbout = () => {
        router.push('/company') // Navigate to the "About Us" page
    }

    return (
        <Container>
            <div className="about-beurokrat mt-[80px] py-[30px] md:px-[50px] sm:px-[22px] w-full rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_about_bg_image.png')]">
                <div className="flex flex-col ">
                    <div className="rounded-xl md:p-6 md:w-[60%] text-left text-black">
                        <h3
                            className="fade-in-text-about px-3 py-1 w-fit sm:mb-5 rounded-lg"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', border: '2px', color: '#000000' }}
                        >
                            ABOUT US
                        </h3>
                        <h1 className="fade-in-text-about p-1 mt-3 sm:text-3xl md:text-6xl">
                            At Beurokrat, our <span className="text-gray-400">products</span> are our mode of expression
                        </h1>
                        <p className="fade-in-text-about sm:text-[17px] mt-5 sm:pb-10 md:p-5 md:pl-0">
                            Our products embody our creativity, innovation, and dedication. At Beurokrat, every design, line of
                            code, and feature is a testament to our pursuit of <b>excellence</b>. Through AI and cutting-edge
                            digital engineering, we bring ideas to life, crafting solutions that inspire and empower. For us,
                            innovation isn&apos;t just a process—it&apos;s how we tell our story.
                        </p>
                    </div>
                    <div className="fade-in-button-about md:p-5 flex flex-row">
                        <div
                            onClick={navigateToAbout} // Add onClick handler
                            className="bg-primary rounded-[35px] px-[50px] py-[20px] cursor-pointer"
                        >
                            About Us
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutBeurokrat
