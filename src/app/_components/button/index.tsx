import React from 'react'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="link text-[14px] mx-[15px] px-[13px] my-[11px] py-[8px] rounded-full bg-primary text-black"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
