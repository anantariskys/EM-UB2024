import React from "react";
import right from "../../src/assets/ProkerEM/heroRight.png";
import left from "../../src/assets/ProkerEM/heroLeft.png";
import hero from "../../src/assets/ProkerEM/heroImage.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { prokerMegaBesar } from "../data/data";
import { Link } from "react-router-dom";
const Proker = () => {
    

    return (
        <div className="font-helvetica-regular bg-primary-white w-full">
            <section className="h-screen  w-full  relative flex items-center ">
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
                <div className="flex justify-center relative md:gap-10 gap5 lg:gap-20 xl:gap-36 items-center container mx-auto">
                    <img
                        src={hero}
                        className="aspect-auto  w-1/4 "
                        draggable="false"
                        alt="heroImage"
                    />
                    <div className="font-helvetica-extraBold  text-5xl text-primary-charcoalGray ">
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
                <main className="grid grid-cols-3 grid-rows-1 gap-10 py-10">
                    {prokerMegaBesar.map((item, index) => (
                        <Link to={`/proker/${item.id}`} key={index}>
                        <div className="w-full aspect-[9/7] group relative shadow-xl rounded overflow-hidden">
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
                            <div className="w-full delay-100  group-hover:max-h-screen group-hover:duration-500 duration-300 ease-linear max-h-0 rounded-tl-[40px] overflow-hidden group-hover:py-3 py-0   bg-primary-white absolute bottom-0 left-0 px-7 ">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg line-clamp-1">
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
