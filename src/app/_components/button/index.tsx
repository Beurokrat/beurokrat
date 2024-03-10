import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="px-7 py-3 rounded-full bg-primary text-black "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
