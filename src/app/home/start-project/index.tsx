'use client'
import React from 'react'

import Container from '../../_components/container'
import { motion } from 'framer-motion'

const StartProject = () => {
    const fadeInAnimationConfig = {
        duration: 1,
        delay: 0.7,
    }
    return (
        <Container>
            <div className="mt-[80px] w-full rounded-[38px] bg-black md:bg-cover bg-center bg-[url('/assets/img/homepage_hand_1.png')]">
                {/* <div className="absolute bottom-0" style={{ zIndex: 3 }}>
                    <Image alt="bg-hand-image" width={464} height={619} src="/assets/img/homepage_hand_1.png" />
                </div> */}
                <div className="flex flex-col py-[10px] md:px-10  mt-10">
                    <div className="rounded-xl md:p-6 md:w-full text-left text-white">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={fadeInAnimationConfig}
                            className="sm:p-[28px] md:p-5 mt-3 sm:text-3xl md:text-6xl"
                        >
                            We deliver customized digital products tailored to your needs
                        </motion.h1>
                        <div className="flex mt-5 w-full sm:pl-[28px] md:justify-center text-black">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                className="bg-primary w-fit rounded-[35px] px-[50px] py-[20px]"
                            >
                                Start A Project
                            </motion.div>
                        </div>
                        <div className="sm:p-[28px] md:p-5 flex md:w-full justify-end flex-row">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={fadeInAnimationConfig}
                                className="sm:text-lg md:text-[17px] mt-5 md:w-[30%] sm:pb-10 md:p-5 md:pl-0"
                            >
                                As a research and development company focused on services, we evaluate our clients needs, whether
                                they involve design materials, web applications, or embedded systems. Our dynamic and inventive
                                team is committed to addressing your requirements effectively.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default StartProject
