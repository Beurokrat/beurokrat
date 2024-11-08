import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

function AboutContent() {
    return (
        <Container>
            <div className="flex sm:flex-col md:flex-row mt-[50px]">
                <div className="flex flex-col md:w-1/2 md:mx-[35px] pb-[30px]">
                    <p>
                        Beurokrat is an early-stage startup company with an efficient management team, design team and development
                        team. We gained momentum with our strategic planning, methodological workflow and personalised service.
                        Our primary objective is to simplify tech and make it easily accessible to people.{' '}
                    </p>
                    <p className="mt-[20px]">
                        Since our inception in July 2020, Beurokrat BMS has helped businesses elevate their value by providing
                        customised software solutions, product design and consultancy services. We provide technical solutions in
                        the form of software / hardware in order to organize the workflow and provide tools for easy and efficient
                        management.
                    </p>
                    <h1 className="sm:hidden md:flex mt-[80px]">We Strive to Innovate</h1>
                    <p className="sm:hidden md:flex mt-[20px]">
                        Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract
                        actionable insights
                    </p>
                    <div className="sm:hidden md:grid grid-cols-2 gap-4">
                        <div className="flex flex-col mt-[20px] p-4 pl-0">
                            <div className="flex flex-row">
                                <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                <span className="pl-3">
                                    <b>Build</b>
                                </span>
                            </div>
                            <p>Create your dream CRM with powerful, flexible templates for every use case.</p>
                        </div>
                        <div className="flex flex-col mt-[20px] p-4 pl-0">
                            <div className="flex flex-row">
                                <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                <span className="pl-3">
                                    <b>Refine</b>
                                </span>
                            </div>
                            <p>Use intuitive UI and ultra- customizable blocks to craft your ideal workflows.</p>
                        </div>
                        <div className="flex flex-col mt-[20px] p-4 pl-0">
                            <div className="flex flex-row">
                                <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                <span className="pl-3">
                                    <b>Work</b>
                                </span>
                            </div>
                            <p>Help your business scale with enriched data, custom attributes, and integrations.</p>
                        </div>
                        <div className="flex flex-col mt-[20px] p-4 pl-0">
                            <div className="flex flex-row">
                                <Image width={20} height={20} alt="icon" src="/assets/img/icons/ic_about_build.svg" />
                                <span className="pl-3">
                                    <b>Report</b>
                                </span>
                            </div>
                            <p>Analyze, track and share reports built on real-time data from across your workspace.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 min-h-[490px] bg-cover bg-center rounded-[50px] sm:bg-[url('/assets/img/about_content.png')]"></div>
            </div>
        </Container>
    )
}

export default AboutContent
