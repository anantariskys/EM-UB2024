import {
    useMotionValueEvent,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Rektorat from "../../src/assets/rektorat.png";
import ArahanStrategis from "../components/sections/tentang/ArahanStrategis";
import FilosofiLogo from "../components/sections/tentang/FilosofiLogo";

const Tentang = () => {
    const [blurValue, setblurValue] = useState(0);
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "end start"],
    });
    const value = useTransform(scrollYProgress, [0.05, 0.2], ["80%", "100%"]);
    const border = useTransform(scrollYProgress, [0, 0.2], ["16px", "0px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], ["0.6", "1"]);
    const blur = useTransform(scrollYProgress, [0, 0.5], ["0", "10"]);

    useMotionValueEvent(blur, "change", (latest) => {
        setblurValue(latest);
    });

    return (
        <div className="scroll-smooth bg-primary-white font-helvetica-regular">
            <motion.section
                style={{
                    filter: `blur(${blurValue}px)`,
                }}
                className="lg:h-screen   sticky container px-4 lg:px-24 py-40 lg:pb-0  top-0 lg:pt-20 font-helvetica-extraBold text-primary-tealBlue flex flex-col "
            >
                <div className="overflow-hidden h-10 lg:h-24 ">
                    <motion.h1
                        initial={{
                            y: 100,
                        }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="text-3xl lg:text-7xl font-bold  h-10 lg:h-24  "
                    >
                        Tentang{" "}
                    </motion.h1>
                </div>
                <div className="overflow-hidden h-10 lg:h-24 ">
                    <motion.h1
                        initial={{
                            y: 100,
                        }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1,
                        }}
                        className="text-3xl lg:text-7xl font-bold  h-10 lg:h-24"
                    >
                        Eksekutif Mahasiswa
                    </motion.h1>
                </div>
                <div className="overflow-hidden h-10 lg:h-24 ">
                    <motion.h1
                        initial={{
                            y: 100,
                        }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.2,
                        }}
                        className="text-3xl lg:text-7xl font-bold  h-10 lg:h-24 "
                    >
                        Universitas Brawijaya 2024
                    </motion.h1>
                </div>
            </motion.section>

            <motion.section
                style={{
                    width: value,
                    borderRadius: border,
                    opacity: opacity,
                }}
                ref={target}
                className="bg-gradient-to-b from-primary-tealBlue to-primary-skyBlue w-4/5 mx-auto  relative z-10  rounded-2xl opacity-100 "
            >
                <section className="h-screen  container mx-auto px-4 lg:px-24  flex items-center justify-center">
                    <div className="w-fit">
                        <h3 className="text-2xl lg:text-6xl text-shadow-heading text-primary-paleSalmon font-medium">
                            Kabinet
                        </h3>
                        <h1 className="text-4xl lg:text-8xl text-shadow-heading font-helvetica-extraBold bg-gradient-to-b from-primary-tealBlue to-primary-charcoalGray bg-clip-text text-transparent font-black">
                            CERITERA KITA
                        </h1>
                        <p className="text-base lg:text-3xl text-shadow-heading text-primary-navbarText text-center italic">
                            "TULISKAN CERITA, MENGGAPAI ASA, WIJAYA"
                        </p>
                    </div>
                </section>
                <section className="font-helvetica-extraBold flex flex-col items-center  container mx-auto lg:px-24 px-4 py-10 ">
                    <h1
                        className={`lg:text-[12rem]  text-5xl  text-shadow-heading bg-clip-text text-transparent text-center`}
                        style={{
                            backgroundImage: `url(${Rektorat})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        SAMBUTAN
                    </h1>
                    <h3 className="text-sm   lg:text-5xl text-shadow-heading  self-center bg-gradient-to-b from-primary-tealBlue to-primary-charcoalGray bg-clip-text text-transparent ">
                        Presiden dan Wakil Presiden
                    </h3>
                    <main className="flex flex-col lg:flex-row mt-5 lg:mt-10 items-center gap-10 justify-between font-helvetica-regular">
                        <div className="w-2/5 aspect-square  rounded-md bg-primary-navbarText"></div>
                        <div className="text-xl w-4/5 lg:w-3/5 text-primary-charcoalGray">
                            <div className="flex flex-col gap-5">
                            <p className="font-bold">
                                Assalamualaikum Warahmatullahi Wabarakatuh,
                                Shalom, Om Swastyastu, Namo Buddhaya, Salam
                                Kebajikan.{" "}
                            </p>

                            <p>Hidup Mahasiswa! Hidup Rakyat Indonesia!</p>
                            <p>
                                Puji dan syukur selalu kami panjatkan kepada
                                Tuhan YME atas rahmat dan karunia-Nya yang tak
                                terhingga dalam melangkah bersama kami. Sebuah
                                perjalanan yang penuh makna kami jalani sebagai
                                Eksekutif Mahasiswa Universitas Brawijaya
                                bersama kabinet Ceritera Kita.
                            </p>
                            <p>
                                Kami hadir dengan semangat baru untuk mengukir
                                cerita yang segar, dalam kemasan yang baru untuk
                                setiap elemen yang membangun Brawijaya.
                                Bersama-sama, kami bertekad untuk menjadikan
                                setiap langkah kami sebagai tonggak keberhasilan
                                dan inovasi.
                            </p>
                            <p>
                                erdapat beragam elemen yang telah menemani
                                perjalanan CeriteraKita, menjadi pilar dalam
                                pencapaian tujuan kami. Kami ingin mengucapkan
                                rasa terima kasih kepada semua yang telah
                                memberikan dukungan, memastikan kelancaran
                                setiap langkah kami, dan memungkinkan kami
                                merangkai perjalanan kami dengan nilai dan makna
                                yang mendalam di dalam platform Eksekutif
                                Mahasiswa Universitas Brawijaya.
                            </p>
                            <p>
                                Eksekutif Mahasiswa Universitas Brawijaya
                                bertekad memberikan dampak positif dengan
                                melibatkan seluruh unsur dalam pengembangan
                                prestasi, layanan mahasiswa, pengabdian, dan
                                gerakan kebangsaan. Bersama dengan Keluarga
                                Besar Mahasiswa Universitas Brawijaya, kami
                                berupaya menciptakan narasi baru untuk memajukan
                                Brawijaya.
                            </p>
                            <p>KITA SATU BRAWIJAYA!</p>
                            <p>Wassalamualaikum Wr.Wb</p>
                            <p>
                                EKSEKUTIF MAHASISWA UNIVERSITAS
                                KABINET CERITERA KITA
                            </p>
                            </div>
                            <h3 className=" text-lg lg:text-4xl font-helvetica-extraBold text-shadow-heading bg-gradient-to-b from-primary-tealBlue to-primary-charcoalGray bg-clip-text text-transparent text-center mt-5">
                                #MimpiPengukirCeritera
                            </h3>
                        </div>
                    </main>
                </section>
                <FilosofiLogo />
                <ArahanStrategis />
            </motion.section>
        </div>
    );
};

export default Tentang;
