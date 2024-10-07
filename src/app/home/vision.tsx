import Image from 'next/image'
import Container from '../_components/container'
import HomeCard from '../_components/home-card'

function VisionSection() {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="mt-[80px]  w-full">
                    <h3 className="mb-[50px]">OUR VISION</h3>
                    <h1 className="sm:text-[17px] md:text-3xl md:leading-[50px]">
                        Weve explored widely across regions and sectors, creating diverse outputs—goods, services, and
                        encounters—that have shown us the importance of a clear visual plan in boosting an organizations
                        prominence, trust, and funding. From 2021, we committed to planting a tree per client, showcasing our
                        dedication to sustainability.
                    </h1>
                </div>
                <div className="flex sm:flex-col md:flex-row mt-[48px] w-full gap-5">
                    <div className="flex flex-col p-[20px] md:w-1/2 sm:h-[434px] md:h-[690px]   justify-between rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg.png')] text-white">
                        <h1 className="sm:text-[20px] md:text-3xl sm:mt-[48px] md:mt-[100px] md:leading-[50px]">
                            We deliver customized digital products tailored to your needs
                        </h1>

                        <div className="flex flex-row gap-4">
                            <HomeCard />
                        </div>
                    </div>
                    <div className="flex flex-col p-[20px] md:w-1/2 sm:h-[290px] md:h-[690px] rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg2.png')] text-black">
                        <div className="mt-[35px] text-[#7C61FF] bg-[rgba(106, 68, 255, 0.12)] border border-[#7C61FF] w-fit h-fit rounded-[48px] px-[12px] py-[8px] text-[9px]">
                            <b>Content</b>
                        </div>
                        <div>
                            <h1 className="sm:text-[30px] sm:leading-[40px] md:text-3xl mt-[20px] leading-[50px]">
                                Enrich every single record
                            </h1>
                            <p className="mt-2">Global coverage across every country, in any language.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VisionSection
