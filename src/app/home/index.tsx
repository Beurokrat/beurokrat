'use client'
import Services from './services'
import AboutBeurokrat from './about-beurokrat'
import AboutCompany from './company'
import Hero from './hero'
import HomeContact from './home-contact'
import SubHeroSection from './sub-hero-section'
import StartProject from './start-project'
import VisionSection from './vision'
import Quantifiers from './quantifiers'
import JoinUs from './join-us'
import ContactUs from './contact-cta'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/dist/lenis-react'

export default function HomePage() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Hero />
            <SubHeroSection />
            <AboutBeurokrat />
            <Services />
            <StartProject />
            <VisionSection />
            <Quantifiers />
            <JoinUs />
            <ContactUs />
        </ReactLenis>
    )
}
