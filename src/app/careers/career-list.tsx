import Container from '../_components/container'
import CareerItem from '../_components/career-item'
import Image from 'next/image'

function CareerList() {
    const careerData = [
        {
            id: 1,
            title: 'UI/UX Designer',
            position: 'Full Time',
            location: 'Remote',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers',
        },
        {
            id: 2,
            title: 'Frontend Developer',
            position: 'Full Time',
            location: 'Remote',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers',
        },
        {
            id: 3,
            title: 'Backend Developer',
            position: 'Contract',
            location: 'Remote',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers',
        },
    ]
    return (
        <section className="my-[50px]">
            <Container>
                <div className="flex md:flex-row sm:flex-col items-start bg-[#121212] rounded-[38px] py-[40px] px-[28px]">
                    <Image
                        width={286}
                        height={144}
                        className="sm:hidden md:flex"
                        alt="Beurokrat is hiring now"
                        src={'/assets/img/careers_hiring.png'}
                    />
                    <Image
                        width={319}
                        height={63}
                        className="md:hidden sm:flex"
                        alt="Beurokrat is hiring now"
                        src={'/assets/img/careers_hiring_sm.png'}
                    />
                    <div className="flex flex-col md:ml-[80px]">
                        {careerData.map((i) => (
                            <CareerItem
                                key={i.id}
                                title={i.title}
                                position={i.position}
                                location={i.location}
                                desc={i.description}
                                link={i.link}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CareerList
