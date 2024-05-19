import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { fadeIn } from "../src/variants/variants";
// import { fadeIn1 } from "../src/variants/variants1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Scrolllll } from "./variants/Scrollll";
import Navbar from "../../components/Navbar";
import StrukturPres from "./StrukturPres";
//Gambar
import SPI_BPI_1 from "../../assets/Struktur/Petinggi/SPI/SPI_BPI_1.png";
import SPI_BPI_2 from "../../assets/Struktur/Petinggi/SPI/SPI_BPI_2.png";
import PENGEMBANGAN_BPI_1 from "../../assets/Struktur/Petinggi/Pengembangan/PENGEMBANGAN_BPI_1.png";
import PENGEMBANGAN_BPI_2 from "../../assets/Struktur/Petinggi/Pengembangan/PENGEMBANGAN_BPI_2.png";
import PERGERAKAN_BPI_1 from "../../assets/Struktur/Petinggi/Pergerakan/PERGERAKAN_BPI_1.png";
import PERGERAKAN_BPI_2 from "../../assets/Struktur/Petinggi/Pergerakan/PERGERAKAN_BPI_2.png";
import PPM_BPI_1 from "../../assets/Struktur/Petinggi/PPM/PPM_BPI_1.png";
import PPM_BPI_2 from "../../assets/Struktur/Petinggi/PPM/PPM_BPI_2.png";
import DJO_BPI_1 from "../../assets/Struktur/Petinggi/DJO/DJO_BPI_1.png";
import DJO_BPI_2 from "../../assets/Struktur/Petinggi/DJO/DJO_BPI_2.png";
import struktur from "../../assets/Struktur/Struktur.svg";
import back from "../../assets/Struktur/chevron.svg";
import Footer from "../../components/Footer";
//Gambar

const Struktur = () => {
  const location = useLocation();
  // const ref = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } =
  //       ref.current.scrollingElement;
  //     const isBottom = scrollTop + clientHeight === scrollHeight;

  //     if (isBottom) {
  //       ref.current.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
  //     }
  //   };

  //   ref.current.scrollingElement.addEventListener("scroll", handleScroll);

  //   return () => {
  //     ref.current.scrollingElement.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="bg-white w-full h-screen flex item-center justify-center p-44 overflow-hidden">
          {/* Struktur EM UB 24 */}
          <img src={struktur} />
        </div>

        <StrukturPres />

        <section className="bg-white w-full h-full mt-20">
          {/* <img src="../src/assets/Frame 74.png" className="w-full  px-10" /> */}
          {/* Border */}
          <div class="h-80 mx-10 bg-white p-4  rounded shadow-xl flex justify-between">
            <h3 className="text-primary-tealBlue text-3xl font-helvetica font-extrabold pl-16 my-auto ">
              SATUAN{" "}
              <span className="text-black">
                PENGENDALI<br></br> INTERNAL
              </span>
            </h3>
            <div className="bg-white flex items-center justify-center">
              <img src={SPI_BPI_1} className="w-48 h-full mr-5" />
              <img src={SPI_BPI_2} className="w-48 h-full" />
              <Link
                to={"/struktur/spi"}
                href=""
                className="bg-white hover:bg-primary-skyBlue text-white font-bold py-2 px-4 rounded"
              >
                <img src={back} />
                <div
                  className={`${
                    location.pathname === "/struktur/spi"
                      ? "w-full"
                      : "transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"
                  } absolute bottom-0 h-0.5 bg-primary-tealBlue `}
                ></div>{" "}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white w-full h-full my-3">
          {/* Border */}
          <div class="h-80 mx-10 bg-white p-4 rounded shadow-xl flex justify-between">
            <h3 className="text-primary-tealBlue text-3xl font-helvetica font-extrabold pl-16 my-auto ">
              KEMENTRIAN <br></br> KOORDINATOR
              <h3 className="text-black">PENGEMBANGAN</h3>
            </h3>
            <div className="flex items-center justify-center">
              <img src={PENGEMBANGAN_BPI_1} className="w-60 h-full" />
              <img src={PENGEMBANGAN_BPI_2} className="w-60 h-full" />
              <Link
                to={"/struktur/pengembangan"}
                href=""
                className="bg-white hover:bg-primary-skyBlue text-white font-bold py-2 px-4 rounded"
              >
                <img src={back} />
                <div
                  className={`${
                    location.pathname === "/struktur/pengembangan"
                      ? "w-full"
                      : "transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"
                  } absolute bottom-0 h-0.5 bg-primary-tealBlue `}
                ></div>{" "}
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-full my-3">
          <div class="h-80 mx-10 bg-white p-4 rounded shadow-xl flex justify-between">
            <h3 className="text-primary-tealBlue text-3xl font-helvetica font-extrabold pl-16 my-auto ">
              KEMENTRIAN <br></br> KOORDINATOR
              <h3 className="text-black">PERGERAKAN</h3>
            </h3>
            <div className="flex items-center justify-center">
              <img src={PERGERAKAN_BPI_1} className="w-48 h-full mr-7" />
              <img src={PERGERAKAN_BPI_2} className="w-48 h-full" />
              <Link
                to={"/struktur/pergerakan"}
                href=""
                className="bg-white hover:bg-primary-skyBlue text-white font-bold py-2 px-4 rounded"
              >
                <img src={back} />
                <div
                  className={`${
                    location.pathname === "/struktur/pergerakan"
                      ? "w-full"
                      : "transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"
                  } absolute bottom-0 h-0.5 bg-primary-tealBlue `}
                ></div>{" "}
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-full my-3">
          <div class="h-80 mx-10 bg-white p-4 rounded shadow-xl flex justify-between">
            <h3 className="text-primary-tealBlue text-3xl font-helvetica font-extrabold pl-16 my-auto ">
              KEMENTRIAN <br></br> KOORDINATOR
              <h3 className="text-black">PENGABDIAN DAN</h3>
              <h3 className="text-black">PEMBERDAYAAN</h3>
              <h3 className="text-black">MASYARAKAT</h3>
            </h3>
            <div className="flex items-center justify-center">
              <img src={PPM_BPI_1} className="w-52 h-full " />
              <img src={PPM_BPI_2} className="w-52 h-full" />
              <Link
                to={"/struktur/ppm"}
                href=""
                className="bg-white hover:bg-primary-skyBlue text-white font-bold py-2 px-4 rounded"
              >
                <img src={back} />
                <div
                  className={`${
                    location.pathname === "/struktur/ppm"
                      ? "w-full"
                      : "transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"
                  } absolute bottom-0 h-0.5 bg-primary-tealBlue `}
                ></div>{" "}
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full h-full my-3 md-10">
          <div class="h-80 mx-10 bg-white p-4 rounded shadow-xl flex justify-between">
            <h3 className="text-primary-tealBlue text-3xl font-helvetica font-extrabold pl-16 my-auto ">
              KEMENTRIAN <br></br> KOORDINATOR
              <h3 className="text-black">
                DIPLOMASI DAN<br></br>JARINGAN ORGANISASI
              </h3>
            </h3>
            <div className=" bg-white flex items-center justify-center">
              <img src={DJO_BPI_1} className="w-60 h-full mr-5 " />
              <img src={DJO_BPI_2} className="w-48 h-full" />
              <Link
                to={"/struktur/diplomasi-dan-jaringan-organisasi"}
                href=""
                className="bg-white hover:bg-primary-skyBlue text-white font-bold py-2 px-4 rounded"
              >
                <img src={back} />
                <div
                  className={`${
                    location.pathname ===
                    "/struktur/diplomasi-dan-jaringan-organisasi"
                      ? "w-full"
                      : "transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0"
                  } absolute bottom-0 h-0.5 bg-primary-tealBlue `}
                ></div>{" "}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Struktur;
