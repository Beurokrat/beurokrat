'use client'
import React from 'react'
import Container from '../_components/container'
import { useRouter } from 'next/navigation' // Import useRouter

const ContactUs = () => {
    const router = useRouter() // Initialize useRouter

    const navigateToContact = () => {
        router.push('/contact') // Navigate to the "Contact Us" page
    }

    return (
        <Container>
            <div className="flex flex-col md:items-center md:justify-center mb-[70px] py-[80px] md:px-[50px] sm:px-[22px] w-full rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_contact_bg_image.png')]">
                <div className="flex flex-col md:items-center md:justify-center text-white md:w-2/3">
                    <h1 className="p-1 mt-3 md:text-center sm:text-[34px] md:text-[98px] md:leading-[104px]">
                        Have an idea? Let’s talk.{' '}
                    </h1>
                    <p className="sm:text-lg md:text-[22px] md:text-center mt-[16px] sm:pb-10 md:p-5 md:pl-0">
                        Concept to final result. We create solutions that are bold and forward-looking.
                    </p>
                    <div
                        className="mt-[16px] bg-primary text-black sm:w-full md:w-fit sm:text-center rounded-[35px] px-[50px] py-[20px] cursor-pointer"
                        onClick={navigateToContact} // Add onClick handler
                    >
                        Contact Us
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactUs
