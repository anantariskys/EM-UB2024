import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "../../src/styles/detailBerita.css";
import Card from "../components/detailBerita/Card";

const DetailBerita = () => {

    const dummy = [
        {
          title: 'Program Kegiatan Mahasiswa Berprestasi',
          img: 'https://source.unsplash.com/random/900×700/?student-achievement',
          date: '15 Mei 2024',
        },
        {
          title: 'Proker Universitas Terbaik 2024',
          img: 'https://source.unsplash.com/random/900×700/?university-award',
          date: '1 Juni 2024',
        },
        {
          title: 'Kompetisi Karya Ilmiah Tingkat Nasional',
          img: 'https://source.unsplash.com/random/900×700/?scientific-research',
          date: '10 Juli 2024',
        },
      ];

    return (
        <div className="bg-primary-white font-helvetica-regular bg-paper">
            <section className="lg:h-[75vh] ">
                <Splide
                    options={{
                        autoplay: true,
                        speed: 500,
                        interval: 2000,
                        rewind: true,
                        rewindSpeed: 500,
                    }}
                >
                    <SplideSlide className="lg:h-[75vh] h-[25vh] ">
                        <img
                            src="https://source.unsplash.com/random/900×700/?food"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </SplideSlide>
                    <SplideSlide className="lg:h-[75vh] h-[25vh] ">
                        <img
                            src="https://source.unsplash.com/random/900×700/?villain"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </SplideSlide>
                    <SplideSlide className="lg:h-[75vh] h-[25vh] ">
                        <img
                            src="https://source.unsplash.com/random/900×700/?superhero"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </SplideSlide>
                </Splide>
            </section>
            <section className="mx-auto container px-2 lg:px-10 pb-5 lg:pb-20 ">
                <div className="w-full bg-gradient-to-b px-0.5 pb-0.5 from-primary-charcoalGray rounded-b-lg to-primary-tealBlue">
                    <div className="bg-primary-white bg-paper w-full lg:px-5 px-2 pb-2 lg:pb-5 rounded-b-lg">
                        <div className="w-full bg-gradient-to-b px-0.5 pb-0.5 from-primary-charcoalGray rounded-b-lg to-primary-tealBlue">
                            <div className="bg-primary-white bg-paper w-full  rounded-b-lg px-2 lg:px-20">
                                <div className="shadow-2xl w-full -mt-8 lg:-mt-10 relative z-30 p-4 lg:p-12 bg-primary-white border border-primary-charcoalGray border-opacity-15">
                                    <div className="w-fit px-3 py-1.5 text-xs rounded-2xl mx-auto bg-primary-tealBlue text-slate-100">
                                        LUGRI
                                    </div>
                                    <h1 className="lg:text-5xl text-2xl font-helvetica-extraBold w-full lg:w-5/6 mx-auto text-center mt-3 text-primary-charcoalGray">
                                        Judul Proker Judul Proker Judul Proker
                                        Judul Proker
                                    </h1>
                                    <p className="w-fit mx-auto mt-3 text-primary-tealBlue text-xl">
                                        20 April 2024
                                    </p>
                                    <main className="flex flex-col gap-2 lg:gap-5 px-5 lg:px-36 text-primary-charcoalGray">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Vestibulum dignissim elit nec risus
                                            lacinia, id lacinia urna tristique.
                                            Curabitur aliquet, sem a sagittis
                                            congue, urna massa consequat massa,
                                            auctor pulvinar odio ante vel
                                            turpis. Sed at sapien convallis,
                                            fermentum felis ut, tincidunt justo.
                                            Phasellus auctor elit tortor, nec
                                            tincidunt purus tempus ut. Nunc
                                            congue, ex sit amet rutrum eleifend,
                                            justo nulla convallis risus, vel
                                            auctor erat lectus.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Vestibulum dignissim elit nec risus
                                            lacinia, id lacinia urna tristique.
                                            Curabitur aliquet, sem a sagittis
                                            congue, urna massa consequat massa,
                                            auctor pulvinar odio ante vel
                                            turpis. Sed at sapien convallis,
                                            fermentum felis ut, tincidunt justo.
                                            Phasellus auctor elit tortor, nec
                                            tincidunt purus tempus ut. Nunc
                                            congue, ex sit amet rutrum eleifend,
                                            justo nulla convallis risus, vel
                                            auctor erat lectus.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Vestibulum dignissim elit nec risus
                                            lacinia, id lacinia urna tristique.
                                            Curabitur aliquet, sem a sagittis
                                            congue, urna massa consequat massa,
                                            auctor pulvinar odio ante vel
                                            turpis. Sed at sapien convallis,
                                            fermentum felis ut, tincidunt justo.
                                            Phasellus auctor elit tortor, nec
                                            tincidunt purus tempus ut. Nunc
                                            congue, ex sit amet rutrum eleifend,
                                            justo nulla convallis risus, vel
                                            auctor erat lectus.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Vestibulum dignissim elit nec risus
                                            lacinia, id lacinia urna tristique.
                                            Curabitur aliquet, sem a sagittis
                                            congue, urna massa consequat massa,
                                            auctor pulvinar odio ante vel
                                            turpis. Sed at sapien convallis,
                                            fermentum felis ut, tincidunt justo.
                                            Phasellus auctor elit tortor, nec
                                            tincidunt purus tempus ut. Nunc
                                            congue, ex sit amet rutrum eleifend,
                                            justo nulla convallis risus, vel
                                            auctor erat lectus.
                                        </p>
                                    </main>
                                </div>
                                <div className="py-5 lg:py-10 ">
                                    <h3 className="lg:text-2xl text-lg font-helvetica-extraBold text-primary-tealBlue">
                                        BERITA LAINNYA
                                    </h3>
                                    <div className="grid grid-cols-3 grid-rows-1 gap-1 lg:gap-10 mt-5">
                                        {
                                            dummy.map((item,index)=>(
                                                <Card img={item.img} key={index} title={item.title} time={item.date} />
                                            ))
                                        }   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailBerita;
