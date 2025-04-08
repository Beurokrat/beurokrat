import React from "react";
import Link from "next/link";
import Image from "next/image";

import CloseIcon from "../../../../public/assets/img/close-icon-mobile.svg";
import RightArrow from "../../../../public/assets/img/right-arrow-mobile-menu.svg"


// Define the type for the props
interface MobileMenuProps {
    closeMobileMenu: () => void;
    overlayAction: boolean;
    setOverlayAction: (value: boolean) => void;
}

// Define the menu items
const menuItems = [
    { label: "Work", href: "/work" },
    { label: "Company", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact", isButton: true }, // Special case for the button
];

// Use the defined type in your component
const MobileMenu: React.FC<MobileMenuProps> = ({ overlayAction, setOverlayAction, closeMobileMenu }) => {
    return (
        <div
            style={{
                zIndex: 100,
                position: "absolute",
                // top: "-50px",
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "#303030",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            className="md:hidden"
        >
            <div className="absolute top-[100px] right-8 cursor-pointer zIndex-101" onClick={closeMobileMenu}>
            <Image alt="close-image" width={20} height={20} src={CloseIcon} />
            </div>
             

            <main className="top-50 bottom-0 flex flex-col items-center justify-start w-[80%] h-[400px] box-border gap-[5px] text-left text-base p-0 pt-10">
                {menuItems.map((item, index) => (
                    <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                        key={index}
                        style={{borderStyle:"outset",borderColor:'rgba(255, 255, 255, 0.03)'}}
                        className={`self-stretch flex flex-row items-center py-[16px] border-b-[1px] ${
                            item.isButton ? "mt-[50px] px-5 py-[16px] bg-primary rounded-[35px] max-w-[182px] justify-center" : "justify-between"
                        }`}
                    >
                        {item.isButton ? (
                            <div
                                className="cursor-pointer flex flex-row flex-wrap items-center justify-center hover:bg-greenyellow "
                            >
                                <div className="relative text-center leading-[21px] font-cta-button-text-title-case-mob text-center" style={{fontSize:"15px",color:"#0A0200",fontWeight:"600"}}>
                                    {item.label}
                                </div>
                            </div>
                        ) : (
                            <>
                                <div
                                    className="relative leading-[21px]"
                                    style={{ color: "#ffffff", textDecoration: "none" ,fontSize:"20px"}}
                                >
                                    {item.label}
                                </div>
                                <Image alt="close-image" width={11} height={20} src={RightArrow} />
                            </>
                        )}
                    </Link>
                ))}
            </main>
        </div>
    );
};

export default MobileMenu;
