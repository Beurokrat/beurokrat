'use client'
import Container from '../_components/container'
import CheckServices from './check-services'
import Clientile from './clientile'
import ContactFormHero from './contact-form-hero'
import { ReactLenis, useLenis } from 'lenis/dist/lenis-react'

function Contact() {
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Container>
                <ContactFormHero />
                <Clientile />
                <CheckServices />
            </Container>
        </ReactLenis>
    )
}

export default Contact
