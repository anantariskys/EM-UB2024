import React, { useEffect, useRef } from "react";
import { SPI } from "../../data/data";
import CardKementrian from "../../components/CardKementrian";
import KementrianHeader from "../../components/sections/struktur/KementrianHeader";
import ProgramKerja from "../../components/sections/struktur/ProgramKerja";
import Header from "../../components/sections/struktur/Header";
import BPH from "../../components/sections/struktur/BPH";
import { useState } from "react";
import { moveToTop } from "../../utils/util";
const KoordinatorSPI = () => {
  const [isActive, setIsActive] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const showFixedDivPosition = 500;
    setIsActive(scrollPosition >= showFixedDivPosition);
  };

  const scrollToSection = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <div className="font-helvetica-regular bg-primary-white pb-20">
      <Header bpi={SPI[0].bpi} title={"SATUAN PENGENDALI INTERNAL"} />
      <section className="mx-auto px-24 container flex justify-center  gap-5 py-10">
        {SPI[0].kementerian.map((item, index) => (
          <CardKementrian
          name={item.nama}
          key={index}
          onClick={() => scrollToSection(index)}
        />
        ))}
      </section>
      {SPI[0].kementerian.map((item, index) => (
        <>
          <KementrianHeader
              ref={(el) => (refs.current[index] = el)}
              image={item.image}
              nama={item.nama}
              key={index}
            />
          <BPH list={item} />
          <ProgramKerja list={item} key={index} />
        </>
      ))}
         <div
        onClick={() => moveToTop()}
        className={`${isActive ? "visible opacity-100" : "invisible opacity-0"} duration-300 ease-in-out w-10 lg:w-16 border-2 border-primary-charcoalGray aspect-square rounded-full bg-primary-tealBlue fixed bottom-10 right-10`}
      ></div>
    </div>
  );
};

export default KoordinatorSPI;