import Image from 'next/image'
import Container from '../_components/container'
import HomeCard from '../_components/home-card'

function VisionSection() {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="mt-[80px]  w-full">
                    <h3 className="mb-[50px]">OUR VISION</h3>
                    <h1 className="md:text-3xl leading-[50px]">
                        We've explored widely across regions and sectors, creating diverse outputs—goods, services, and
                        encounters—that have shown us the importance of a clear visual plan in boosting an organization's
                        prominence, trust, and funding. From 2021, we committed to planting a tree per client, showcasing our
                        dedication to sustainability.
                    </h1>
                </div>
                <div className="flex flex-row mt-[48px] w-full gap-5">
                    <div className="flex flex-col p-[20px] w-1/2 h-[740px] mr-[23px]  justify-between rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg.png')] text-white">
                        <h1 className="text-3xl mt-[100px] leading-[50px]">
                            We deliver customized digital products tailored to your needs
                        </h1>

                        <div className="flex flex-row gap-4">
                            <HomeCard />
                            <HomeCard />
                        </div>
                    </div>
                    <div className="flex flex-col p-[20px] w-1/2 md:ml-[23px] h-[740px] rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg2.png')] text-black">
                        <div className="mt-[35px] text-[#7C61FF] bg-[rgba(106, 68, 255, 0.12)] border border-[#7C61FF] w-fit rounded-[39px] px-2 py-1 text-base">
                            <b>Content</b>
                        </div>
                        <div>
                            <h1 className="text-3xl mt-[20px] leading-[50px]">Enrich every single record</h1>
                            <p className="mt-2">Global coverage across every country, in any language.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VisionSection