import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Quotes from '../../../assets/LandingPage/quotes.png'
const Berita = () => {
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
            id: 1,
            name: "Profil Alumni",
        },
        {
            id: 2,
            name: "JHID - EM",
        },
        {
            id: 1,
            name: "Profil Alumni",
        },
        {
            id: 2,
            name: "JHID - EM",
        },
    ];
    return (
        <section className=" px-24 mt-20 font-helvetica-regular container mx-auto ">
            <div className="flex items-end gap-5">
                <div className="flex flex-col font-helvetica-extraBold w-fit whitespace-nowrap">
                    <h3 className="text-primary-charcoalGray text-5xl font-black ">
                        BERITA
                    </h3>
                    <h3 className="text-primary-tealBlue text-5xl font-black ">
                        EM UB 2024
                    </h3>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></div>
            </div>
            <main className="px-20 py-10 relative">
                <Splide 
                options={{
                    perPage:3,
                    gap:20,
                    perMove:1,
                    autoplay:true,
                    speed:500,
                    interval:4000,
                    rewind:true,
                    rewindSpeed:500,
                    pagination:false

                }}
                >
                  {
                    dummy.map((item)=>(
                        <SplideSlide className=" h-fit">
                        <div className="aspect-[9/13] w-full  relative rounded border overflow-hidden">
                            <img src="https://source.unsplash.com/random/900×700/?university" className="w-full aspect-video" alt="" />
                            <div className="w-full  py-1 px-2 ">
                                <div className="flex items-start justify-between">
                                    <small className="text-xs">20 April 2024</small>
                                    <div className="w-fit px-3 py-1.5 text-xs rounded-2xl bg-primary-tealBlue text-slate-100">LUGRI</div>
                                </div>
                                <div className="px-5">
                                <h1 className="mt-3 text-2xl font-bold h-16 line-clamp-2">JUDUL BERITA JUDUL BERITA JUDUL BERITA JUDUL BERITA </h1>
                                <p className="text-xs h-fit mt-3 line-clamp-4">Isi berita lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consect piscing elit. Isi berita lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor si</p>

                                </div>
                                <button className="w-4/6 absolute left-1/2 bottom-5 -translate-x-1/2 mx-auto rounded  py-2 bg-primary-charcoalGray text-slate-100 active:scale-95 duration-300 ease-in-out ">Baca Selengkapnya</button>

                            </div>
                        </div>
                        </SplideSlide>
                    ))
                  }
                </Splide>
            </main>
            <div className="flex items-center gap-5">
                <div className="w-4/6 h-1 bg-gradient-to-r to-primary-skyBlue from-primary-tealBlue"></div>
               <img src={Quotes} alt="quotes"  className="h-12 aspect-auto" />
            </div>
        </section>
    );
};

export default Berita;
