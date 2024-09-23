'use client'
import React, { useState, useEffect, useRef } from 'react'
import Container from '@/app/_components/container'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from 'three'

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
    const heading = 'Shaping the future of technology 🚀 and challenging the status quo.'
    const text =
        'Engage with our community of experts pushing the limits of innovation and disrupting norms. We undertake AI, Web3 and Robotics projects.'
    return (
        <div style={{ zIndex: -10 }} className="-full h-screen" ref={myRef}>
            <div className="w-full h-full flex items-center bg-black/30">
                <Container>
                    <div className="flex justify-center">
                        <div className=" rounded-xl p-6 md:w-[60%]  text-gray-100">
                            <h1 className="p-5 sm:text-4xl md:text-6xl leading-loose">{heading}</h1>
                            <h1 className="p-5  md:block sm:text-lg ">{text}</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
