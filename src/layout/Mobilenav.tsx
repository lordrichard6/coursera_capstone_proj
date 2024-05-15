import { useState, FC, HTMLAttributes, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logoImg from "../assets/Logo.svg";
import menuImg from "../assets/icon _hamburger_menu.svg";
import basketImg from "../assets/basket.svg";
import closeImg from "../assets/close.svg";

const Mobilenav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(prevValue => !prevValue);
    };

    const handleScroll = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <nav className="lg:hidden w-full h-[80px] flex justify-center items-center bg-slate-50 relative" {...props}>
            <ul className="w-full h-full flex justify-between items-center px-4">
                <li>
                    <button className="bg-slate-50 p-0" aria-label="Open menu" onClick={handleMenu}>
                        <img className="h-[40px]" src={menuImg} alt="Open menu" />
                    </button>
                </li>
                <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
            </ul>

            <div className={`bg-slate-50 p-4 absolute top-0 transition-all duration-500 delay-150 ease-in-out rounded-br-xl z-50 ${menuOpen ? "left-0" : "-left-full"}`}>
                <button className="bg-slate-50 p-0 mb-10" aria-label="Close menu" onClick={handleMenu}>
                    <img className="h-[40px]" src={closeImg} alt="Close menu" />
                </button>
                <ul className="text-primary-color flex flex-col gap-4 text-xl">
                    <li className="mb-6"> <img className="h-[50px]" src={logoImg} alt="Little Lemon Logo" /> </li>
                    <li> <HashLink to="/">Home</HashLink> </li>
                    <li> <HashLink to="#about">About</HashLink> </li>
                    <li> <HashLink to="#menu">Menu</HashLink> </li>
                    <li> <HashLink to="/bookings">Reservations</HashLink> </li>
                    <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Mobilenav;