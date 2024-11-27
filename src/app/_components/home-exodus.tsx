import Image from 'next/image'
import React from 'react'

interface Props {}

function Exodus(props: Props) {
    const {} = props

    return (
        <>
            <div className="flex rounded-[38px] flex-col text-white justify-between p-[30px] bg-cover bg-center bg-[url('/assets/img/home_work_exodus.png')] ">
                <div className="flex flex-row items-center justify-between md:my-[20px]">
                    <h2 className="sm:text-[25px] md:text-[38px]">
                        <b>Beurokrat Exodus</b>
                    </h2>
                    <Image alt="arrow" width={55} height={55} src="/assets/img/icons/ic_right_arrow.png" />
                </div>
                <div className="mt-[35px] text-[13px] mb-[40px]">
                    An assistive technology for rehabilitating patients with post-stroke paralysis, aimed at improving motor
                    function and helping patients regain independence during recovery.
                </div>
                <div className="flex flex-row  items-center bg-[#FFFFFF40] w-fit rounded-[29px] pr-[19px] my-[15px]">
                    <div className="rounded-[45px] bg-[#CFCFCF7A] p-[9px] ">
                        <Image alt="arrow" width={26} height={26} src="/assets/img/icons/ic_bk_research.svg" />
                    </div>
                    <span className="text-white text-[11px] pl-[4px]">Research</span>
                </div>
            </div>
        </>
    )
}

export default Exodus
