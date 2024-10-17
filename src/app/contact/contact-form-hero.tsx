import React from 'react'
import Image from 'next/image'
import ContactForm from '../_components/contact-form'

interface Props {}

function ContactFormHero(props: Props) {
    return (
        <div className="flex flex-row mt-[150px] w-full">
            <div className="flex md:flex-row sm:flex-col-reverse w-full justify-between">
                <div className="flex flex-col sm:justify-end md:justify-between md:w-1/2 mr-4 h-full aspect-square p-[18px] rounded-[24px] bg-cover bg-center bg-[url('/assets/img/contact_hero.png')]">
                    <div className="sm:hidden md:flex flex-row items-center w-full justify-end">
                        <div className="flex flex-row px-[9px] py-[6px] bg-[#CFCFCF7A] rounded-[32px]">
                            <Image width={15} height={15} alt="thunder" src="/assets/img/icons/ic_contact_thunder.svg" />
                        </div>
                        <div className="pl-2 text-white text-[18px]">Quality</div>
                    </div>
                    <div className="flex flex-row justify-between items-end ">
                        <div className="sm:hidden md:flex flex-row items-center w-fit">
                            <div className="flex flex-row px-[9px] py-[6px] bg-[#CFCFCF7A] rounded-[32px]">
                                <Image width={15} height={15} alt="thunder" src="/assets/img/icons/ic_contact_thunder.svg" />
                            </div>
                            <div className="pl-2 text-white text-[18px]">Speed</div>
                        </div>
                        <div className="flex flex-col text-white p-[16px] rounded-[14px] w-[200px] h-[160px] bg-[#000000] bg-opacity-[0.40] backdrop-blur-xl">
                            <div className="bg-black rounded-[7px] p-[9px] w-fit mb-[13px]">
                                <Image width={20} height={20} alt="telescope" src="/assets/img/icons/ic_contact_telescope.svg" />
                            </div>
                            <p>Let&apos;s work together to create some amazing results</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 my-2 ml-4">
                    <h1 className="sm:text-[40px] md:text-[55px] mb-[16px]">Start a Project</h1>
                    <p className="w-[90%] mb-[40px]">
                        Ready to explore how our expertise can help your business? Fill out the form below to schedule a
                        consultation or simply drop us a line
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactFormHero
