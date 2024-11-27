import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'
import ContactUs from '../home/contact-cta'

function AboutContent() {
    return (
        <>
            <Container>
                <div className="flex sm:flex-col md:flex-row mt-[50px]">
                    <div className="flex flex-col md:w-1/2 md:mx-[35px] pb-[30px]">
                        <p className="text-[16px]">
                            Beurokrat is an innovative research and development startup founded by a team of motivated
                            visionaries. Established in July 2020, our focus is to simplify technology and make it more
                            accessible. With a strong management, design, and development team, we are committed to creating
                            impactful solutions that improve lives.
                        </p>
                        <p className="text-[16px] mt-[20px]">
                            Our work revolves around delivering customized software, hardware, and consultancy services designed
                            to streamline workflows and enhance organizational efficiency. Driven by a social outlook, we approach
                            every project with creativity and originality, drawing inspiration from nature and our surroundings to
                            solve real-world challenges. Our unconventional methodology fuels our growth as a dynamic,
                            forward-thinking team.
                        </p>
                        <h1 className="sm:hidden md:flex mt-[30px]">Impact Through Creativity</h1>
                        <p className="sm:hidden md:flex text-[16px] mt-[20px]">
                            We drive meaningful change by harnessing the power of creative solutions. Our approach transforms
                            challenges into opportunities for positive impact.
                        </p>
                        <div className="sm:hidden md:grid grid-cols-2 gap-4">
                            <div className="flex flex-col mt-[20px] p-4 pl-0">
                                <div className="flex flex-row">
                                    <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                    <span className="pl-3">
                                        <b>Collaborate</b>
                                    </span>
                                </div>
                                <p className="mt-[10px] text-[13px]">
                                    We work seamlessly as a team, leveraging our diverse skills and expertise to bring ideas to
                                    life.
                                </p>
                            </div>
                            <div className="flex flex-col mt-[20px] p-4 pl-0">
                                <div className="flex flex-row">
                                    <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                    <span className="pl-3">
                                        <b>Innovate</b>
                                    </span>
                                </div>
                                <p className="mt-[10px] text-[13px]">
                                    We continuously explore new ideas and solutions, driving creativity to stay ahead of
                                    technological trends.
                                </p>
                            </div>
                            <div className="flex flex-col mt-[20px] p-4 pl-0">
                                <div className="flex flex-row">
                                    <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                    <span className="pl-3">
                                        <b>Adapt</b>
                                    </span>
                                </div>
                                <p className="mt-[10px] text-[13px]">
                                    We embrace change and evolve our strategies to stay flexible and responsive to emerging
                                    challenges.
                                </p>
                            </div>
                            <div className="flex flex-col mt-[20px] p-4 pl-0">
                                <div className="flex flex-row">
                                    <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                    <span className="pl-3">
                                        <b>Impact</b>
                                    </span>
                                </div>
                                <p className="mt-[10px] text-[13px]">
                                    Our projects are designed with a social focus, aiming to create meaningful change and improve
                                    lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 min-h-[490px] bg-cover bg-center rounded-[50px] sm:bg-[url('/assets/img/about_content.png')]"></div>
                </div>
                <div className="mt-[60px] flex sm:flex-col-reverse md:flex-row">
                    <div className="flex mt-2 md:mr-2 md:w-[60%] bg-black text-white p-[30px] rounded-[38px] items-center">
                        <div className="flex flex-col">
                            <h3 className="text-[32px]">
                                Let&apos;s start a conversation and explore how we can bring your vision to life.
                            </h3>
                            <Image
                                className="mt-[12px]"
                                width={220}
                                height={40}
                                alt="join us"
                                src="/assets/img/about_us_grid.png"
                            />
                            <p className="mt-[20px] text-[16px]">
                                Use intuitive UI and ultra- customizable blocks to craft your ideal workflows.
                            </p>
                            <div className="md:mt-[20px] bg-primary text-black sm:mb-[100px] md:mb-[30px] w-fit rounded-[35px] px-[30px] py-[10px]">
                                Start A Project
                            </div>
                        </div>
                    </div>
                    <div className="md:ml-2 md:w-[40%] h-[545px] bg-cover bg-top bg-[url('/assets/animated/about_join_us.gif')] rounded-[38px]"></div>
                </div>
            </Container>
            <div className="mt-8">
                <ContactUs />
            </div>
        </>
    )
}

export default AboutContent
