import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

interface Props {}

function JoinUs(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="flex sm:flex-col md:flex-row mt-[36px] mb-[56px] p-[32px] items-center justify-between rounded-[38px] bg-[#010101]">
                <div className="flex sm:flex-col-reverse md:flex-row md:items-center">
                    <Image
                        height={60}
                        width={310}
                        alt="grid"
                        src="/assets/img/join_us_grid.png"
                        className="md:pr-5 sm:mb-[35px] md:mb-0"
                    />
                    <h1 className="text-white mb-[16px] sm:text-[19px] md:text-2xl">Join with inspiring creatives</h1>
                </div>
                <div className="bg-primary sm:w-full md:w-fit text-center md:px-[24px] py-[12px] rounded-[50px]">
                    View Openings
                </div>
            </div>
        </Container>
    )
}

export default JoinUs
