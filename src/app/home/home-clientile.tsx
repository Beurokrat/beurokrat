'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Container from '../_components/container'
import gsap from 'gsap'

function Awards() {
    const marqueeRef = useRef<HTMLDivElement>(null) // Correctly typed ref

    useEffect(() => {
        const marqueeElement = marqueeRef.current

        if (marqueeElement) {
            const totalWidth = marqueeElement.scrollWidth / 2 // Only account for one set of items
            gsap.to(marqueeElement, {
                x: `-${totalWidth}px`,
                duration: 15,
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    x: (x) => `${parseFloat(x) % totalWidth}px`, // Seamless looping
                },
            })
        }
    }, [])

    const clients = [
        {
            key: 1,
            alt: 'gee bee palace',
            src: '/assets/img/client_1.png',
            width: 180,
            height: 90,
        },
        {
            key: 2,
            alt: 'Nerdforsch',
            src: '/assets/img/client_2.png',
            width: 180,
            height: 55,
        },
        {
            key: 3,
            alt: 'Kemco-Agnice',
            src: '/assets/img/client_3.png',
            width: 180,
            height: 55,
        },
        {
            key: 4,
            alt: 'AMCC KSA',
            src: '/assets/img/client_4.png',
            width: 100,
            height: 55,
        },
    ]

    return (
        <Container>
            <div className="flex sm:flex-col md:flex-row items-center justify-between w-full my-[30px] border-t-2">
                <h2 className="mt-[30px] text-[25px] text-[#B0B0B0] whitespace-nowrap pr-[20px]">Working Worldwide for →</h2>
                <div className="relative overflow-hidden w-full mt-4 md:mt-0">
                    <div ref={marqueeRef} className="flex flex-row items-center w-max gap-8 marquee-content">
                        {clients.concat(clients).map((item, index) => (
                            <div key={index} className="p-[20px] flex-shrink-0">
                                <Image className="card" width={item.width} height={item.height} alt={item.alt} src={item.src} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Awards
