import React from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const AboutHero = () => {
    // const tl = gsap.timeline({ reoeat: 0 })
    // useGSAP(() => {
    //     tl.fromTo(
    //         '.fade-in-text',
    //         { opacity: 0 },
    //         {
    //             opacity: 1,
    //             scrollTrigger: {
    //                 trigger: '.fade-in-text',
    //                 start: 'top bottom',
    //                 end: 'top 30%',
    //                 scrub: true,
    //             },
    //             duration: 0.9,
    //             stagger: 0.5,
    //             ease: 'expo.in',
    //         }
    //     )
    // }, [])
    return (
        <div
            style={{ backgroundOrigin: 'center center' }}
            className="text-white p-[30px] mt-[130px] w-full rounded-[38px] bg-black md:bg-cover bg-center md:bg-[url('/assets/img/about_hero.png')] sm:bg-[url('/assets/img/about_hero_mobile.png')]"
        >
            <div className="flex flex-col p-[20px] w-full ">
                <div className="mb-[170px] w-[60%]">
                    <h1 className=" md:text-[70px] md:leading-[105px]">
                        Making <span className="text-[#BAFF17]">Digital</span> More Human
                    </h1>
                </div>
                <div className="mb-[50px] w-[60%]">
                    <h2 className=" md:text-[40px] md:leading-[45px]">{'{SMART} DEVELOPMENT'}</h2>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <p className=" w-[30%]">
                        {'Making your business outstanding is a science. We take it (a) seriously and (b) creatively.'}
                    </p>
                    <div className="w-fit rounded-2xl border border-white flex justify-center items-center text-[15px] px-[20px] py-[10px]">
                        Get In Touch
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
