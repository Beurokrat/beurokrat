import Container from '../_components/Container'
import ProjectItem from '../_components/project-card'

function Projects() {
    const projects = [
        {
            id: "01",
            title: 'Vehicle-to-Vehicle communication system',
        },
        {
            id: "02",
            title: 'Variable intensity brake lighting with dynamic brake assist.',
        },
        {
            id: "03",
            title: 'Real-time proximity sensing module for disease spread tracking',
        },
        {
            id: "04",
            title: 'Beurokrat Exodus',
        },
    ]
    return (
        <Container>
            <div className="py-[100px]">
                <div className="flex sm:flex-col md:flex-row">
                    <div className="md:w-1/2 mb-[50px]">
                        <h3 className="mb-[50px]">OUR RESEARCH PROJECTS</h3>
                        <h1>Project Showcase</h1>
                    </div>
                    <div className="md:w-1/2">
                        {projects.map((i)=>(
                            <ProjectItem key={i.id} id={i.id} title={i.title} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Projects
