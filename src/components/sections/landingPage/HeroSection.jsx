import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const HeroSection = () => {
    return (
        <section className="py-10 h-screen w-full bg-white" id="hero">
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
    );
};

export default HeroSection;
