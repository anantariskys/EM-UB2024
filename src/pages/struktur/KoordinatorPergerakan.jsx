import React from "react";
import { Pergerakan } from "../../data/data";
import CardKementrian from "../../components/CardKementrian";
import KementrianHeader from "../../components/sections/struktur/KementrianHeader";
import ProgramKerja from "../../components/sections/struktur/ProgramKerja";
import Header from "../../components/sections/struktur/Header";
import BPH from "../../components/sections/struktur/BPH";

const KoordinatorPergerakan = () => {
   

    return (
        <div className="font-helvetica-regular bg-primary-white pb-20">
            <Header title={"KEMENTRIAN KOORDINATOR PERGERAKAAN"}/>
            <section className="mx-auto px-24 container grid gap-5 py-10 grid-cols-4 grid-rows-1">
                {Pergerakan.map((item, index) => (
                   <CardKementrian name={item.nama} key={index} />
                ))}
            </section>
            {Pergerakan.map((item, index) => (
                <>
                   <KementrianHeader nama={item.nama} key={index}  />
                   <BPH list={item}/>
                   <ProgramKerja list={item} key={index} />
                </>
            ))}
        </div>
    );
};

export default KoordinatorPergerakan;
