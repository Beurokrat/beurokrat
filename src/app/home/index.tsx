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

export default function HomePage() {
    return (
        <main>
            <Hero />
            <SubHeroSection />
            <AboutBeurokrat />
            <Services />
            <StartProject />
            <VisionSection />
            <Quantifiers />
            <JoinUs />
        </main>
    )
}
