import React from "react";
import Logo from "../assets/logoNavbar.png";
const Navbar = () => {
    return (
        <nav className="flex px-24 py-3 justify-between shadow-lg items-center">
            <img src={Logo} className="h-20" draggable="false" alt="logo" />
            <ul className="flex gap-10 font-helvetica-regular items-center h-full text-primary-navbarText ">
                <a href="" className="relative group">
                    <li className="text-xl font-medium">Beranda</li>
                    <div className="absolute w-0 bottom-0 h-0.5 bg-primary-tealBlue transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </a>
                <a href="" className="relative group">
                    <li className="text-xl font-medium ">Berita</li>
                    <div className="absolute w-0 bottom-0 h-0.5 bg-primary-tealBlue transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </a>
                <a href="" className="relative group">
                    <li className="text-xl font-medium ">Tentang</li>
                    <div className="absolute w-0 bottom-0 h-0.5 bg-primary-tealBlue transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </a>
                <a href="" className="relative group">
                    <li className="text-xl font-medium ">Strukur EM</li>
                    <div className="absolute w-0 bottom-0 h-0.5 bg-primary-tealBlue transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </a>

                <btn
                    className="text-xl relative  group rounded-lg font-medium bg-transparent bg-primary-tealBlue text-primary-charcoalGray border-2 py-1 px-5 border-primary-tealBlue 
          hover:text-white duration-300  ease-in-out  overflow-hidden"
                >
                    <h1 className="z-10 relative">EM UB Apps</h1>

                    <div className="absolute   -translate-y-1/2 top-1/2 -left-5 duration-1000 skew-x-12 w-0 group-hover:w-[calc(100%+50px)] bg-primary-tealBlue h-[calc(100%+20px)] bottom-0 z-0"></div>
                </btn>
            </ul>
        </nav>
    );
};

export default Navbar;
