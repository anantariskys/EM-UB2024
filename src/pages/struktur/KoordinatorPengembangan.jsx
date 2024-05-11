import React from "react";
import right from "../../../src/assets/ProkerEM/heroRight.png";
import left from "../../../src/assets/ProkerEM/heroLeft.png";
import { Pengembangan } from "../../data/data";
import CardKementrian from "../../components/CardKementrian";
import KementrianHeader from "../../components/sections/struktur/KementrianHeader";
import ProgramKerja from "../../components/sections/struktur/ProgramKerja";
import BPH from "../../components/sections/struktur/BPH";

const KoordinatorPengembangan = () => {
   

    return (
        <div className="font-helvetica-regular bg-primary-white pb-20">
            <section className="w-full relative">
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
                <div className="container mx-auto px-24 h-[85vh] flex items-center ">
                    <div className="w-1/2 font-helvetica-extraBold text-4xl">
                        <h1 className=" text-primary-charcoalGray">
                            KEMENTRIAN KOORDINATOR PENGEMBANGAN
                        </h1>
                        <h1 className="text-primary-tealBlue">EM UB 2024</h1>
                    </div>
                    <div className="flex gap-2 w-1/2 self-end">
                        <div className="w-1/2">
                            <div className="w-full aspect-[9/13] rounded-lg bg-primary-tealBlue"></div>
                            <h3 className="text-xl text-primary-tealBlue font-helvetica-extraBold text">
                                Pinkhan Azarin Rakhmawaty
                            </h3>
                            <p className="text-base text-primary-charcoalGray text-opacity-70">
                                Menteri Koordinator Pengambangan
                            </p>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full aspect-[9/13] rounded-lg bg-primary-tealBlue"></div>
                            <h3 className="text-xl text-primary-tealBlue font-helvetica-extraBold text">
                                Andini Tasya Putri Pratama
                            </h3>
                            <p className="text-base text-primary-charcoalGray text-opacity-70">
                                Sekertaris Kementrian Koordinator Pengembangan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto px-24 container grid gap-5 py-10 grid-cols-4 grid-rows-1">
                {Pengembangan.map((item, index) => (
                   <CardKementrian name={item.nama} key={index} />
                ))}
            </section>
            {Pengembangan.map((item, index) => (
                <>
                   <KementrianHeader nama={item.nama} key={index}  />
                  <BPH list={item}/>
                    <ProgramKerja list={item} key={index} />
                </>
            ))}
        </div>
    );
};

export default KoordinatorPengembangan;
