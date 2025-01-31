import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CareerItemProps {
    title: string
    position: string
    location: string
    desc: string
    link: string
}

const CareerItem: React.FC<CareerItemProps> = ({ title, position, location, desc, link }) => {
    return (
        <>
            <div className="flex flex-row w-full mt-[15px] ">
                <div className="p-4 sm:hidden md:block">
                    <Image height={18} width={18} alt="careers bullet icon" src={'/assets/img/icons/ic_careers_bullet.png'} />
                </div>
                <div className="flex flex-col border-b border-[#FFFFFF24] md:mr-[100px]">
                    <h1 className="text-white text-[30px]">{title}</h1>
                    <div className="flex flex-row my-[15px]">
                        <h2 className="text-[#D8D8D8] text-[17px] border-r border-[#ADE42C6B] pr-2 w-fit">{position}</h2>
                        <h2 className="text-[#D8D8D8] text-[17px] pl-2">{location}</h2>
                    </div>
                    <p className="text-[14px] leading-[28px] text-[#D8D8D8] mb-[20px]">{desc}</p>
                    <div className="bg-primary mb-[20px] sm:w-fit text-center text-[14px] font-bold px-[14px] py-[8px] rounded-[50px]">
                        Apply Now
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerItem
