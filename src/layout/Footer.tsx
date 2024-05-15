import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import restaurant from "../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    return (
        <footer className="w-full relative flex flex-col items-center justify-center bg-[#495E57] pt-8 min-h-[30vh]" {...props}>
            <div className="section-width-default flex flex-col lg:flex-row items-start justify-between ">
                <img className="w-[200px] h-[260px] lg:h-[300px] rounded-md object-cover absolute right-4 lg:right-0 top-20 lg:top-auto lg:relative" src={restaurant} alt="Restaurant Food" />
                <div className="mt-10">
                    <h4 className="text-xl text-secondary-color mb-4">
                        Little
                        <br />
                        Lemon
                    </h4>
                    <ul className="flex flex-col gap-2">
                        <li>
                            {" "}
                            <HashLink to="/">Home</HashLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <HashLink to="/#">Menu</HashLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <HashLink to="/bookings">Reservations</HashLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <HashLink to="/#">Order Online</HashLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <HashLink to="/#">Login</HashLink>{" "}
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h4 className="">Contact</h4>
                    <ul>
                        <li>
                            <address>
                                Little Lemon <br />
                                Hardstrasse 10A,
                                <br />
                                Zurich 8003 <br />
                                CH
                            </address>
                        </li>
                        <li>
                            {" "}
                            <a href="tel:+551199999999" target="_blank" rel="external">
                                +41 058 590 65 40
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="mailto:paulolopesreizinho@gmail.com"
                                target="_blank"
                                rel="external"
                            >
                                contact@littlelemon.com
                            </a>{" "}
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                            {" "}
                            <a
                                href="https://www.facebook.com/paulo.reizinho"
                                target="_blank"
                                rel="external"
                            >
                                Facebook
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://www.instagram.com/paulo_reizinho"
                                target="_blank"
                                rel="external"
                            >
                                Instagram
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://www.linkedin.com/in/pauloreizinho/"
                                target="_blank"
                                rel="external"
                            >
                                LinkedIn
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-width-default flex justify-between text-[8px] lg:text-lg py-4">
                <span>Developed by <a href="https://www.pauloreizinho.com/">Paulo Reizinho</a>.</span>
                <p>© 2024 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
