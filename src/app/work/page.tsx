'use client'
import Image from 'next/image'
import Container from '../_components/container'

import { ReactLenis } from 'lenis/dist/lenis-react'
import Clientile from '../contact/clientile'
import ContactUs from '../home/contact-cta'

function Work() {
    const projects = [
        {
            key: 1,
            title: 'Vehicle-to-Vehicle communication system',
            src: '/assets/img/project_1.png',
            description:
                'The system enables seamless VoIP communication and media sharing between vehicles. By facilitating real-time information exchange, it significantly improves driving safety and helps prevent accidents.',
            tag: 'Networking',
            link: '',
        },
        {
            key: 2,
            title: 'Variable intensity brake lighting with dynamic brake assist.',
            src: '/assets/img/project_2.png',
            description:
                'An innovative design concept for vehicle tail lamps that combines both functionality and aesthetics, along with a derivative braking system that enhances the ADAS collision avoidance capabilities.',
            tag: 'Automotive',
            link: '',
        },
        {
            key: 3,
            title: 'Real-time proximity sensing module for disease spread tracking',
            src: '/assets/img/project_3.png',
            description:
                'Designed to track disease spread by monitoring the distance between individuals. This system provided valuable insights into interactions and helped enforce social distancing protocols.',
            tag: 'Electronics',
            link: '',
        },
        {
            key: 4,
            title: 'AI powered Exoskeleton for assisting patients with Muscular Dystrophy',
            src: '/assets/img/project_4.png',
            description:
                'An assistive technology for rehabilitating patients with post-stroke paralysis, aimed at improving motor function and helping patients regain independence during recovery.',
            tag: 'Bio-Medical',
            link: '',
        },
    ]
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Container>
                <div className="mt-[150px] md:mb-[45px] flex sm:flex-col md:flex-row w-full md:justify-between md:items-end">
                    <h1 className="sm:text-[40px] md:text-[60px] ">Research Projects</h1>
                    <p className="text-[16px] md:w-[40%]">
                        Our work spans a wide range of fields, including vehicle safety, assistive technology, and health tracking
                        systems, demonstrating our commitment to improving lives through technology.
                    </p>
                </div>
                <div className="w-full md:flex mt-[60px] justify-end">
                    <div className="w-fit grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((pr) => (
                            <div
                                key={pr.key}
                                className="flex m-2 rounded-[20px] flex-col justify-between p-[20px] md:w-[435px] h-[auto] shadow-[0_0_25px_0] shadow-black/10"
                            >
                                {pr.src && (
                                    <div
                                        className={`w-full h-[260px] rounded-[14px] bg-center bg-cover bg-no-repeat`}
                                        style={{ backgroundImage: `url(${pr.src})` }}
                                    >
                                        <div className="rounded-full bg-primary text-black text-[12px] px-2 py-1 m-2 w-fit">
                                            {pr.tag}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-3">
                                    <h2 className="pb-[8px]">{pr.title}</h2>
                                    <p className="pb-[8px] text-[13px]">{pr.description}</p>
                                </div>
                                <div className="pt-3 flex justify-end w-full">
                                    <Image height={60} width={60} alt="arrow" src="/assets/img/icons/work_arrow.png" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Clientile />
            </Container>
            <ContactUs />
        </ReactLenis>
    )
}

export default Work
