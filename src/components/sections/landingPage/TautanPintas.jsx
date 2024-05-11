import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import cardEffect from "../../../assets/cardTautanEffect.png";
const TautanPintas = () => {
    const dummy = [
        {
            id: 1,
            name: "Profil Alumni",
        },
        {
            id: 2,
            name: "JHID - EM",
        },
        {
            id: 3,
            name: "Profil Alumni",
        },
        {
            id: 4,
            name: "JHID - EM",
        },
    ];
    return (
        <section className="py-10 px-24 mt-20 container mx-auto font-helvetica-regular ">
            <div className="flex w-full gap-5  items-end justify-start mb-10">
                <div className="w-full h-1 bg-gradient-to-r to-primary-skyBlue from-primary-tealBlue"></div>
                <h1 className="text-primary-charcoalGray text-5xl font-black  font-helvetica-extraBold w-fit whitespace-nowrap ">
                    Tautan Pintas
                </h1>
            </div>
            <Splide
                options={{
                    arrows: false,
                    pagination: false,
                    perPage: 4,
                    gap: 20,
                }}
            >
                {dummy.map((item) => (
                    <SplideSlide key={item.id} className="py-5">
                        <div className="w-full relative group p-7 flex items-end shadow-md mx-auto  bg-primary-tealBlue hover:bg-opacity-100 duration-500 ease-in-out bg-opacity-35 rounded-xl overflow-hidden  aspect-[4/3]">
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
    );
};

export default TautanPintas;
