import React from 'react'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="link px-7 py-4 rounded-full bg-primary text-black" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
