import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import restaurant from "../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    return (
        <footer className="w-full flex flex-col items-center justify-center bg-[#495E57] pt-8" {...props}>
            <div className="section-width-default flex items-start justify-between ">
                <img className="w-[200px] h-[300px] object-cover" src={restaurant} alt="Restaurant Food" />
                <div className="mt-10">
                    <h4>
                        Little
                        <br />
                        Lemon
                    </h4>
                    <ul>
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
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <address>
                                Little Lemon <br />
                                331 E Chicago <br />
                                LaSalle Street Chicago,
                                <br />
                                Illinois 60602 <br />
                                USA
                            </address>
                        </li>
                        <li>
                            {" "}
                            <a href="tel:+551199999999" target="_blank" rel="external">
                                +55 11 9999-9999
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="mailto:contact@littlelemon.com"
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
                                href="https://www.facebook.com/littlelemon"
                                target="_blank"
                                rel="external"
                            >
                                Facebook
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://www.instagram.com/littlelemon"
                                target="_blank"
                                rel="external"
                            >
                                Instagram
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://twitter.com/littlelemon"
                                target="_blank"
                                rel="external"
                            >
                                Twitter
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-width-default flex justify-between">
                <span>Developed by Paulo Reizinho.</span>
                <p>© 2024 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
