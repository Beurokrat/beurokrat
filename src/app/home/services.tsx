'use client'
import Image from 'next/image'
import Container from '../_components/container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function Services() {
    const tl = gsap.timeline({ repeat: 1 })
    useGSAP(() => {
        tl.fromTo(
            '.services-text',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.9,
                scrollTrigger: {
                    trigger: '.services-section',
                    // trigger: '.about-beurokrat',
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true,
                },
                stagger: 0.5,
                ease: 'expo.in',
            }
        )
    }, [])
    const servicesInfo = [
        {
            id: 0,
            title: 'Web Development',
            description: 'Crafting digital experiences that are both beautiful and practical.',
            subServices: [
                { id: 1, title: 'Website Development' },
                { id: 2, title: 'ECommerce' },
                { id: 3, title: 'Custom Web Application' },
            ],
        },
        {
            id: 1,
            title: 'Branding',
            description:
                'We help evolve brand identities, be it a new brand, guiding its evolution, or giving it a visual uplift.',
            subServices: [
                { id: 4, title: 'Visual Identity' },
                { id: 5, title: 'Marketing Material' },
                { id: 6, title: 'Brand Guidelines' },
            ],
        },
        {
            id: 3,
            title: 'Embedded Systems Development',
            description: 'We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful. ',
            subServices: [
                { id: 7, title: 'Consumer Electronics' },
                { id: 8, title: 'Research Projects' },
                { id: 9, title: 'Innovation Integration' },
            ],
        },
    ]
    return (
        <Container>
            <div className=" sm:hidden md:block mt-[80px] px-[50px] w-[70%]">
                <h3 className="services-section services-text mb-[50px]">OUR SERVICES</h3>
                <h1 className=" services-text md:text-6xl">We deliver customized digital products tailored to your needs</h1>
            </div>
            <div className="w-full sm:hidden md:flex mt-[60px]  justify-end">
                <div className="w-fit grid grid-cols-2 gap-4">
                    {servicesInfo.map((item) => (
                        <div
                            key={item.id}
                            className="flex m-2 rounded-[20px] flex-col justify-between p-10 w-[455px] h-[433px] text-white bg-[#292929]"
                        >
                            <div>
                                <h2 className="pb-[8px]">{item.title}</h2>
                                <p className="pb-[8px]">{item.description}</p>
                            </div>
                            <div>
                                <div className="w-full border-b border-gray-300 mb-[16px]">STRATEGY SERVICES</div>
                                {item.subServices.map((i) => (
                                    <div className="flex gap-4" key={i.id}>
                                        <Image alt="service-image" width={15} height={15} src="/assets/img/icons/ic_circle.svg" />
                                        {i.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex items-end m-2 rounded-2xl p-10 w-[455px] h-[433px] bg-[url('/assets/img/homepage_services_bg.png')]">
                        <div className="bg-primary rounded-[35px] px-[50px] py-[20px]">Check More Services</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services
