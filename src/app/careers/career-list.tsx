import Container from '../_components/container'
import CareerItem from '../_components/career-item'

function CareerList() {
    const careerData = [
        {
            id:1,
            title: 'UI/UX Designer',
            position: 'Full Time',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers'
        },
        {
            id:2,
            title: 'Frontend Developer',
            position: 'Full Time (Hybrid)',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers'
        },
        {
            id:3,
            title: 'Backend Developer',
            position: 'Part Time (On Site)',
            description:
                'Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.',
            link: '/careers'
        },
    ]
    return (
        <section className="md:mt-[100px]">
            <Container>
                <h3 className="mb-[33px]">OPEN POSITIONS</h3>
                {careerData.map(i => (
                    <CareerItem key={i.id} title={i.title} position={i.position} desc={i.description} link={i.link} />
                ))}
            </Container>
        </section>
    )
}

export default CareerList
