import {
    useMotionValueEvent,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import ArahanStrategis from "../components/sections/tentang/ArahanStrategis";
import FilosofiLogo from "../components/sections/tentang/FilosofiLogo";
import Kabinet from "../components/sections/tentang/Kabinet";
import Sambutan from "../components/sections/tentang/Sambutan";
import TentangImage from "../assets/Tentang.png"
import tentangLeft from '../assets/tentangLeft.png'
import tentangRight from '../assets/tentangRight.png'
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
        <div className="scroll-smooth bg-primary-tealBlue font-helvetica-regular ">
            <motion.section
                style={{
                    filter: `blur(${blurValue}px)`,
                }}
                className="h-[75vh]  font-helvetica-extraBold relative  px-4 lg:px-24 py-40 lg:pb-0  top-0 lg:pt-20 text-primary-white  flex flex-col justify-center items-center "
            >
                <img src={tentangLeft} alt="img" draggable="false" className="absolute w-1/6 -translate-y-1/4 top-0 left-0" />
                <img src={tentangRight} alt="img" draggable="false" className="absolute w-1/6 -translate-y-1/4 top-0  right-0" />
                <div className="overflow-hidden h-10 lg:h-24    ">
                    <motion.img 
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
                    src={TentangImage} className="h-full aspect-auto" alt="img" draggable="false" />
                 
                </div>
                <div className="overflow-hidden h-fit lg:h-20 ">
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
                        className="text-3xl lg:text-6xl font-bold  h-fit lg:h-20"
                    >
                        Eksekutif Mahasiswa
                    </motion.h1>
                </div>
                <div className="overflow-hidden h-fit lg:h-20 ">
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
                        className="text-3xl lg:text-6xl font-bold  h-20 "
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
                className=" w-4/5 mx-auto  relative z-10  rounded-2xl opacity-100  "
            >
           
                <section className="h-screen w-full sticky top-0 bg-gradient-to-b z-0 from-primary-white to-primary-skyBlue "></section>
              <Kabinet/>
              <Sambutan/>
            
                <section className="w-full overflow-hidden">
                <FilosofiLogo />
                <ArahanStrategis />
                </section>
            </motion.section>
        </div>
    );
};

export default Tentang;
