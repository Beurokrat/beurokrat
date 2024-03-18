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
        setVantaEffect(HALO({
          THREE,
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

    return (
        <div style={{ zIndex: -10 }} className="-full h-screen" ref={myRef}>
            <div className="w-full h-full flex items-center bg-black/30">
                <Container>
                    <div className="flex ">
                        <h1 className="sm:text-4xl md:text-5xl bg-primary p-4 md:w-[40%] -mr-10 leading-10">
                            Unleashing Innovation, One Byte at a Time.
                        </h1>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
