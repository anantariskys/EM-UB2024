import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import first from "../../../assets/1.png"
import third from "../../../assets/3.png"
const HeroSection = () => {
    return (
        <section className="lg:py-10   py-5 lg:h-screen w-full " id="hero">
            <Splide
                options={{
                    perPage: 1,
                    focus: "center",
                    breakpoints: {
                        2000: {
                          gap:"-650px",
                           
                        },
                        
                        768: {
                          gap: "-100px" ,
                          arrows:false
                        },
                        
                      }
                }}
            >
                <SplideSlide className="">
                    <div className="w-5/6  lg:w-4/6 mx-auto rounded-xl lg:rounded-3xl relative overflow-hidden aspect-video">
                    <img
                        src={first}
                        className="size-full  object-cover"
                        alt=""
                    />

                    </div>
                </SplideSlide>
                <SplideSlide className="">
                    <div className="w-5/6  lg:w-4/6 mx-auto rounded-xl lg:rounded-3xl relative overflow-hidden aspect-video">
                    <img
                        src={first}
                        className="size-full  object-cover"
                        alt=""
                    />

                    </div>
                </SplideSlide>
                <SplideSlide className="">
                    <div className="w-5/6  lg:w-4/6 mx-auto rounded-xl lg:rounded-3xl relative overflow-hidden aspect-video">
                    <img
                        src={first}
                        className="size-full  object-cover"
                        alt=""
                    />

                    </div>
                </SplideSlide>
             
           
              
            </Splide>
        </section>
    );
};

export default HeroSection;
