import Container from '../_components/container'

function About() {
    return (
        <Container>
            <div className="flex flex-col md:flex-row py-[100px]">
                <div className="flex sm:w-full md:w-1/2 flex-col">
                    <h3>ABOUT BEUROKRAT</h3>
                    <h1 className="py-[50px]">Who we are</h1>
                </div>
                <div className="sm:w-full md:w-1/2">
                    <p>
                        Beurokrat is an early-stage startup company with an efficient management team, design team and
                        development team. We gained momentum with our strategic planning, methodological workflow and personalised
                        service. Our primary objective is to simplify tech and make it easily accessible to people. Since our
                        inception in July 2020, Beurokrat BMS has helped businesses elevate their value by providing customised
                        software solutions, product design and consultancy services. We provide technical solutions in the form of
                        software / hardware in order to organize the workflow and provide tools for easy and efficient management.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About
