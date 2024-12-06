"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar flex flex-wrap items-center justify-between px-4 py-4 lg:px-16 shadow-md bg-white">
            {/* Logo */}
            <div className="logo text-2xl font-bold">Exclusive</div>


            {/* Icons */}
            <div className="icons flex items-center space-x-4 order-last">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>

                {/* Hamburger Menu for Small Screens */}
                <button
                    className="block md:hidden text-xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav
                className={`${menuOpen ? "block" : "hidden"
                    } w-full md:flex md:space-x-8 md:w-auto bg-white absolute md:static top-14 left-0 md:top-auto shadow-md md:shadow-none z-10`}
            >
                <a
                    href="#"
                    className="block md:inline-block text-lg py-2 px-4 md:py-0 hover:underline"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="block md:inline-block text-lg py-2 px-4 md:py-0 hover:underline"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="block md:inline-block text-lg py-2 px-4 md:py-0 hover:underline"
                >
                    About
                </a>
                <a
                    href="#"
                    className="block md:inline-block text-lg py-2 px-4 md:py-0 hover:underline"
                >
                    Sign Up
                </a>

                {/* Search Bar */}
                <div className="relative block md:inline-block md:ml-auto my-2 md:mt-0">
                    <div className="relative w-[300px] max-w-[400px] mx-auto">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="border border-gray-200 rounded-md pl-4 pr-10 py-2 text-sm w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-500"
                        />
                        <CiSearch
                            size={20}
                            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 pointer-events-none"
                        />
                    </div>
                </div>
            </nav>



            {/* Search Bar */}
            <div className="relative hidden lg:block">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="border border-gray-200 rounded-md pl-4 pr-12 py-2 text-sm w-[300px] max-w-[400px] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-500"
                />
                <svg
                    width="24"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </div>

        </div>
    );
};

export default navbar;