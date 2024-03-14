import Link from 'next/link'
import React from 'react'

interface CareerItemProps {
    title: string
    position: string
    desc: string
    link: string
}

const CareerItem: React.FC<CareerItemProps> = ({ title, position, desc, link }) => {
    return (
        <div className="flex sm:flex-col md:flex-row py-10 w-full justify-between border-b-2">
            <div className="flex flex-row sm:w-full md:w-[40%] justify-between pb-[30px]">
                <div className="w-1/2 body-large">{title}</div>
                <div className="w-1/2 body-small sm:text-right md:text-left">{position}</div>
            </div>
            <div className="md:w-[50%] body-small md:px-5">{desc}</div>
            <Link href={link}>
                <button className="sm:mt-[30px] md:mt-0 py-3 px-6 border border-black sm:bg-black sm:text-white md:bg-white md:text-black rounded-full">
                    Apply
                </button>
            </Link>
        </div>
    )
}

export default CareerItem
