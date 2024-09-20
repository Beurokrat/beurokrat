'use client'
import React from 'react'
import Button from '../_components/button'
import { useRouter } from 'next/navigation'
import Container from '../_components/container'

const AboutCompany = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/company')
    }
    return (
        <section className=" bg-white h-[600px]">
            <Container>
                <div className="w-full flex flex-col items-center justify-start py-[100px] pr-5 pl-[21px] box-border gap-[50px_0px]  mq450:gap-[100px_0px] mq900:gap-[100px_0px]">
                    <footer className="pt-28 flex flex-col items-center justify-start gap-[30px_0px] max-w-full text-center text-smi text-bk-black font-cta-button-text-title-case mq450:gap-[50px_0px]">
                        <div className="flex flex-row items-start justify-start">
                            <h3>START HERE, BUILD ANYTHING.</h3>
                        </div>
                        <h1 className="m-0 md:w-3/4">At Beurokrat, our products are our mode of expression</h1>
                        <p className="m-0 text-md md:w-3/4">
                            Engage with our community of experts pushing the limits of innovation and disrupting norms. We
                            undertake AI, Web3, and Robotics projects. Through our collaborative efforts, we are not just building
                            technologies we are shaping the future of human-machine interaction, decentralized governance, and
                            intelligent automation.
                        </p>
                    </footer>
                    <Button text="About Our Company" onClick={handleClick} />
                </div>
            </Container>
        </section>
    )
}

export default AboutCompany
