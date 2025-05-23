'use client'
import React from 'react'
import Container from '../_components/container'
import { useRouter } from 'next/navigation' // Import useRouter

const AboutHero = () => {
    const router = useRouter() // Initialize useRouter

    const navigateToContact = () => {
        router.push('/contact') // Navigate to the "Contact Us" page
    }

    return (
        <Container>
            <div className="mt-[120px] text-white rounded-[65px] p-[30px] pt-[130px] w-full bg-cover bg-center sm:bg-[url('/assets/img/about_hero_mobile.png')] md:bg-[url('/assets/img/about_hero.png')]">
                <div className="flex flex-col p-[20px] w-full ">
                    <div className="mb-[170px] w-[60%]">
                        <h1 className=" md:text-[70px] md:leading-[105px]">
                            Making <span className="text-[#BAFF17]">Digital</span> More Human
                        </h1>
                    </div>
                    <div className="mb-[50px] w-[60%]">
                        <h2 className=" md:text-[40px] md:leading-[45px]">{'{SMART} DEVELOPMENT'}</h2>
                    </div>
                    <div className="flex sm:flex-col md:flex-row justify-between w-full">
                        <p className=" md:w-[30%]">
                            {'Making your business outstanding is a science. We take it (a) seriously and (b) creatively.'}
                        </p>
                        <div
                            className="m-3 ml-0 w-fit rounded-2xl border border-white flex justify-center items-center text-[15px] px-[20px] py-[10px] cursor-pointer"
                            onClick={navigateToContact} // Add onClick handler
                        >
                            Get In Touch
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutHero
