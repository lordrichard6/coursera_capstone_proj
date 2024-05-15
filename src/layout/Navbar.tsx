import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import logoImg from "../assets/Logo.svg";
import basketImg from "../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    
    return (
        <nav className="nav-container hidden w-full lg:flex justify-center items-center bg-slate-50 py-4 z-20" {...props}>
            <div className="section-width-default w-full flex justify-between items-center">
                <ul className="text-xl w-full lg:flex justify-between items-center text-primary-color z-20">
                    <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
                    <li> <HashLink to="/">Home</HashLink> </li>
                    <li> <HashLink to="/#about">About</HashLink> </li>
                    <li> <HashLink to="/#menu">Menu</HashLink> </li>
                    <li> <HashLink to="/bookings">Reservations</HashLink> </li>
                    <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
                </ul>
                <div className="relative order-icon ml-10 mr-10">
                    <img className="basketIcon cursor-pointer drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition duration-300 delay-150 ease-in-out" src={basketImg} alt="Basket" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;