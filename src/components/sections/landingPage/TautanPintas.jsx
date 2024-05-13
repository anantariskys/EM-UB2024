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
        <section className="py-10 px-4 lg:px-24 mt-5 lg:mt-20 container mx-auto font-helvetica-regular ">
            <div className="flex w-full gap-5  items-end justify-start mb-5 lg:mb-10">
                <div className="w-full h-0.5 lg:h-1 bg-gradient-to-r to-primary-skyBlue from-primary-tealBlue"></div>
                <h1 className="text-primary-charcoalGray text-2xl lg:text-5xl font-black  font-helvetica-extraBold w-fit whitespace-nowrap ">
                    Tautan Pintas
                </h1>
            </div>
            <Splide
                options={{
                    arrows: false,
                    pagination: false,
                    perPage: 4,
                    gap: 20,
                    breakpoints: {
                        1280: {
                          perPage:4,
                           
                        },
                        
                        768: {
                          perPage:2
                        },
                        
                      }
                }}
            >
                {dummy.map((item,index) => (
                    <SplideSlide key={item.id} className="py-5">
                        <div className={`${index%4===0?"bg-primary-tealBlue ":index%4==1?"bg-[#628E90]":index%4==2?"bg-[#10a5bc]":"bg-[#2D9596]"} bg-opacity-35  w-full relative group p-3 lg:p-7 flex items-end shadow-md mx-auto   hover:bg-opacity-100 duration-500 ease-in-out  rounded-xl overflow-hidden  aspect-[4/3]`}>
                            <Icon
                                icon="maki:arrow"
                                className="text-primary-tealBlue absolute top-3 lg:top-7 group-hover:top-2 lg:group-hover:top-6 right-3 lg:right-7 lg:group-hover:right-6 group-hover:right-2 z-30 duration-500 ease-in-out text-base lg:text-2xl -rotate-45"
                            />
                            <div className="absolute w-2/5 h-2/5 -top-2/4  lg:group-hover:-top-1 group-hover:-top-0  group-hover:-right-0 lg:group-hover:-right-1 duration-700 ease-in-out group-hover:delay-300  -right-2/4   rounded-bl-xl bg-transparent z-10">
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

                            <h1 className="relative text-base lg:text-3xl text-primary-charcoalGray ease-in-out duration-200 group-hover:text-primary-paleSalmon font-semibold z-10">
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
