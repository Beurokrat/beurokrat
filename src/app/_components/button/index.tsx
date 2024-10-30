import Image from 'next/image'
import React from 'react'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="link px-7 py-4 rounded-[10px] bg-primary" onClick={onClick}>
            <Image alt="arrow" width={26} height={26} src="/assets/img/icons/ic_bk_research.svg" />
        </button>
    )
}

export default Button
