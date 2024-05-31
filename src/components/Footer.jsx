import React from "react";
import Logo from "../assets/LogoFooter.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className=" pt-10 bg-gradient-to-tr divide-y-2 divide-white text-white from-primary-tealBlue to-primary-charcoalGray pb-10">
            <div className="container mx-auto px-4 lg:px-28"> 
            <section className="flex lg:flex-row flex-col items-start justify-between pb-5 lg:pb-16">
                <div className="flex gap-0 lg:gap-10 flex-col items-center lg:items-center">
                    <img
                        src={Logo}
                        draggable="false"
                        className="lg:h-28 h-16"
                        alt="Logo"
                    />
                 
                </div>
                <div className="flex gap-0.5 lg:gap-2 flex-col items-start mt-3 lg:mt-0">
                    <h3 className="text-lg lg:text-xl font-bold">Tautan</h3>
                    <Link to={'/'} className="text-sm lg:text-base font-light">Beranda</Link>
                    <Link to={'/berita'} className="text-sm lg:text-base font-light">Berita</Link>
                    <Link to={'/tentang'} className="text-sm lg:text-base font-light">Tentang</Link>
                    <Link to={'/struktur'} className="text-sm lg:text-base font-light">Struktur EM</Link>
                </div>
                <div className="flex gap-0.5 lg:gap-2 flex-col items-start mt-3 lg:mt-0">
                    <h3 className="text-lg lg:text-xl font-bold">Sosial Media</h3>
                    <Link to={'https://www.linkedin.com/company/em-ub-2024/'} className="text-sm lg:text-base font-light">Linkedln</Link>
                    <Link to={'https://www.instagram.com/em_ubofficial?igsh=MXIxM3VjY2EyMGJncQ=='} className="text-sm lg:text-base font-light">Instagram</Link>
                    <Link to={'https://youtube.com/@emubofficial?si=HD6SeDcEusxZBou8'} className="text-sm lg:text-base font-light">Youtube</Link>
                    <Link to={'https://www.tiktok.com/@em_ubofficial?_t=8meCA9Fi8KP&_r=1'} className="text-sm lg:text-base font-light">Tiktok</Link>
                    <Link to={'https://x.com/em_ubofficial?s=21&t=avhMi2LSGKFov7Vd_2Nk1A'} className="text-sm lg:text-base font-light">X</Link>
                </div>
                <div className="flex gap-0.5 lg:gap-2 flex-col  lg:w-2/5 items-start">
                    <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-0">Alamat</h3>
                    <p className="text-sm lg:text-base font-light ">
                        Gedung EM-DPM UB Lantai 1 Univeristas Brawijaya Malang,
                        Jalan Veteran 06C Malang, 65145
                    </p>
                    <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-4">Kontak Kami</h3>
                    <p className="text-sm lg:text-base font-light">
                        Telp: +62 858-1570-4443
                    </p>
                    <p className="text-sm lg:text-base font-light">E-mail: em@ub.ac.id</p>
                </div>
            </section>
            <section className="lg:text-base text-[0.625rem] text-center lg:text-start container pt-1 lg:pt-3">
                ©️ 2024 EKSEKUTIF MAHASISWA UNIVERSITAS BRAWIJAYA | Made with ♡
                by KOMINFO
            </section>
            </div>
           
        </div>
    );
};

export default Footer;
