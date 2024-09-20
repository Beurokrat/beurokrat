'use client'
import React, { useState, useEffect, useRef } from 'react'
import Container from '@/app/_components/container'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from 'three'
import splitStringUsingRegex from '@/helpers/regex-string-split'

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
    const myRef = useRef<HTMLDivElement>(null)
    splitStringUsingRegex
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    THREE,
                    el: myRef.current,
                    backgroundColor: 0x000000, // Background color
                    color: 0xdddddd, // Halo color
                    size: 3.15, // Size of the halo effect
                    amplitudeFactor: 1.0, // Amplitude of the waves
                    baseFrequency: 0.9, // Frequency of the waves
                    speed: 1.0, // Speed of the animation
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    const heading = 'Shaping the future of technology 🚀 and challenging the status quo.'
    const text =
        'Engage with our community of experts pushing the limits of innovation and disrupting norms. We undertake AI, Web3 and Robotics projects.'
    return (
        <div style={{ zIndex: -10 }} className="-full h-screen" ref={myRef}>
            <div className="w-full h-full flex items-center bg-black/30">
                <Container>
                    <div className="flex justify-center">
                        <div className=" rounded-xl p-6 md:w-[60%]  text-gray-100">
                            <h1 className="p-5 sm:text-5xl md:text-6xl leading-loose">{heading}</h1>
                            <h1 className="p-5 sm:hidden md:text-md leading-loose">{text}</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
