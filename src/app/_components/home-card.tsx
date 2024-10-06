import Image from 'next/image'
import React from 'react'

interface Props {}

function HomeCard(props: Props) {
    const {} = props

    return (
        <div
            className="flex flex-col rounded-[32px] p-[28px] text-white"
            style={{ background: 'linear-gradient(180deg, #242325 0%, #171619 100%)' }}
        >
            <div className="mb-[12px] flex flex-row w-fit ">
                <Image
                    width={32}
                    height={32}
                    className="rounded-[25%] pr-[12px] w-[50px]"
                    src="/assets/img/icons/vision_dp.png"
                    alt="vision_dp"
                />
                <div className="bg-[#7C61FF] w-fit rounded-[48px] px-4 py-2 text-base">
                    <b>Content</b>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="w-[65%] text-lg">Create & Set File Thumbnail</h3>
                <p className="py-3 text-[#A9A9A9]">This automation quickly creates and sets a file's thumbnail…</p>
            </div>
            <div className="bg-[#2B2B2B] w-fit rounded-[48px] px-4 py-2 text-base">
                <b>Content</b>
            </div>
        </div>
    )
}

export default HomeCard
