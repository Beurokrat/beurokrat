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
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div style={{ zIndex: -10 }} className="w-full h-screen" ref={myRef}>
            <div className="w-full h-full flex items-center bg-black/30">
                <Container>
                    <div className="flex">
                        <div className="rounded-xl md:p-6 md:w-[60%] text-left text-gray-100">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.7,
                                }}
                                className="p-1 sm:text-lg md:text-6xl"
                            >
                                {headingChars}
                            </motion.h1>

                            {/* {headingChars.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: i / 20,
                                    }}
                                    key={i}
                                    // variants={itemVariants}
                                    className="p-1 sm:text-lg md:text-6xl text-center leading-loose"
                                >
                                    {el}
                                </motion.span>
                            ))} */}
                            <motion.h1 className="p-5 sm:hidden sm:text-lg ">{textChars}</motion.h1>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
