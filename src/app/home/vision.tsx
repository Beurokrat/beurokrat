import Image from 'next/image'
import Container from '../_components/container'
import HomeCardGenAI from '../_components/home-card-gen-ai'
import HomeCardEdge from '../_components/home-card-edge'

function VisionSection() {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="mt-[80px]  sm:w-full md:w-[90%]">
                    <h3 className="mb-[50px]">OUR VISION</h3>
                    <h1 className="sm:text-[17px] md:text-3xl md:leading-[50px]">
                        Our products are crafted with purpose, weaving technology and art to connect digital dimensions to empower
                        users. At our core is a vision to care, inspire, and create a future where every touchpoint reflects our
                        commitment to those we serve.
                    </h1>
                </div>
                <div className="flex sm:flex-col md:flex-row mt-[100px] w-full gap-5">
                    <div className="flex flex-col p-[30px] md:w-1/2 sm:h-fit md:h-[690px]  justify-between rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg.png')] text-white">
                        <p className="sm:w-full md:w-[90%] sm:text-[20px] md:text-[35px] sm:mt-[48px] md:mt-[100px] md:leading-[60px]">
                            Insights, unlocked through the power of applied intelligence.
                        </p>

                        <div className="mt-[30px] flex sm:flex-col md:flex-row gap-4">
                            <HomeCardGenAI />
                            <HomeCardEdge />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-[20px] md:w-1/2 sm:h-fit md:h-[690px] rounded-[38px] bg-cover bg-center bg-[url('/assets/img/homepage_vision_bg2.png')] text-black">
                        <div>
                            <div className="mt-[35px] bg-[#7b61ff2b] text-[#7C61FF] bg-[rgba(106, 68, 255, 0.12)] border border-[#7C61FF] w-fit h-fit rounded-[48px] px-[12px] py-[8px] text-[11px]">
                                <b>Web3</b>
                            </div>
                            <h1 className="sm:text-[30px] sm:leading-[40px] md:text-3xl mt-[20px] leading-[50px]">
                                Freedom, Privacy, Ownership.
                            </h1>
                        </div>
                        <p className="my-[40px]">
                            Web3 and NFTs transforms the digital landscape, offering decentralized ownership, secure transactions,
                            and endless possibilities for creators, collectors, and businesses to thrive in a borderless economy.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VisionSection
