'use client'
import Image from 'next/image'
import React from 'react'

function Clientile() {
    const clients = [
        {
            key: 1,
            alt: 'gee bee palace',
            src: '/assets/img/client_1.png',
            width: 180,
            height: 90,
        },
        {
            key: 2,
            alt: 'Nerdforsch',
            src: '/assets/img/client_2.png',
            width: 180,
            height: 55,
        },
        {
            key: 3,
            alt: 'Kemco-Agnice',
            src: '/assets/img/client_3.png',
            width: 180,
            height: 55,
        },
    ]
    return (
        <div className="flex flex-row items-center justify-between w-full my-[80px]">
            <h2 className="text-[30px] text-[#B0B0B0]">Working worlwide for →</h2>
            {clients.map((item) => (
                <div key={item.key} className="p-[20px]">
                    <Image width={item.width} height={item.height} alt={item.alt} src={item.src} />
                </div>
            ))}
        </div>
    )
}

export default Clientile
