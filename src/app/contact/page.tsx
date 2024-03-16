import Container from '../_components/Container'
import ContactForm from '../_components/contact-form'

function Contact() {
    return (
        <Container>
            <div className="sm:pt-[200px] sm:pb-[100px] flex flex-col">
                <h3 className="sm:pb-[30px]">CONTACT US</h3>
                <h1>Get in touch with beurokrat</h1>
            </div>
            <div className="sm:pb-[100px] flex flex-row w-full justify-between">
                    <div className="w-1/2 border-r-2">
                        <ContactForm />
                    </div>
                    <div className="flex w-1/2">
                       
                    </div>
                </div>
        </Container>
    )
}

export default Contact
