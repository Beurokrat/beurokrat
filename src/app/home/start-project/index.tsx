'use client'
import React, { useEffect } from 'react'

import Container from '../../_components/container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const StartProject = () => {
    const tl = gsap.timeline({ reoeat: 0 })
    useGSAP(() => {
        tl.fromTo(
            '.start-project',
            { backgroundSize: '120%' },
            {
                backgroundSize: '100%',
                scrollTrigger: {
                    trigger: '.start-project',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                },
                duration: 1.9,
            }
        ).fromTo(
            '.fade-in-text',
            { yPercent: -50, opacity: 0 },
            {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                ease: 'expo.in',
            }
        )
    }, [])
    return (
        <Container>
            <div className="start-project mt-[80px] w-full rounded-[38px] bg-black md:bg-cover bg-center bg-[url('/assets/img/homepage_hand_1.png')]">
                {/* <div className="absolute bottom-0" style={{ zIndex: 3 }}>
                    <Image alt="bg-hand-image" width={464} height={619} src="/assets/img/homepage_hand_1.png" />
                </div> */}
                <div className=" flex flex-col py-[10px] md:px-10  mt-10">
                    <div className="rounded-xl md:p-6 md:w-full text-left text-white">
                        <h1 className="fade-in-text sm:p-[28px] md:p-5 mt-3 sm:text-3xl md:text-6xl">
                            We deliver customized digital products tailored to your needs
                        </h1>
                        <div className="fade-in-text flex mt-5 w-full sm:pl-[28px] md:justify-center text-black">
                            <div className="bg-primary w-fit rounded-[35px] px-[50px] py-[20px]">Start A Project</div>
                        </div>
                        <div className="sm:p-[28px] md:p-5 flex md:w-full justify-end flex-row">
                            <p className="fade-in-text sm:text-lg md:text-[17px] mt-5 md:w-[30%] sm:pb-10 md:p-5 md:pl-0">
                                As a research and development company focused on services, we evaluate our clients needs, whether
                                they involve design materials, web applications, or embedded systems. Our dynamic and inventive
                                team is committed to addressing your requirements effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default StartProject
