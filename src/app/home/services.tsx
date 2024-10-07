import Image from 'next/image'
import Container from '../_components/container'
import Card from '../_components/service-card'

function Services() {
    const servicesInfo = [
        {
            title: 'Web Development',
            description: 'Crafting digital experiences that are both beautiful and practical.',
            subServices: ['Website Development', 'ECommerce', 'Custom Web Application'],
        },
        {
            title: 'Branding',
            description:
                'We help evolve brand identities, be it a new brand, guiding its evolution, or giving it a visual uplift.',
            subServices: ['Visual Identity', 'Marketing Material', 'Brand Guidelines'],
        },
        {
            title: 'Embedded Systems Development',
            description: 'We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful. ',
            subServices: ['Consumer Electronics', 'Research Projects', 'Innovation Integration'],
        },
    ]
    return (
        <Container>
            <div className="sm:hidden mt-[80px] px-[50px] w-[70%]">
                <h3 className="mb-[50px]">OUR SERVICES</h3>
                <h1 className="md:text-6xl">We deliver customized digital products tailored to your needs</h1>
            </div>
            <div className="w-full sm:hidden  mt-[60px] flex justify-end">
                <div className="w-fit grid grid-cols-2 gap-4">
                    {servicesInfo.map((item, index) => (
                        <>
                            <div
                                key={index}
                                className="flex m-2 rounded-[20px] flex-col justify-between p-10 w-[455px] h-[433px] text-white bg-[#292929]"
                            >
                                <div>
                                    <h2 className="pb-[8px]">{item.title}</h2>
                                    <p className="pb-[8px]">{item.description}</p>
                                </div>
                                <div>
                                    <div className="w-full border-b border-gray-300 mb-[16px]">STRATEGY SERVICES</div>
                                    {item.subServices.map((i, index) => (
                                        <div className="flex gap-4" key={index}>
                                            <Image
                                                alt="service-image"
                                                width={15}
                                                height={15}
                                                src="/assets/img/icons/ic_circle.svg"
                                            />
                                            {i}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="flex items-end m-2 rounded-2xl p-10 w-[455px] h-[433px] bg-[url('/assets/img/homepage_services_bg.png')]">
                        <div className="bg-primary rounded-[35px] px-[50px] py-[20px]">Check More Services</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services
