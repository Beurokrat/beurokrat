import Image from 'next/image'
import React from 'react'

interface Props {}

function HomeCardEdge(props: Props) {
    const {} = props

    return (
        <div
            className="flex flex-col md:w-[50%] rounded-[32px] p-[28px] text-white"
            style={{ background: 'linear-gradient(180deg, #242325 0%, #171619 100%)' }}
        >
            <div className="mb-[12px] flex flex-row w-fit ">
                {/* <Image
                    width={32}
                    height={32}
                    className="rounded-[25%] pr-[12px] w-[50px]"
                    src="/assets/img/icons/vision_dp.png"
                    alt="vision_dp"
                /> */}
                <div className="bg-[#1BC47D] w-fit h-fit rounded-[48px] px-[12px] py-[8px] text-[9px]">
                    <b>EDGE Computing</b>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="w-full text-[15px]">Speed and Intelligence at the Source.</h3>
                <p className="py-3 text-[#A9A9A9] text-[13px]">
                    We integrate AI into low-power devices, unlocking new possibilities.
                </p>
            </div>
            {/* <div className="bg-[#2B2B2B] w-fit h-fit rounded-[48px] px-[12px] py-[8px] text-[9px]">
                <b>Content</b>
            </div> */}
        </div>
    )
}

export default HomeCardEdge
