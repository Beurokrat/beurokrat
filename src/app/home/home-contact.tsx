import React from 'react'
import Container from '../_components/container'
import ContactForm from '../_components/contact-form'
import Image from 'next/image'

function HomeContact() {
    return (
        <Container>
            <div className="pb-[100px]">
                <div className="pb-[100px]">
                    <h3 className="mb-[50px]">CONTACT US</h3>
                    <h1>Get in touch with beurokrat</h1>
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="w-full">
                        <ContactForm />
                    </div>
                    <div className="flex sm:hidden md:block justify-end pl-[20px]">
                        <Image
                            className=""
                            src="/assets/img/img_1.png"
                            alt="contact image"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomeContact
