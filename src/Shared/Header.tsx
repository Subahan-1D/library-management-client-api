import { ModeToggle } from "@/components/ui/mode-toggle";
import { useEffect, useState } from "react";
import { GoFileDiff } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import { LuBookmarkPlus } from "react-icons/lu";
import { Link, NavLink } from "react-router";
import icon from "../assets/images/bookIcon.png"
import { Home } from "lucide-react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [, setClick] = useState(false);
    const closeMenu = () => {
        setClick(false);
    };
    useEffect(() => {
        setClick(false);
    }, [location]);

    const links = (
        <>
            <li className="list-none group relative w-full whitespace-nowrap transition-all duration-300 cursor-pointer">
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center
                    ${isActive
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                    }
                >
                    <Home className="h-5 w-5 mr-2" />
                    Home
                </NavLink>
            </li>
            <li className="list-none group relative w-full whitespace-nowrap transition-all duration-300 cursor-pointer">
                <NavLink
                    to="/books"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center
                   ${isActive
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                    }
                >
                    <HiOutlineBookOpen className="h-5 w-5 mr-2" />
                    All Books
                </NavLink>
            </li>

            <li className="list-none group relative w-full whitespace-nowrap transition-all duration-300 cursor-pointer">
                <NavLink
                    to="/addBooks"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center
                    ${isActive
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                    }
                >
                    <LuBookmarkPlus className="h-5 w-5 mr-2" />

                    Add Books
                </NavLink>
            </li>

            <li className="list-none group relative w-full whitespace-nowrap transition-all duration-300 cursor-pointer">
                <NavLink
                    to="/borrowSummary"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center
                    ${isActive
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                    }
                >
                    <GoFileDiff className="h-5 w-5 mr-2" />
                    Borrow Summary
                </NavLink>
            </li>
        </>
    );


    return (
        <div className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a>
                        <img className="w-20" src={icon} alt="Logo" />
                        <Link to='/' className=" font-bold text-blue-700 dark:text-white">Book Library</Link>
                    </a>

                    <div className="flex items-center space-x-4">
                        {/* ModeToggle on mobile */}
                        <div className="md:hidden">
                            <ModeToggle />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="toggle menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800
    md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center
    ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6 gap-5">
                        {links}
                    </div>



                    <div className="hidden md:block ml-4">
                        {/* ModeToggle on desktop */}
                        <ModeToggle />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;