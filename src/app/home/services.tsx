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
                    start: 'top bottom',
                    end: 'top 90%',
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
            description: 'We create custom web applications that deliver seamless, user-friendly experiences.',
            subServices: [
                { id: 1, title: 'Website Development' },
                { id: 2, title: 'ECommerce' },
                { id: 3, title: 'Custom Web Application' },
            ],
        },
        {
            id: 1,
            title: 'Branding',
            description: 'We build strong, memorable brands that connect with your audience.',
            subServices: [
                { id: 4, title: 'Visual Identity' },
                { id: 5, title: 'Marketing Material' },
                { id: 6, title: 'Brand Guidelines' },
            ],
        },
        {
            id: 3,
            title: 'Embedded Systems Development',
            description: 'We design and develop advanced embedded systems and electronic solutions.',
            subServices: [
                { id: 7, title: 'Consumer Electronics' },
                { id: 8, title: 'IoT Automated Systems' },
                { id: 9, title: 'EDGE Computing Systems' },
            ],
        },
    ]

    return (
        <Container>
            {/* Header Section */}
            <div className="sm:hidden md:block mt-[40px] w-[70%]">
                <h3 className="services-section services-text mb-[50px]">OUR SERVICES</h3>
                <h1 className="services-text md:text-6xl">We deliver customized digital products tailored to your needs</h1>
            </div>

            {/* Desktop View */}
            <div className="w-full sm:hidden md:flex mt-[60px] justify-end">
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
                                <div className="w-full border-b border-gray-300 mb-[16px]">SERVICES</div>
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

            {/* Mobile View - Carousel */}
            <div className="w-full md:hidden flex mt-[0px] overflow-x-auto space-x-4 px-4">
                {servicesInfo.map((item) => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 w-[300px] rounded-[20px] flex flex-col justify-between p-6 text-white bg-[#292929]"
                    >
                        <div>
                            <h2 className="py-[25px]">{item.title}</h2>
                            <p className="pb-[10px]">{item.description}</p>
                        </div>
                        <div className="mb-[25px]">
                            <div className="w-full border-b border-gray-300 mb-[16px]">SERVICES</div>
                            {item.subServices.map((i) => (
                                <div className="flex gap-4" key={i.id}>
                                    <Image alt="service-image" width={15} height={15} src="/assets/img/icons/ic_circle.svg" />
                                    {i.title}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center bg-[url('/assets/img/homepage_services_bg.png')] bg-cover rounded-2xl">
                    <div className="bg-primary rounded-[35px] px-[30px] py-[15px]">Check More Services</div>
                </div>
            </div>
        </Container>
    )
}

export default Services
