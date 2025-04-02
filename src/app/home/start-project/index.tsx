'use client'
import React, { useEffect } from 'react'
import Container from '../../_components/container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRouter } from 'next/navigation' // Import useRouter

gsap.registerPlugin(ScrollTrigger)

const StartProject = () => {
    const tl = gsap.timeline({ repeat: 0 })
    const router = useRouter() // Initialize useRouter

    useGSAP(() => {
        tl.fromTo(
            '.fade-in-text',
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.fade-in-text',
                    start: 'top bottom',
                    end: 'top 30%',
                    scrub: true,
                },
                duration: 0.9,
                stagger: 0.5,
                ease: 'expo.in',
            },
        )
    }, [])

    const navigateToStartProject = () => {
        router.push('/contact') // Navigate to the "Start A Project" page
    }

    return (
        <Container>
            <div
                style={{ backgroundOrigin: 'center center' }}
                className="start-project mt-[80px] w-full rounded-[38px] bg-black md:bg-cover bg-center md:bg-[url('/assets/img/homepage_hand_1.png')] sm:bg-[url('/assets/img/homepage_hand_2_mobile.png')]"
            >
                <div className="flex flex-col py-[10px] md:px-10 mt-10">
                    <div className="rounded-xl md:p-6 md:w-full text-left text-white">
                        <h1 className="fade-in-text sm:p-[28px] md:p-5 mt-3 sm:text-3xl md:text-6xl">
                            We deliver customized digital products tailored to your needs
                        </h1>
                        <div className="fade-in-text flex mt-5 w-full sm:pl-[28px] md:justify-center text-black">
                            <div
                                className="bg-primary sm:mb-[100px] md:mb-[30px] w-fit rounded-[35px] px-[50px] py-[20px] cursor-pointer"
                                onClick={navigateToStartProject} // Add onClick handler
                            >
                                Start A Project
                            </div>
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
