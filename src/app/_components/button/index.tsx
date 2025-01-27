import React from 'react'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="link text-[14px] ml-[15px] mr-[5px] px-[17px] my-[11px] font-semibold py-[11px] rounded-[25px] bg-primary text-black"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
