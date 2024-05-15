import { useState, FC, HTMLAttributes } from "react";
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

    return (
        <nav className="hidden" {...props}>
            <ul>
                <li>
                    <button aria-label="Open menu" onClick={handleMenu}>
                        <img src={menuImg} alt="Open menu" />
                    </button>
                </li>
                <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
            </ul>

            <div className={menuOpen ? "opened" : ""}>
                <button aria-label="Close menu" onClick={handleMenu}>
                    <img src={closeImg} alt="Close menu" />
                </button>
                <ul>
                    <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
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