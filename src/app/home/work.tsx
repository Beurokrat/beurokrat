import React from 'react'
import Container from '../_components/container'
import Exodus from '../_components/home-exodus'
import Image from 'next/image'

interface Props {}

function Work(props: Props) {
    const {} = props

    return (
        <>
            <Container>
                <div className="flex flex-col">
                    <div className="md:border-b-2 md:border-[#E8EDED] w-full md:py-[35px] sm:py-[15px]">
                        <h1 className="sm:text-[32px] md:text-[60px] md:leading-[63px] md:w-[70%]">
                            Inspiring creatives and working beyond boundaries.
                        </h1>
                        <p className="md:hidden text-[17px] leading-[29px]">
                            We&apos;ve built a vast collection of successful design and tech solutions that can be tailored to
                            your specific needs. Whether you&apos;re facing a sudden change in direction or a new competitor,
                            Beurokrat offers the expertise and resources to help you thrive
                        </p>
                        <div className="sm:flex md:hidden bg-primary my-[30px] sm:w-fit text-center px-[24px] py-[12px] rounded-[50px]">
                            Our Work
                        </div>
                    </div>

                    <div className="mt-[30px] flex md:flex-row sm:flex-col-reverse justify-between">
                        <div className="flex md:flex-col sm:flex-col-reverse md:w-1/2 md:mr-[50px] mb-[30px] justify-between">
                            <p className="sm:hidden md:flex text-[17px] leading-[29px]">
                                We&apos;ve built a vast collection of successful design and tech solutions that can be tailored to
                                your specific needs. Whether you&apos;re facing a sudden change in direction or a new competitor,
                                Beurokrat offers the expertise and resources to help you thrive
                            </p>
                            <div className="sm:hidden md:flex bg-primary my-[30px] sm:w-fit text-center px-[24px] py-[12px] rounded-[50px]">
                                Our Work
                            </div>
                            <Exodus />
                        </div>
                        <div className="flex flex-col md:w-1/2 md:mb-[30px] sm:mb-[30px] ">
                            <p className="text-[80px] leading-[70px]">30+</p>
                            <p className="text-[17px] mb-[14px]">Accomplished Endeavors</p>
                            {/* <div className="w-[530px] h-[545px] bg-cover bg-center bg-[url('/assets/animated/home_work.gif')] rounded-[38px]"></div> */}
                            <Image
                                alt="arrow"
                                width={530}
                                height={545}
                                className="w-full mt-[30px]"
                                src="/assets/img/home_work_accomplishment.png"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Work
