import React from 'react'
import Container from '../_components/container'
import Image from 'next/image'

interface Props {}

function Recognition(props: Props) {
    const recognition = [
        {
            key: 1,
            src: '/assets/img/hp_recognition_1.png',
            height: 101,
            width: 202,
        },
        {
            key: 2,
            src: '/assets/img/hp_recognition_2.png',
            height: 99,
            width: 210,
        },
        {
            key: 3,
            src: '/assets/img/hp_recognition_3.png',
            height: 93,
            width: 186,
        },
        {
            key: 4,
            src: '/assets/img/hp_recognition_4.png',
            height: 90,
            width: 180,
        },
        {
            key: 5,
            src: '/assets/img/hp_recognition_5.png',
            height: 192,
            width: 223,
        },
    ]

    return (
        <Container>
            <div className="flex flex-col w-full">
                <h1 className="sm:text-[32px] md:text-[60px] sm:my-[18px] md:mb-[26px]">Recognised by</h1>
                <div className="flex flex-row w-full justify-between mb-[26px] overflow-auto">
                    {recognition.map((item) => (
                        <Image
                            key={item.key}
                            alt="recognition"
                            className="sm:h-[100px] md:h-[120px] w-auto p-3"
                            height={item.height}
                            width={item.width}
                            src={item.src}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Recognition
