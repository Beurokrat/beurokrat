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
                            Committed to make you live your brands best life.
                        </h1>
                    </div>
                    <div className="bg-primary my-[30px] sm:w-full md:w-fit text-center md:px-[24px] py-[12px] rounded-[50px]">
                        Our Work
                    </div>
                    <div className="flex md:flex-row sm:flex-col-reverse justify-between">
                        <div className="flex md:flex-col sm:flex-col-reverse md:w-[45%] md:mb-[100px] justify-between">
                            <p className="text-[17px] leading-[29px]">
                                Weve built a vast collection of successful design and tech solutions that can be tailored to your
                                specific needs. Whether youre facing a sudden change in direction or a new competitor, Pelo offers
                                the expertise and resources to help you thrive
                            </p>
                            <Exodus />
                        </div>
                        <div className="flex flex-col md:w-[45%] md:mb-[100px] sm:mb-[30px]">
                            <p className="text-[80px] leading-[70px]">100+</p>
                            <p className="text-[17px] mb-[14px]">Accomplished Endeavors</p>
                            <Image alt="arrow" width={530} height={545} src="/assets/img/home_work_accomplishment.png" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Work
