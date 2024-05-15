import { useState, useRef, useEffect, FC, HTMLAttributes, MutableRefObject } from "react";
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Mobilenav from './Mobilenav'
import Footer from "./Footer";

const Layout: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
    const headerRef: MutableRefObject<HTMLElement | null> = useRef(null);
    const [_, setLastScrollPosition] = useState(window.pageYOffset || document.documentElement.scrollTop);

    const handleScroll = () => {
        const header = headerRef.current;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        setLastScrollPosition((prevState) => {
            if (!header) return scrollPosition > 0 ? scrollPosition : 0;

            if (scrollPosition > prevState) {
                header.style.transform = "translateY(-200px)";
            } else {
                header.style.transform = "translateY(0)";
            };
            return scrollPosition > 0 ? scrollPosition : 0;
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div {...props} className='w-screen h-full flex flex-col'>
            <header ref={headerRef} className='w-full flex items-center justify-center fixed top-0 z-10'>
                <Navbar />
                <Mobilenav />
            </header>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout