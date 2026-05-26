import { useState } from 'react';
import Logo from '../assets/icons/logo.svg?react';

export default function NavBar() {

    const navLinks = [
        { name: 'About me', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Portfolio', id: 'portfolio' },
    ];

    // state of menudrop
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav data-aos="fade-down" className=" w-full fixed top-0 z-50 transition-all duration-300 left-0  bg-transparent max-md:bg-black px-24 max-lg:px-0">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-wider cursor-pointer flex items-center">
                    {/* logo */}
                    <Logo data-aos="flip-left" className={`max-md:${!isOpen ? "hidden" : ""} max-md:text-white text-black `} />
                </div>

                {/* in large size */}
                <div className="hidden md:flex items-center space-x-10">
                    <ul className="flex space-x-8 max-lg:space-x-6 text-sm font-medium tracking-wide">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={`#${link.id}`}
                                    className="text-white hover:text-[#ffffffc9] transition-colors duration-200 font-semibold"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>


                    <a
                        href="#contact"
                        className="bg-white  border border-[#1c1c1c] text-[#1c1c1c] px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#1c1c1c] hover:text-[#f4f1ea] transition-all duration-300"
                    >
                        Contact me
                    </a>
                </div>

                {/* in mobile size  */}
                <div className="md:hidden flex items-center ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#1c1c1c] focus:outline-none p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            //    icon to close
                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // icon to open 
                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>


            <div
                className={`border-t border-[#fcfbfbcc] md:hidden text-[#f4f1ea] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 pt-8' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col items-center space-y-6 text-base font-medium tracking-wide">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setIsOpen(false)}
                                className="">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className=" w-full flex justify-center">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-white text-[#1c1c1c] w-full h-full text-center py-5"
                        >
                            Contact me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}