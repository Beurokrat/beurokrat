import Container from '../_components/Container'
import Card from '../_components/service-card'

function Services() {
    const design = [
        {
            id: 1,
            service: 'Branding',
            description: 'We do brand identity development',
        },
    ]
    const development = [
        {
            id: 1,
            service: 'Websites',
            description: 'We do brand identity development',
        },
        {
            id: 2,
            service: 'ECommerce',
            description: 'We do brand identity development',
        },
        {
            id: 3,
            service: 'Custom webapps',
            description: 'We do brand identity development',
        },
    ]
    const robotics = [
        {
            id: 1,
            service: 'Consumer Electronics',
            description: 'We do brand identity development',
        },
        {
            id: 2,
            service: 'Custom Projects',
            description: 'We do brand identity development',
        },
    ]
    return (
        <Container>
            <div className="py-[100px]">
                <h3 className="mb-[50px]">OUR SERVICES</h3>
                <h1>Explore our complete product suite</h1>
            </div>
            <div className="pb-[100px] flex sm:flex-col md:flex-row items-start gap-4 justify-between">
                <div className="sm:w-full md:w-1/3 gap-4 flex flex-col justify-center">
                    <h3 className="mb-[5px]">WE DO DESIGN</h3>
                    {design.map((i) => (
                        <Card service={i.service} desc={i.description} />
                    ))}
                </div>
                <div className="sm:w-full md:w-1/3 gap-4 flex flex-col justify-center">
                    <h3 className="mb-[5px]">WEB DEVELOPMENT</h3>
                    {development.map((i) => (
                        <Card service={i.service} desc={i.description} />
                    ))}
                </div>
                <div className="sm:w-full md:w-1/3 gap-4 flex flex-col justify-center">
                    <h3 className="mb-[5px]">EMBEDDED SYSTEMS DEVELOPMENT</h3>
                    {robotics.map((i) => (
                        <Card service={i.service} desc={i.description} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Services
