import Image from 'next/image'
import React from 'react'

// Define a type for the props
interface CardProps {
    service: string
    desc: string
}

// Use the defined type for the props in the component
const Card: React.FC<CardProps> = ({ service, desc }) => {
    return (
        <div className="flex flex-row items-center justify-between pl-[20px] h-[110px] bg-bkGrayLight">
            <div className="flex flex-col">
                <p className="body-small">{service}</p>
                <p className="text-bkGrayDark">{desc}</p>
            </div>
            <div className="flex w-[110px] p-[35px] bg-bkGray justify-center items-center">
                <Image src="/assets/img/icons/services_icon_1.svg" width={100} height={100} alt="" />
            </div>
        </div>
    )
}

export default Card
