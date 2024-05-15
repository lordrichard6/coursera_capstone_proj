import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import logoImg from "../assets/Logo.svg";
import basketImg from "../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    return (
        <nav className="w-full" {...props}>
            <ul className="w-full flex justify-between items-center">
                <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
                <li> <HashLink to="/">Home</HashLink> </li>
                <li> <HashLink to="/#about">About</HashLink> </li>
                <li> <HashLink to="/#menu">Menu</HashLink> </li>
                <li> <HashLink to="/bookings">Reservations</HashLink> </li>
                <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
                <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
            </ul>
        </nav>
    );
};

export default Nav;