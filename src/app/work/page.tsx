'use client'
import Image from 'next/image'
import Container from '../_components/container'

import { ReactLenis } from 'lenis/dist/lenis-react'
import Clientile from '../contact/clientile'

function Work() {
    const projects = [
        {
            key: 1,
            title: 'Vehicle-to-Vehicle communication system',
            src: '/assets/img/project_1.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium corporis tenetur, nemo laboriosam veniam in nisi corrupti quibusdam ad.',
            tag: 'Automotive',
            link: '',
        },
        {
            key: 2,
            title: 'Variable intensity brake lighting with dynamic brake assist.',
            src: '/assets/img/project_2.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium corporis tenetur, nemo laboriosam veniam in nisi corrupti quibusdam ad.',
            tag: 'Automotive',
            link: '',
        },
        {
            key: 3,
            title: 'Real-time proximity sensing module for disease spread tracking',
            src: '/assets/img/project_3.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium corporis tenetur, nemo laboriosam veniam in nisi corrupti quibusdam ad.',
            tag: 'Automotive',
            link: '',
        },
        {
            key: 4,
            title: 'AI powered Exoskeleton for assisting patients with Muscular Dystrophy',
            src: '/assets/img/project_4.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium corporis tenetur, nemo laboriosam veniam in nisi corrupti quibusdam ad.',
            tag: 'Automotive',
            link: '',
        },
    ]
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Container>
                <div className="mt-[150px] md:my-[45px] flex sm:flex-col md:flex-row w-full md:justify-between md:items-end">
                    <h1 className="sm:text-[40px] md:text-[60px] ">Our Projects</h1>
                    <p className="text-[16px] md:w-[40%]">
                        We have extensive experience in various research projects as well as service-oriented initiatives. Some
                        notable highlights of our endeavors include:
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
                                    <p className="pb-[8px]">{pr.description}</p>
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
        </ReactLenis>
    )
}

export default Work
