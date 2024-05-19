import React, { useEffect } from "react";

import { motion } from "framer-motion";
// import { fadeIn } from "../src/variants/variants";
// import { fadeIn1 } from "../src/variants/variants1";
// import Navbar from "./Navbar";
import fotopres from "../../assets/Struktur/Pres/fotopres.png";
import fotowapres from "../../assets/Struktur/Pres/fotowapres.png";
import kiri1 from "../../assets/Struktur/Pres/kiri1.png";
import kiri2 from "../../assets/Struktur/Pres/kiri2.png";
import kanan1 from "../../assets/Struktur/Pres/kanan1.png";
import kanan2 from "../../assets/Struktur/Pres/kanan2.png";
// import image4_2 from "../assets/ProkerEM/6ProkerMegaBesar/4.2.jpeg";
function StrukturPres() {
  //     const ref = useRef(null);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const { scrollTop, clientHeight, scrollHeight } = ref.current.scrollingElement;
  //       const isBottom = scrollTop + clientHeight === scrollHeight;

  //       if (isBottom) {
  //         ref.current.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
  //       }
  //     };

  //     ref.current.scrollingElement.addEventListener('scroll', handleScroll);

  //     return () => {
  //       ref.current.scrollingElement.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <section className="w-full h-full flex justify-center relative">
          <div className="absolute bottom-0 z-40">
            <img src={fotopres} className="h-80" />
          </div>

          <div className="w-1/2 relative">
            <h3 className="text-primary-tealBlue text-5xl font-helvetica font-extrabold absolute top-1/2 -translate-x-1/3 left-[20%]">
              FISIP<br></br>20
            </h3>
            <h3 className=" text-primary-tealBlue text-5xl font-int font-extrabold absolute top-5 right-0">
              PRES
            </h3>
            <img src={kiri1} className="" />
          </div>
          <div className="w-1/2">
            <div className="text-white text-right text-5xl font-helvetica font-extrabold -translate-y-1/2 absolute top-1/2 -translate-x-1/3 right-[0.5%]">
              <h3>SATRIA</h3>
              <h3>NAUFAL</h3>
              <h3>PUTRA</h3>
              <h3>ANSAR</h3>
            </div>

            <h3 className="text-white text-5xl font-helvetica font-extrabold absolute top-5 right-50 ">
              IDEN
            </h3>
            <img src={kanan1} className="" />
          </div>
        </section>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <section className="w-full h-full flex justify-center relative">
          <div className="absolute bottom-0 z-40 ">
            <img src={fotowapres} className="h-80  " />
          </div>
          <div className="w-1/2 relative">
            <div className="text-white text-5xl font-helvetica font-extrabold -translate-y-1/2 absolute top-1/2 -translate-x-1/3 left-[20%]">
              <h3>ZAHRA</h3>
              <h3>LAYLA</h3>
              <h3>NISYA</h3>
            </div>

            <h3 className=" text-white text-5xl font-helvetica font-extrabold absolute top-3 right-3">
              WAKIL
            </h3>
            <img src={kiri2} className="" />
          </div>
          <div className="w-1/2">
            <div className="text-primary-tealBlue text-5xl font-helvetica font-extrabold absolute top-1/2 -translate-x-1/3 right-[3%]">
              <h3>FIKES</h3>
              <h3 className="text-right">21</h3>
            </div>

            <h3 className=" text-primary-tealBlue text-5xl font-helvetica font-extrabold absolute top-3 right-47 ">
              PRESIDEN
            </h3>
            <img src={kanan2} className="" />
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default StrukturPres;
