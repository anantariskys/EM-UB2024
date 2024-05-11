import React from "react";
import right from "../../src/assets/ProkerEM/heroRight.png";
import left from "../../src/assets/ProkerEM/heroLeft.png";
import hero from "../../src/assets/ProkerEM/heroImage.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Proker = () => {
    
    const data = [
        {
          title: "Judul Proker",
          tanggal: "20 April 2024",
          kementeraian: "LUGRI",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto nulla. Aliquid, enim commodi minima reiciendis dolorum nulla tempora ut hic facere voluptates ea! Modi quas odio sunt repellendus accusamus!",
          image: [
            "https://source.unsplash.com/random/900×700/?graduate",
            "https://source.unsplash.com/random/900×700/?school",
            "https://source.unsplash.com/random/900×700/?university",
          ],
        },
        {
          title: "Proker Baru",
          tanggal: "15 Mei 2024",
          kementeraian: "KEMENDIKBUD",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          image: [
            "https://source.unsplash.com/random/900×700/?education",
            "https://source.unsplash.com/random/900×700/?learning",
            "https://source.unsplash.com/random/900×700/?study",
          ],
        },
        {
          title: "Program Pendidikan",
          tanggal: "1 Juni 2024",
          kementeraian: "KEMENDIKBUD",
          desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          image: [
            "https://source.unsplash.com/random/900×700/?classroom",
            "https://source.unsplash.com/random/900×700/?teacher",
            "https://source.unsplash.com/random/900×700/?student",
          ],
        },
        {
          title: "Proker Kesehatan",
          tanggal: "10 Juli 2024",
          kementeraian: "KEMENKES",
          desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          image: [
            "https://source.unsplash.com/random/900×700/?hospital",
            "https://source.unsplash.com/random/900×700/?doctor",
            "https://source.unsplash.com/random/900×700/?nurse",
          ],
        },
        {
          title: "Proker Pertanian",
          tanggal: "25 Agustus 2024",
          kementeraian: "KEMENTAN",
          desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
          image: [
            "https://source.unsplash.com/random/900×700/?farm",
            "https://source.unsplash.com/random/900×700/?crop",
            "https://source.unsplash.com/random/900×700/?harvest",
          ],
        },
        {
          title: "Proker Lingkungan",
          tanggal: "5 September 2024",
          kementeraian: "KLHK",
          desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          image: [
            "https://source.unsplash.com/random/900×700/?nature",
            "https://source.unsplash.com/random/900×700/?environment",
            "https://source.unsplash.com/random/900×700/?conservation",
          ],
        },
       
      ];
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

            <section className="container mx-auto px-24 gap-10 flex flex-col">
                <button className="w-fit rounded mx-auto  py-2 px-4 bg-primary-charcoalGray text-primary-white active:scale-95 duration-300 ease-in-out ">
                    MEGA PROKER
                </button>
                <main className="grid grid-cols-3 grid-rows-1 gap-10 py-10">
                    {data.map((item, index) => (
                        <div className="w-full aspect-[8/7] group relative shadow-xl rounded overflow-hidden">
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
                                    <SplideSlide>
                                        <img
                                            src={item}
                                            className="size-full object-cover"
                                            alt="img-proker"
                                        />
                                    </SplideSlide>
                                ))}
                            </Splide>
                            <div className="w-full  group-hover:max-h-screen group-hover:duration-500 duration-300 ease-linear max-h-0 rounded-tl-[40px] overflow-hidden group-hover:py-3 py-0   bg-primary-white absolute bottom-0 left-0 px-7 ">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <div className="w-fit px-3 py-1.5 text-xs rounded-2xl bg-primary-tealBlue text-slate-100">
                                            {item.kementeraian}
                                        </div>
                                    </div>
                                    <small className="text-xs">
                                        {item.tanggal}
                                    </small>
                                    <p className="text-xs line-clamp-3">
                                       {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
        </div>
    );
};

export default Proker;
