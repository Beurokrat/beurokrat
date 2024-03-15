import Container from '../_components/Container'

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
            <div className="pb-[100px] flex flex-row h-[200px] justify-between">
                {clients.map((i) => (
                    <div className="w-1/3 flex flex-col justify-center">
                        <img className="md:p-10" src={i.logo} alt={i.company} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Clients
