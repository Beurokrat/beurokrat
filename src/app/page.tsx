import Container from "./_components/Container";
import AboutBeurokrat from "./_components/about-beurokrat";
import AboutCompany from "./_components/about-company";
import Hero from "./_components/hero";
import Service from "./_components/services-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
      <AboutCompany />
      </Container>
      <section className='w-full bg-black text-white flex flex-col mt-24 md:h-[700px]'>
      <Service />
      </section>
      <AboutBeurokrat />
    </main>
  );
}
