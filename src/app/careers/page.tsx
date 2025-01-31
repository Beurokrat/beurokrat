'use client'
import Container from '../_components/container'
import CareerBanner from './career-banner'
import CareerList from './career-list'
import CareersTitle from './title'
import { ReactLenis, useLenis } from 'lenis/dist/lenis-react'

export default function Careers() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <CareersTitle />
            <CareerList />
            <CareerBanner />
        </ReactLenis>
    )
}
