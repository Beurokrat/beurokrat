import Clients from './clients'
import Projects from './projects'
import Services from '../home/services'
import WorksTitle from './work-title'

function Work() {
    return (
        <>
            <WorksTitle />
            <Clients />
            <Services />
            <section className="w-full bg-primary">
                <Projects />
            </section>
        </>
    )
}

export default Work
