'use client'
import Container from '../_components/container'
import AboutContent from './about-content'
import AboutHero from './about-hero'
import { ReactLenis, useLenis } from 'lenis/dist/lenis-react'
function AboutPage() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <AboutHero />
            <AboutContent />
        </ReactLenis>
    )
}

export default AboutPage
