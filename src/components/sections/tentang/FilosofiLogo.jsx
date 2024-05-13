import React from "react";
import { useState } from "react";
import filosofi1 from "../../../assets/filosofi1.png";
import filosofi2 from "../../../assets/filosofi2.png";

const filosofi = [
  {
    id: 1,
    title: "Lambang Huruf C",
    desc: `Merupakan pengawalan nama kabinet <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>"Ceritera Kita"</span> yang bermakna <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>EM UB 2024</span> sebagai penggerak yang menciptakan cerita baik, serta memiliki peran besar dengan <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>kehadiran yang subtantif</span> bagi Mahasiswa Universitas Brawijaya.`,
    image: filosofi1,
  },
  {
    id: 2,
    title: "3 Titik",
    desc: `melambangkan <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>EM UB 2024 sebagai konektor</span>  yang merajut <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>simpul Brawijaya</span> seluruh   serta ekpansi jaringan yang <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>didistribusikan</span> kepada simpul lainnya`,
    image: filosofi2,
  },
];

const FilosofiLogo = () => {
  const [activeLogo, setActiveLogo] = useState(filosofi[0]);

  const handleChange=(obj)=>{
    setActiveLogo(obj);
  }

  return (
    <section className="container mx-auto lg:px-24 px-4 py-10">
      <div className="flex w-full lg:gap-5 gap-2 items-end justify-start mb-10">
        <h1 className="text-primary-charcoalGray text-2xl lg:text-5xl font-black font-helvetica-extraBold w-fit whitespace-nowrap">
          Filosofi Logo
        </h1>
        <div className="w-full lg:h-1 h-0.5 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></div>
      </div>
      <main className="w-full flex flex-col lg:flex-row items-center gap-5 justify-around">
        <div className="w-1/6 lg:w-[5%] flex flex-row lg:flex-col gap-3 justify-center">
            {
                filosofi.map((item)=>(
                    <img
                    onClick={()=>handleChange(filosofi[item.id-1])}
                      src={item.image}
                      className={`${activeLogo.id === item.id?"scale-125":"scale-100"} duration-300 ease-in-out w-full border-2 border-opacity-50 border-primary-charcoalGray object-contain aspect-square rounded-lg`}
                    />
                ))
            }
        </div>
        <img
          src={activeLogo.image}
          alt="logo"
          className="aspect-square object-contain w-4/5 lg:w-[30%] "
          draggable="false"
        />
        <div className="w-4/5 lg:w-3/5">
          <h3 className="font-helvetica-extraBold text-2xl lg:text-4xl text-primary-paleSalmon">
            {activeLogo.title}
          </h3>
          <p
            className="lg:text-2xl text-base text-primary-charcoalGray"
            dangerouslySetInnerHTML={{ __html: activeLogo.desc }}
          ></p>
        </div>
      </main>
    </section>
  );
};

export default FilosofiLogo;