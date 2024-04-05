import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import cardEffect from "../assets/cardTautanEffect.png";
import { Icon } from "@iconify/react";
import "../styles/landingPage.css";
import Obyektif from "../assets/nilaiDasarOrganisasi/Obyektif.png";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";

const LandingPage = () => {
    const dummy = [
        {
            id: 1,
            name: "Profil Alumni",
        },
        {
            id: 2,
            name: "JHID - EM",
        },
    ];

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        container: targetRef.current,
    });
    const value1 = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
    const value2 = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);
    const value3 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
    const value4 = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
    const value5 = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);

    return (
        <div className=" overflow-hidden">
            <section className="py-10 h-screen w-full" id="hero">
                <Splide
                    options={{
                        perPage: 1,
                        focus: "center",
                        gap: "-650px",
                    }}
                >
                    <SplideSlide className="">
                        <img
                            src="https://source.unsplash.com/random/900×700/?Nature"
                            className="w-4/6 mx-auto relative rounded-3xl  aspect-video object-cover"
                            alt=""
                        />
                    </SplideSlide>
                    <SplideSlide className="">
                        <img
                            src="https://source.unsplash.com/random/900×700/?Mountain"
                            className="w-4/6 mx-auto relative rounded-3xl aspect-video object-cover"
                            alt=""
                        />
                    </SplideSlide>
                    <SplideSlide className="">
                        <img
                            src="https://source.unsplash.com/random/900×700/?Beach"
                            className="w-4/6 mx-auto relative rounded-3xl aspect-video object-cover"
                            alt=""
                        />
                    </SplideSlide>
                    <SplideSlide className="">
                        <img
                            src="https://source.unsplash.com/random/900×700/?Road"
                            className="w-4/6 mx-auto relative rounded-3xl aspect-video object-cover"
                            alt=""
                        />
                    </SplideSlide>
                </Splide>
            </section>

            <motion.section
                ref={targetRef}
                className="w-full relative overflow-hidden flex flex-col justify-center items-center h-[calc(100vh+20vh)] bg-gradient-to-t from-black via-primary-tealBlue to-black gap-5  "
            >
                <h1 className="font-helvetica-extraBold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary-skyBlue to-white text-balance w-4/5 text-center relative drop-shadow-2xl z-40">
                    PROGRAM KERJA UNGGULAN EM UB 2024
                </h1>
                <div
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

                    <div className="absolute   -translate-y-1/2 top-1/2 -left-5 duration-1000 skew-x-12 w-0 group-hover:w-[calc(100%+50px)] bg-white h-[calc(100%+20px)] bottom-0 z-0"></div>
                </div>

                <div className="flex justify-center items-center gap-12 absolute  ">
                    <motion.div
                        style={{
                            top: value1,
                        }}
                        className="flex flex-col gap-5 w-[16%] relative ease-in-out"
                    >
                        <img
                            src="https://source.unsplash.com/random/900×700/?university"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?playground"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
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
                        className="flex flex-col gap-5 w-[16%] relative ease-in-out"
                    >
                        <img
                            src="https://source.unsplash.com/random/900×700/?horse"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?ant"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?spiderman"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
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
                        className="flex flex-col gap-5 w-[16%] relative ease-in-out"
                    >
                        <img
                            src="https://source.unsplash.com/random/900×700/?avenger"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?batman"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
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
                        className="flex flex-col gap-5 w-[16%] relative ease-in-out"
                    >
                        <img
                            src="https://source.unsplash.com/random/900×700/?hulk"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?ironman"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?thor"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
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
                        className="flex flex-col gap-5 w-[16%] relative ease-in-out"
                    >
                        <img
                            src="https://source.unsplash.com/random/900×700/?hat"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?shield"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                        <img
                            src="https://source.unsplash.com/random/900×700/?alien"
                            className="aspect-[9/14] w-full object-cover rounded-xl"
                            loading="lazy"
                            alt="img"
                        />
                    </motion.div>
                </div>
            </motion.section>

            <section className="px-24 mt-10">
                <div className="w-full bg-gradient-to-br from-primary-skyBlue mx-auto shadow-2xl p-8 rounded-xl to-white">
                    <h1 className="font-helvetica-extraBold text-4xl text-transparent bg-clip-text bg-gradient-to-r  inline-block from-primary-charcoalGray to-primary-tealBlue mb-10 ">
                        Nilai Dasar Organisasi
                    </h1>
                    <div className="flex justify-center flex-wrap w-full   gap-7">
                        <div className="w-1/4 rounded-xl shadow-2xl p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                            <h3 className="text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                                Obyektif
                            </h3>
                            <img
                                src={Obyektif}
                                loading="lazy"
                                className="w-3/4 ms-auto aspect-auto group-hover:opacity-0 duration-300 ease-in-out"
                                alt="Obyektif"
                                draggable='false'
                            />
                            <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 ">
                                <img
                                draggable='false'
                                    src={Obyektif}
                                    loading="lazy"
                                    className="w-2/4 mix-blend-exclusion  ms-auto aspect-auto group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
                                    alt="Obyektif"
                                />
                                <p className="text-lg text-primary-tealBlue opacity-0  group-hover:opacity-100 duration-300 delay-100">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 rounded-xl shadow-2xl p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                            <h3 className="text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                                Rasional
                            </h3>
                            <img
                                src={Obyektif}
                                loading="lazy"
                                className="w-3/4 ms-auto aspect-auto group-hover:opacity-0 duration-300 ease-in-out"
                                alt="Obyektif"
                                draggable='false'
                            />
                            <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 ">
                                <img
                                draggable='false'
                                    src={Obyektif}
                                    loading="lazy"
                                    className="w-2/4 mix-blend-exclusion  ms-auto aspect-auto group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
                                    alt="Obyektif"
                                />
                                <p className="text-lg text-primary-tealBlue opacity-0  group-hover:opacity-100 duration-300 delay-100">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 rounded-xl shadow-2xl p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                            <h3 className="text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                                Progres
                            </h3>
                            <img
                                src={Obyektif}
                                loading="lazy"
                                className="w-3/4 ms-auto aspect-auto group-hover:opacity-0 duration-300 ease-in-out"
                                alt="Obyektif"
                                draggable='false'
                            />
                            <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 ">
                                <img
                                draggable='false'
                                    src={Obyektif}
                                    loading="lazy"
                                    className="w-2/4 mix-blend-exclusion  ms-auto aspect-auto group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
                                    alt="Obyektif"
                                />
                                <p className="text-lg text-primary-tealBlue opacity-0  group-hover:opacity-100 duration-300 delay-100">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 rounded-xl shadow-2xl p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                            <h3 className="text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                                Dinamis
                            </h3>
                            <img
                                src={Obyektif}
                                loading="lazy"
                                className="w-3/4 ms-auto aspect-auto group-hover:opacity-0 duration-300 ease-in-out"
                                alt="Obyektif"
                                draggable='false'
                            />
                            <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 ">
                                <img
                                draggable='false'
                                    src={Obyektif}
                                    loading="lazy"
                                    className="w-2/4 mix-blend-exclusion  ms-auto aspect-auto group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
                                    alt="Obyektif"
                                />
                                <p className="text-lg text-primary-tealBlue opacity-0  group-hover:opacity-100 duration-300 delay-100">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 rounded-xl shadow-2xl p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                            <h3 className="text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                                Terbuka
                            </h3>
                            <img
                                src={Obyektif}
                                loading="lazy"
                                className="w-3/4 ms-auto aspect-auto group-hover:opacity-0 duration-300 ease-in-out"
                                alt="Obyektif"
                                draggable='false'
                            />
                            <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 ">
                                <img
                                draggable='false'
                                    src={Obyektif}
                                    loading="lazy"
                                    className="w-2/4 mix-blend-exclusion  ms-auto aspect-auto group-hover:opacity-100 opacity-0 duration-300 ease-in-out"
                                    alt="Obyektif"
                                />
                                <p className="text-lg text-primary-tealBlue opacity-0  group-hover:opacity-100 duration-300 delay-100">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor.
                                </p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>

            <section className="py-10 px-24 font-helvetica-regular">
                <div className="flex w-full gap-4  items-center justify-between mb-10">
                    <h1 className="text-5xl font-bold w-1/4 ">Tautan Pintas</h1>
                    <div className="h-1 w-3/4   bg-primary-tealBlue"></div>
                </div>
                <Splide
                    options={{
                        arrows: false,
                        pagination: false,
                        perPage: 3,
                    }}
                >
                    {dummy.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className="w-80 relative group p-7 flex items-end shadow-2xl   bg-primary-tealBlue hover:bg-opacity-100 duration-500 ease-in-out bg-opacity-35 rounded-xl overflow-hidden  aspect-[6/5]">
                                <Icon
                                    icon="maki:arrow"
                                    className="text-primary-tealBlue absolute top-7 group-hover:top-6 right-7 group-hover:right-6 z-30 duration-500 ease-in-out  text-2xl -rotate-45"
                                />
                                <div className="absolute w-2/5 h-2/5 -top-2/4 group-hover:-top-1  group-hover:-right-1 duration-700 ease-in-out group-hover:delay-300  -right-2/4   rounded-bl-xl bg-transparent z-10">
                                    <img
                                        src={cardEffect}
                                        alt="effect"
                                        className="absolute  size-1/4 left-0 top-0"
                                    />
                                    <img
                                        src={cardEffect}
                                        alt="effect"
                                        className="absolute  size-1/4 right-0 bottom-0"
                                    />
                                    <div className="absolute bg-white size-3/4 rounded-bl-3xl right-0 top-0"></div>
                                </div>

                                <h1 className="relative text-3xl text-primary-charcoalGray ease-in-out duration-200 group-hover:text-primary-paleSalmon font-semibold z-10">
                                    {item.name}
                                </h1>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div>
    );
};

export default LandingPage;
