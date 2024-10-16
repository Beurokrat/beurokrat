import Image from 'next/image'
import React from 'react'

function CheckServices() {
    return (
        <div className="my-[80px] py-[30px] md:px-[50px] sm:px-[22px] w-full rounded-[38px] bg-cover bg-center bg-[url('/assets/animated/contact_animated_section.gif')]">
            <div className="flex flex-col ">
                <div className="rounded-xl md:py-5 md:w-[60%] text-left text-black">
                    <p className="text-white p-1 mt-3 sm:text-[23px] md:text-[53px] md:leading-[60px]">
                        Let&apos;s start a conversation and explore how we can bring your vision to life.
                    </p>
                </div>
                <div className="fade-in-button-about md:py-5 flex flex-row">
                    <div className="bg-primary rounded-[35px] px-[50px] py-[20px]">Check Our Services</div>
                </div>
                <Image
                    className="md:mt-[100px]"
                    alt="beurokrat"
                    width={64}
                    height={64}
                    src="/assets/img/icons/ic_bk_research.svg"
                />
            </div>
        </div>
    )
}

export default CheckServices
