import React from "react";
import right from "../../src/assets/ProkerEM/heroRight.png";
import left from "../../src/assets/ProkerEM/heroLeft.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const DetailProker = () => {
    return (
        <div className="bg-primary-white relative font-helvetica-regular">
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
            <header className="container px-24 mx-auto py-10">
                    <div className="w-fit px-3 py-1.5 text-xs rounded-2xl mx-auto bg-primary-tealBlue text-slate-100">
                        LUGRI
                    </div>
                    <h1 className="text-5xl font-helvetica-extraBold w-5/6 mx-auto text-center mt-3">Judul Proker Judul Proker Judul Proker Judul Proker</h1>
                    <p className="w-fit mx-auto mt-3 text-primary-tealBlue text-xl">20 April 2024</p>
                <main className="w-full mt-5 px-10">
                    <Splide
                    options={{
                      autoplay: true,
                      speed: 500,
                      interval: 4000,
                      rewind: true,
                      rewindSpeed: 500,
                    }}
                    >
                      <SplideSlide>
                        <img src="https://source.unsplash.com/random/900×700/?plane" alt="img-proker" className="w-full aspect-video object-cover" />
                      </SplideSlide>
                      <SplideSlide>
                        <img src="https://source.unsplash.com/random/900×700/?pilot" alt="img-proker" className="w-full aspect-video object-cover" />
                      </SplideSlide>
                      <SplideSlide>
                        <img src="https://source.unsplash.com/random/900×700/?university" alt="img-proker" className="w-full aspect-video object-cover" />
                      </SplideSlide>
                    </Splide>
                    <div className="border border-primary-charcoalGray flex flex-col gap-10 border-opacity-20 shadow-lg p-10">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Curabitur aliquet, sem a sagittis congue, urna massa consequat massa, auctor pulvinar odio ante vel turpis. Sed at sapien convallis, fermentum felis ut, tincidunt justo. Phasellus auctor elit tortor, nec tincidunt purus tempus ut. Nunc congue, ex sit amet rutrum eleifend, justo nulla convallis risus, vel auctor erat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Phasellus auctor elit tortor, nec tincidunt purus tempus ut.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Curabitur aliquet, sem a sagittis congue, urna massa consequat massa, auctor pulvinar odio ante vel turpis. Sed at sapien convallis, fermentum felis ut, tincidunt justo. Phasellus auctor elit tortor, nec tincidunt purus tempus ut. Nunc congue, ex sit amet rutrum eleifend, justo nulla convallis risus, vel auctor erat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Phasellus auctor elit tortor, nec tincidunt purus tempus ut.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Curabitur aliquet, sem a sagittis congue, urna massa consequat massa, auctor pulvinar odio ante vel turpis. Sed at sapien convallis, fermentum felis ut, tincidunt justo. Phasellus auctor elit tortor, nec tincidunt purus tempus ut. Nunc congue, ex sit amet rutrum eleifend, justo nulla convallis risus, vel auctor erat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim elit nec risus lacinia, id lacinia urna tristique. Phasellus auctor elit tortor, nec tincidunt purus tempus ut.</p>

                    </div>
                </main>
            </header>
        </div>
    );
};

export default DetailProker;
