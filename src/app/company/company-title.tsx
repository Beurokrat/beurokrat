import Container from "../_components/container";

export default function CompanyTitle() {
  return (
    <>
      <section className="bg-black text-white">
        <Container>
          <div className="sm:pt-[220px] sm:pb-[100px] flex flex-col items-center justify-center">
            <h3 className="sm:pb-[30px]">OUR MISSION</h3>
            <h1 className="text-center">Inspire and empower the builder in everyone</h1>
          </div>
        </Container>
      </section>
    </>
  )
}
