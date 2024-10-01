import Services from '../work/services'
import AboutBeurokrat from './about-beurokrat'
import AboutCompany from './company'
import Hero from './hero'
import HomeContact from './home-contact'
import Service from './services-section'
import SubHeroSection from './sub-hero-section'

export default function HomePage() {
    return (
        <main>
            <Hero />
            <SubHeroSection />
            <AboutBeurokrat />
            <Services />
            <AboutCompany />
            <section className="w-full bg-black text-white flex flex-col mt-24 md:h-[700px]">
                <Service />
            </section>

            <HomeContact />
        </main>
    )
}
