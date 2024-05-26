import React from "react";
import right from "../../src/assets/ProkerEM/heroRight.png";
import left from "../../src/assets/ProkerEM/heroLeft.png";
import hero from "../../src/assets/ProkerEM/heroImage.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { prokerMegaBesar } from "../data/data";
import { Link } from "react-router-dom";
import segitiga from "../assets/segitiga.png"
const Proker = () => {
    

    return (
        <div className="font-helvetica-regular bg-primary-white w-full">
            <section className="h-screen  w-full px-4  relative flex items-center ">
                <img
                    src={right}
                    className="absolute top-0 right-0 w-[10%] aspect-auto"
                    alt="img"
                    draggable="false"
                />
                <img
                    src={left}
                    className="absolute top-0 left-0 w-[10%] aspect-auto"
                    alt="img"
                    draggable="false"
                />
                <div className="flex justify-center lg:flex-row flex-col relative md:gap-10 gap-5 lg:gap-20 xl:gap-36 items-center container mx-auto">
                    <img
                        src={hero}
                        className="aspect-auto w-4/5 lg:w-1/4 "
                        draggable="false"
                        alt="heroImage"
                    />
                    <div className="font-helvetica-extraBold text-3xl lg:text-start text-center lg:text-5xl text-primary-charcoalGray ">
                        <h1>6 PROKER</h1>
                        <h1>MEGA BESAR</h1>
                        <h1 className="text-primary-tealBlue">EM UB 2024</h1>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 lg:px-24 gap-5 lg:gap-10 flex flex-col">
                <button className="w-fit rounded mx-auto  py-2 px-4 bg-primary-charcoalGray text-primary-white active:scale-95 duration-300 ease-in-out ">
                    MEGA PROKER
                </button>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-5 lg:gap-10 py-10">
                    {prokerMegaBesar.map((item, index) => (
                        <Link to={`/proker/${item.id}`} key={index}>
                        <div className="w-full aspect-[9/7] group hover:shadow-2xl duration-500 ease-in-out relative shadow-xl rounded overflow-hidden">
                            <Splide
                                options={{
                                    autoplay: true,
                                    speed: 500,
                                    interval: 4000,
                                    rewind: true,
                                    rewindSpeed: 500,
                                    arrows: false,
                                }}
                                className="h-full"
                            >
                                {item.image.map((item, index) => (
                                    <SplideSlide className="" key={index}>
                                        <img
                                            src={item}
                                            className="size-full object-cover"
                                            alt="img-proker"
                                        />
                                    </SplideSlide>
                                ))}
                            </Splide>
                            <div className="w-full delay-100 group-hover:opacity-0 duration-500 ease-in-out flex items-center justify-center text-2xl font-helvetica-extraBold text-center px-4  text-primary-white h-full absolute top-0 left-0 bg-black bg-opacity-45">
                                <h1>{item.nama}</h1>

                            </div>
                            <div className="w-full delay-100 h-fit duration-300  ease-linear  rounded-tl-[60px]  py-3   bg-primary-white absolute group-hover:translate-y-0 translate-y-[150%] bottom-0 left-0 px-7 ">
                                <img src={segitiga} className='absolute w-1/5 -translate-y-full  top-0 right-0' alt="" />
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg ">
                                            {item.nama}
                                        </h3>
                                        <div className="w-fit px-3 py-1.5 text-xs rounded-2xl bg-primary-tealBlue text-slate-100">
                                            {item.kementrian}
                                        </div>
                                    </div>
                                    <p className="text-xs line-clamp-3">
                                       {item.body[0]}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>

                    ))}
                </main>
            </section>
        </div>
    );
};

export default Proker;
