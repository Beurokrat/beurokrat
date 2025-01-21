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

    const recognition = [
        {
            key: 1,
            src: '/assets/img/hp_recognition_1.png',
            alt: 'Assistive Technology Australia',
            height: 101,
            width: 202,
        },
        {
            key: 2,
            src: '/assets/img/hp_recognition_2.png',
            alt: 'All India Council for Technological Education',
            height: 99,
            width: 210,
        },
        {
            key: 3,
            src: '/assets/img/hp_recognition_3.png',
            alt: 'Gandhian Young Technological Innovation Award',
            height: 93,
            width: 186,
        },
        {
            key: 4,
            src: '/assets/img/hp_recognition_4.png',
            alt: 'Springer Nature',
            height: 90,
            width: 180,
        },
        {
            key: 5,
            src: '/assets/img/hp_recognition_5.png',
            alt: 'Indian Automotive and Technological Award',
            height: 192,
            width: 223,
        },
    ]

    return (
        <Container>
            <div className="flex sm:flex-col md:flex-row items-center justify-between w-full my-[80px]">
                <h2 className="text-[30px] text-[#B0B0B0] pr-6 whitespace-nowrap">Awarded & Acclaimed →</h2>
                <div className="relative overflow-hidden w-full mt-4 md:mt-0">
                    <div ref={marqueeRef} className="flex flex-row items-center w-max gap-8 marquee-content">
                        {recognition.concat(recognition).map((item, index) => (
                            <div key={index} className="p-[10px] flex-shrink-0">
                                <Image
                                    className="card px-[15px]"
                                    width={item.width}
                                    height={item.height}
                                    alt={item.alt}
                                    src={item.src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Awards
