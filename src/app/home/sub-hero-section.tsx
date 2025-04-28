'use client'
import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

function SubHeroSection() {
    const cardInfo = [
        {
            iconPath: '/assets/img/icons/ic_think_beyond.svg',
            title: 'Future Forward',
            description: 'We ignite tomorrow’s tech today, creating cutting-edge solutions that’s always ahead of the curve.',
        },
        {
            iconPath: '/assets/img/icons/ic_strong_identity.svg',
            title: 'Culture of Community',
            description:
                'Connections are our inspiration. We build human-centric, inclusive tech that bridges gaps and opens new collaborative frontiers.',
        },
        {
            iconPath: '/assets/img/icons/ic_inside_bk.svg',
            title: 'Free-Thinking',
            description:
                'Our ethos is simple—observe the patterns of life and deliver creative, purpose-driven solutions for real-world challenges.',
        },
        {
            iconPath: '/assets/img/icons/ic_bk_team.svg',
            title: 'Beyond Boundaries',
            description:
                'Our outlook knows no borders. We’re globally built and universally inspired, building tech shaped by diverse minds to solve real-world gaps.',
        },
    ]
    return (
        <>
            <Container>
                <div className="mt-[50px] overflow-x-auto flex md:flex-row sm:flex-col gap-[68px]">
                    {cardInfo.map((item, index) => (
                        <div key={index} className="border-t py-5 border-gray-400">
                            <div className="flex flex-row items-center mb-[16px]">
                                <Image alt="service-image" width={21} height={21} src={item.iconPath} />
                                <div>
                                    <b className="px-5">{item.title}</b>
                                </div>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default SubHeroSection
