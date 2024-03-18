import Image from 'next/image'
import Container from '../_components/container'

function Clients() {
    const clients = [
        {
            id: 1,
            company: 'Nerdforsch Labs Pvt. Ltd.',
            logo: '/assets/img/clients/client_1.svg',
            description: 'Nerdforsch Labs Pvt. Ltd., India',
        },
        {
            id: 2,
            company: 'Gee Bee Palace',
            logo: '/assets/img/clients/client_2.svg',
            description: 'Gee Bee Palace Pvt. Ltd. , India',
        },
        {
            id: 3,
            company: 'KEMCO AGNICE LLC',
            logo: '/assets/img/clients/client_3.svg',
            description: 'KEMCO AGNICE LLC, Qatar',
        },
    ]
    return (
        <Container>
            <div className="py-[100px]">
                <h3 className='mb-[50px]'>OUR CLIENTS</h3>
                <h1>Empowered partnerships</h1>
            </div>
            <div className="flex sm:flex-col md:flex-row justify-between">
                {clients.map((i) => (
                    <div key={i.id} className="md:w-1/3  flex justify-center">
                        <Image className="sm:w-1/2 md:w-3/4 sm:p-5" src={i.logo} alt={i.company} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Clients
