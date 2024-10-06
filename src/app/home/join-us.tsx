import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

interface Props {}

function JoinUs(props: Props) {
    const {} = props

    return (
        <Container>
            <div className="flex flex-row mt-[36px] mb-[56px] p-[32px] items-center justify-between rounded-[38px] bg-[#010101]">
                <div className="flex flex-row items-center">
                    <Image height={60} width={310} alt="grid" src="/assets/img/join_us_grid.png" className="pr-5" />
                    <h1 className="text-white text-2xl">Join with inspiring creatives</h1>
                </div>
                <div className="bg-primary px-[24px] py-[12px] rounded-[50px]">View Openings</div>
            </div>
        </Container>
    )
}

export default JoinUs
