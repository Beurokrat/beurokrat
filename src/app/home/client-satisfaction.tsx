import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

interface Props {}

function ClientStaisfaction(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="flex flex-row items-center w-full md:h-[594px] mb-[30px] rounded-[24px] bg-[#15171A]">
                <Image height={450} width={80} alt="beurokrat vector" src={'/assets/img/home_client_vector.png'} />
                <div className="flex flex-col">
                    <h1 className="text-[#EAEAEA] sm:text-[32px] md:text-[64px] my-[50px]">Ready to achieve ambitious goals?</h1>
                    <div className="flex sm:flex-col md:flex-row justify-between">
                        <div className="flex flex-col md:w-[40%]">
                            <h1 className="text-[#7EE787] sm:text-[50px] sm:leading-[57px] md:text-[64px] md:leading-[68px]">
                                100% Client Satisfaction
                            </h1>
                            <p className="mt-[30px] sm:pr-[50px] md:pr-0 text-[#ffffff] sm:text-[17px] md:text-[20px] md:leading-[28px]">
                                Trusted by industry leaders, our AI solutions deliver measurable results. Partner with us and
                                unlock the full potential of AI for your business.
                            </p>
                        </div>
                        <Image src="/assets/img/home_client_world.png" alt="beurokrat world" height={400} width={485} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ClientStaisfaction
