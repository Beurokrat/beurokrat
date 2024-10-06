'use client'
import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

function SubHeroSection() {
    const cardInfo = [
        {
            iconPath: '/assets/img/icons/ic_think_beyond.svg',
            title: 'Think Beyond',
            description: 'Next-generation AI, security and storage solutions, find the answer to your business challenge.',
        },
        {
            iconPath: '/assets/img/icons/ic_strong_identity.svg',
            title: 'Strong Identity',
            description:
                'We hire the top 1% creative talent around the world, to give you access to the highest standard of work possible.',
        },
        {
            iconPath: '/assets/img/icons/ic_inside_bk.svg',
            title: 'Inside Beurokrat',
            description:
                "Solving the world's problems through technology wouldn't be possible without our most important invention.",
        },
        {
            iconPath: '/assets/img/icons/ic_inside_bk.svg',
            title: 'Inside Beurokrat',
            description: 'Next-generation AI, security and storage solutions, find the answer to your business challenge.',
        },
    ]
    return (
        <>
            <Container>
                <div className="mt-[50px] flex flex-row gap-[68px]">
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
