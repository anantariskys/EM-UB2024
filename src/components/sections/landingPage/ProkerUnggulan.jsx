import { Icon } from "@iconify/react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ProkerUnggulan = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset:["start end","end start"]
    });
    const value1 = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
    const value2 = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
    const value3 = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
    const value4 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
    const value5 = useTransform(scrollYProgress, [0, 1], ["0px", "175px"]);
  
    useMotionValueEvent(value1, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });
    return (
        <motion.section
            ref={targetRef}
            className="w-full relative overflow-hidden  flex flex-col justify-center items-center h-screen lg:h-[calc(100vh+20vh)] bg-gradient-to-t from-black via-primary-tealBlue to-black gap-5  "
        >
            <h1 className="font-helvetica-extraBold text-2xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary-skyBlue to-white text-balance w-4/5 text-center relative drop-shadow-2xl z-40">
                PROGRAM KERJA 6 MEGA BESAR EM UB 2024
            </h1>
            <Link to={'/proker'}><div
                className="text-xl relative  group rounded-lg font-medium bg-transparent bg-primary-tealBlue text-primary-charcoalGray border-2 py-1 px-5 border-white z-20 
          hover:text-white duration-300  ease-in-out  overflow-hidden flex items-center gap-2 active:scale-95 active:duration-200"
            >
                <h1 className="z-10 relative group-hover:text-primary-charcoalGray duration-300 ease-in-out text-white">
                    Lihat Selengkapnya{" "}
                </h1>
                <Icon
                    icon="maki:arrow"
                    className="text-white z-20 group-hover:translate-x-2  group-hover:delay-500 group-hover:text-primary-charcoalGray duration-300 ease-in-out  text-xl "
                />

                <div className="absolute   -translate-y-1/2 top-1/2 -left-5 duration-1000 skew-x-12 w-0 group-hover:w-[calc(100%+50px)] bg-primary-white h-[calc(100%+20px)] bottom-0 z-0"></div>
            </div>
            </Link>

            <div className="w-full h-16 bg-primary-white absolute -top-8 left-0 rounded-[100%] z-40"></div>
            <div className="w-full h-16 bg-primary-white absolute -bottom-8 left-0 rounded-[100%] z-40"></div>

            <div className="flex justify-center items-center gap-4 lg:gap-12 absolute  ">
                <motion.div
                    style={{
                        top: value1,
                    }}
                    className="lg:flex  hidden flex-col gap-5 lg:w-[16%] w-[25%] relative ease-in-out"
                >
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?university"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?playground"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?scholl"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?scholl"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?scholl"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                </motion.div>
                <motion.div
                    style={{
                        bottom: value2,
                    }}
                    className="lg:flex  hidden flex-col gap-5 lg:w-[16%] w-[25%] relative ease-in-out"
                >
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?horse"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?ant"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?spiderman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?batman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?batman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?batman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                </motion.div>
                <motion.div
                    style={{
                        top: value3,
                    }}
                    className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative ease-in-out"
                >
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?avenger"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?batman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?mask"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?mask"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?mask"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                </motion.div>
                <motion.div
                    style={{
                        bottom: value4,
                    }}
                    className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative ease-in-out"
                >
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?hulk"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?ironman"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?thor"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?hawkeye"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?hawkeye"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?hawkeye"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                </motion.div>
                <motion.div
                    style={{
                        top: value5,
                    }}
                    className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative ease-in-out"
                >
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?hat"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?shield"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?alien"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?alien"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                    <img
                        draggable="false"
                        src="https://source.unsplash.com/random/900×700/?alien"
                        className="aspect-[9/14] w-full object-cover rounded-xl"
                        loading="lazy"
                        alt="img"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProkerUnggulan;
