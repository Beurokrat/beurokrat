'use client'
import React, { useState, useEffect, useRef } from 'react'
import Container from '@/app/_components/container'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from 'three'
import splitStringUsingRegex from '@/helpers/split-string-regex'
import { motion } from 'framer-motion'

type VantaEffect = any

declare global {
    interface Window {
        VANTA: any
    }
}

interface HeroProps {
    // Define any props your component expects here
}

const Hero: React.FC<HeroProps> = (props) => {
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
    const heading = 'Shaping the future of technology and challenging the status quo.'
    const text =
        'Engage with our community of experts pushing the limits of innovation and disrupting norms. We undertake AI, Web3 and Robotics projects.'
    const headingChars = splitStringUsingRegex(heading)
    const textChars = splitStringUsingRegex(text)
    const myRef = useRef<HTMLDivElement>(null)

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger each child by 0.3 seconds
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    THREE,
                    el: myRef.current,
                    backgroundColor: 0x000000,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    speed: 0.1,
                }),
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    const fadeInAnimationConfig = {
        duration: 1,
        delay: 0.7,
    }
    return (
        <div style={{ zIndex: -10 }} className="sm:px-[23px] md:px-10 w-full rounded-8xl h-screen" ref={myRef}>
            <div className="w-full h-full flex items-center">
                <Container>
                    <div className="flex flex-col mt-10 h-fit">
                        <div className="rounded-xl md:p-6 md:w-[60%] text-left text-gray-100">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                className="mt-[60px] px-3 py-1 w-fit sm:mb-5 rounded-lg"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px', color: '#ffffff' }}
                            >
                                FOR BUSINESS
                            </motion.h3>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                className="p-1 mt-3 sm:text-3xl md:text-6xl"
                            >
                                {headingChars}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                className="sm:text-lg md:text-lg mt-5 sm:pb-10 md:p-5 md:pl-0"
                            >
                                Since our inception in July 2020, Beurokrat BMS has been at the forefront of technological
                                innovation.{' '}
                            </motion.p>
                        </div>
                        <div className="md:p-5 flex flex-row">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                style={{ backgroundColor: '#1b1b1b', color: '#ffffff' }}
                                className="rounded-[35px] md:px-[50px] sm:px-[25px] md:py-[20px] sm:py-[20px]"
                            >
                                Get Started
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px', color: '#ffffff' }}
                                className="ml-5 rounded-[35px] md:px-[50px] sm:px-[25px] md:py-[20px] sm:py-[20px]"
                            >
                                About Us
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
