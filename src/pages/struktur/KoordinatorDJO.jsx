import React from "react";
import { DJO} from "../../data/data";
import CardKementrian from "../../components/CardKementrian";
import KementrianHeader from "../../components/sections/struktur/KementrianHeader";
import ProgramKerja from "../../components/sections/struktur/ProgramKerja";
import BPH from "../../components/sections/struktur/BPH";
import Header from "../../components/sections/struktur/Header";

const KoordinatorDJO = () => {
   

    return (
        <div className="font-helvetica-regular bg-primary-white pb-20">
            <Header title={"KEMENTRIAN KOORDINATOR DIPLOMASI DAN JARINGAN ORGANISASI"}/>
            <section className="mx-auto px-24 container grid content-center  gap-5 py-10 grid-cols-4 grid-rows-1">
                {DJO.map((item, index) => (
                   <CardKementrian name={item.nama} key={index} />
                ))}
            </section>
            {DJO.map((item, index) => (
                <>
                   <KementrianHeader nama={item.nama} key={index}  />
                   <BPH list={item}/>
                   <ProgramKerja list={item} key={index} />
                </>
            ))}
        </div>
    );
};

export default KoordinatorDJO;
