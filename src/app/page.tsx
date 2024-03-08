import AboutBeurokrat from "./_components/About-Beurokrat";
import AboutCompany from "./_components/About-company";
import Hero from "./_components/Hero";
import Service from "./_components/services-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutCompany />
      <Service />
      <AboutBeurokrat />
    </main>
  );
}
