import React from "react";
import Logo from "../assets/LogoFooter.png";
const Footer = () => {
    return (
        <div className="px-28 pt-10 bg-gradient-to-tr divide-y-2 divide-white text-white from-primary-tealBlue to-primary-charcoalGray pb-10">
            <section className="flex justify-between pb-16">
                <div className="flex gap-10 flex-col items-center">
                    <img
                        src={Logo}
                        draggable="false"
                        className="h-28"
                        alt="Logo"
                    />
                    <div className="flex gap-3 ">
                        <div className="size-9 rounded-full bg-primary-charcoalGray"></div>
                        <div className="size-9 rounded-full bg-primary-charcoalGray"></div>
                        <div className="size-9 rounded-full bg-primary-charcoalGray"></div>
                        <div className="size-9 rounded-full bg-primary-charcoalGray"></div>
                        <div className="size-9 rounded-full bg-primary-charcoalGray"></div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col items-start">
                    <h3 className="text-xl font-bold">Tautan</h3>
                    <p className="text-base font-light">Beranda</p>
                    <p className="text-base font-light">Berita</p>
                    <p className="text-base font-light">Tentang</p>
                    <p className="text-base font-light">Struktur EM</p>
                </div>
                <div className="flex gap-2 flex-col items-start">
                    <h3 className="text-xl font-bold">Sosial Media</h3>
                    <p className="text-base font-light">Beranda</p>
                    <p className="text-base font-light">Berita</p>
                    <p className="text-base font-light">Tentang</p>
                    <p className="text-base font-light">Struktur EM</p>
                </div>
                <div className="flex gap-2 flex-col  w-2/5 items-start">
                    <h3 className="text-xl font-bold">Alamat</h3>
                    <p className="text-base font-light ">
                        Gedung EM-DPM UB Lantai 1 Univeristas Brawijaya Malang,
                        Jalan Veteran 06C Malang, 65145
                    </p>
                    <h3 className="text-xl font-bold mt-4">Kontak Kami</h3>
                    <p className="text-base font-light">
                        Telp: +62 858-1570-4443
                    </p>
                    <p className="text-base font-light">E-mail: em@ub.ac.id</p>
                </div>
            </section>
            <section className="text-base  container pt-3">
                ©️ 2024 EKSEKUTIF MAHASISWA UNIVERSITAS BRAWIJAYA | Made with ♡
                by KOMINFO
            </section>
        </div>
    );
};

export default Footer;
