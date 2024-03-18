import Link from 'next/link'
import Container from '../_components/Container'
import ContactForm from '../_components/contact-form'

function Contact() {
    return (
        <Container>
            <div className="sm:pt-[200px] sm:pb-[100px] flex flex-col">
                <h3 className="sm:pb-[30px]">CONTACT US</h3>
                <h1>Get in touch with beurokrat</h1>
            </div>
            <div className="sm:pb-[100px] flex md:flex-row sm:flex-col w-full justify-between">
                <div className="md:w-2/3 md:border-r-2">
                    <ContactForm />
                </div>
                <div className="sm:mt-[70px] md:mt-0 md:pl-5 flex md:w-1/3 gap-[30px] flex-col">
                    <div className="flex flex-row">
                        <img src="/assets/img/icons/ic_contact_address.png" className="p-1 w-[30px] h-[30px]" alt="" />
                        <p className="pl-5">
                            UB Business Centre,
                            <br /> Ernakulam, India 682021
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <img src="/assets/img/icons/ic_contact_mail.png" className="p-1 w-[30px] h-[30px]" alt="" />
                        <Link href="mailto:beurokrat@gmail.com" className="pl-5">
                            beurokrat@gmail.com
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <img src="/assets/img/icons/ic_contact_phone.png" className="p-1 w-[30px] h-[30px]" alt="" />
                        <p>+91 8113995643</p>
                    </div>
                    <div className="flex flex-row">
                        <img src="/assets/img/icons/ic_contact_phone.png" className="p-1 w-[30px] h-[30px]" alt="" />
                        <p>+971 56 929 3266</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact
