import React from "react";

const NavLinks = ({ width }) => {
  const containerWidth = width ? `${width}rem` : `${width}rem`;
  
  return (
    <div
      className={`lg:absolute top-full left-0 bg-white border-[1px] border-solid border-gray shadow-lg mt-6`}
      style={{ width: containerWidth }}
    >
      <div className="p-5 relative">
        <header className="bg-primary text-mini text-bk-black font-link p-5 relative">
          Explore our company
          <div className="absolute right-0 top-0">
            <span className="bg-black w-16 h-16  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </header>
        <div className="pt-5 pl-5 pr-5 text-[#121212]">
          <div className="pb-2 pt-2">About</div>
          <div className="pb-2 pt-2">Team</div>
          <div className="pb-2 pt-2">Recognition</div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
