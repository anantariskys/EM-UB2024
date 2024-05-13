import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logoNavbar.png";
const Navbar = () => {
    const location = useLocation();
    


    return (
        <nav className="flex px-3 lg:px-24 py-3 justify-between shadow-lg sticky top-0   z-[100]  items-center bg-primary-white">
            <img src={Logo} className="lg:h-20  h-10" draggable="false" alt="logo" />
            <ul className="lg:flex hidden  gap-10 font-helvetica-regular items-center h-full text-primary-navbarText ">
                <Link to={'/'} href="" className="relative group">
                    <li className="text-xl font-medium">Beranda</li>
                    <div className={`${location.pathname==="/"?"w-full":"transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"} absolute bottom-0 h-0.5 bg-primary-tealBlue `}></div>
                </Link>
                <Link to={'/berita'}>
                <a href="" className="relative group">
                    <li className="text-xl font-medium ">Berita</li>
                    <div className={`${location.pathname==="/berita"?"w-full":"transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"} absolute bottom-0 h-0.5 bg-primary-tealBlue `}></div>                </a>
                    </Link>

                <Link to={'/tentang'} href="" className="relative group">
                    <li className="text-xl font-medium ">Tentang</li>
                    <div className={`${location.pathname==="/tentang"?"w-full":"transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"} absolute bottom-0 h-0.5 bg-primary-tealBlue `}></div>                </Link>
                <a href="" className="relative group">
                    <li className="text-xl font-medium ">Strukur EM</li>
                    <div className={`${location.pathname==="/struktur"?"w-full":"transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"} absolute bottom-0 h-0.5 bg-primary-tealBlue `}></div>                </a>

                <button
                    className="text-xl relative  group rounded-lg font-medium bg-transparent bg-primary-tealBlue text-primary-charcoalGray border-2 py-1 px-5 border-primary-tealBlue 
          hover:text-white duration-300  ease-in-out  overflow-hidden"
                >
                    <h1 className="z-10 relative">EM UB Apps</h1>

                    <div className="absolute   -translate-y-1/2 top-1/2 -left-5 duration-1000 skew-x-12 w-0 group-hover:w-[calc(100%+50px)] bg-primary-tealBlue h-[calc(100%+20px)] bottom-0 z-0"></div>
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
