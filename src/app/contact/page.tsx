import Container from '../_components/container'
import CheckServices from './check-services'
import Clientile from './clientile'
import ContactFormHero from './contact-form-hero'

function Contact() {
    return (
        <Container>
            <ContactFormHero />
            <Clientile />
            <CheckServices />
        </Container>
    )
}

export default Contact
