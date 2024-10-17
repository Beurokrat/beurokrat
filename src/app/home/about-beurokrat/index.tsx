'use client'
import React, { useEffect } from 'react'

import Container from '../../_components/container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
const AboutBeurokrat = () => {
    const tl = gsap.timeline({ reoeat: 1 })

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
                        <p className="fade-in-text-about sm:text-lg md:text-[17px] mt-5 sm:pb-10 md:p-5 md:pl-0">
                            Since our inception in July 2020, Beurokrat BMS has been at the forefront of technological innovation.
                            We are more than just a service provider; we are your strategic partner, dedicated to helping
                            businesses elevate their value through bespoke software solutions, product design, and consultancy
                            services.{' '}
                        </p>
                    </div>
                    <div className="fade-in-button-about md:p-5 flex flex-row">
                        <div className="bg-primary rounded-[35px] px-[50px] py-[20px]">Get Started</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutBeurokrat
