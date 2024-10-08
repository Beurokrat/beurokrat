'use client'
import React, { useEffect } from 'react'

import Container from '../../_components/container'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
const AboutBeurokrat = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.about-beurokrat',
            { backgroundSize: '170%' },
            {
                backgroundSize: '120%',
                scrollTrigger: {
                    trigger: '.about-beurokrat',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                },
                duration: 1.7,
            }
        )
    }, [])
    const fadeInAnimationConfig = {
        duration: 1,
        delay: 0.7,
    }
    return (
        <Container>
            <div className="about-beurokrat mt-[80px] py-[30px] md:px-[50px] sm:px-[22px] w-full rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_about_bg_image.png')]">
                <div className="flex flex-col ">
                    <div className="rounded-xl md:p-6 md:w-[60%] text-left text-black">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={fadeInAnimationConfig}
                            className="px-3 py-1 w-fit sm:mb-5 rounded-lg"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', border: '2px', color: '#000000' }}
                        >
                            ABOUT US
                        </motion.h3>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={fadeInAnimationConfig}
                            className="p-1 mt-3 sm:text-3xl md:text-6xl"
                        >
                            At Beurokrat, our <span className="text-gray-400">products</span> are our mode of expression
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={fadeInAnimationConfig}
                            className="sm:text-lg md:text-[17px] mt-5 sm:pb-10 md:p-5 md:pl-0"
                        >
                            Since our inception in July 2020, Beurokrat BMS has been at the forefront of technological innovation.
                            We are more than just a service provider; we are your strategic partner, dedicated to helping
                            businesses elevate their value through bespoke software solutions, product design, and consultancy
                            services.{' '}
                        </motion.p>
                    </div>
                    <div className="md:p-5 flex flex-row">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={fadeInAnimationConfig}
                            className="bg-primary rounded-[35px] px-[50px] py-[20px]"
                        >
                            Get Started
                        </motion.div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutBeurokrat
