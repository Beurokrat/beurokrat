'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Container from '../../_components/container'

const Service = () => {
    const [showText, setShowText] = useState(false)

    return (
        <Container>
            <div className="text-center pt-28">
                <h3>FROM TOUCHSCREENS TO TACTILE ROBOTS</h3>
            </div>
            <div className="flex justify-center text-center mt-10 w-full">
                <h1 className="md:w-3/4">We deliver customized digital products, tailored to your needs</h1>
            </div>
            <div className="flex justify-between  flex-col md:flex-row items-center text-wrap pt-16 ">
                <div className="md:w-[25%] md:mr-10 mb-10 md:mb-0">
                    <p>
                        As a research and development company focused on services, we evaluate our clients&apos; needs, whether
                        they involve design materials, web applications, or embedded systems. Our dynamic and inventive team is
                        committed to addressing your requirements effectively.
                    </p>
                </div>
                <div className="flex sm:w-full md:w-[75%] flex-col md:flex-row justify-center gap-4 md:gap-20 md:ml-20 mb-6">
                    <div
                        className="flex flex-col items-center"
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                    >
                        {/* <div className='bg-blue-500 text-center text-white py-2 hover-text sm:hidden md:block'>
                Data Science
              </div> */}
                        <Image alt="service-image" width={200} height={200} src="/assets/img/hover-title-top.svg" />
                    </div>
                    <div
                        className="flex flex-col items-center"
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                    >
                        {/* <div className='bg-blue-500 text-center text-white py-2 hover-text sm:hidden md:block'>
                Robotics
              </div> */}
                        <Image alt="service-image" width={200} height={200} src="/assets/img/hover-title-top_1.svg" />
                    </div>
                    <div
                        className="flex flex-col items-center"
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                    >
                        {/* <div className='bg-blue-500 text-center text-white py-2 hover-text sm:hidden md:block'>
                Robotics
              </div> */}
                        <Image alt="service-image" width={200} height={200} src="/assets/img/hover-title-top_2.svg" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Service
