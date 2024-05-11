import React from "react";
import { useState } from "react";
import Logo from "../../../assets/Logo.png";

const filosofi = [
  {
    id: 1,
    title: "Lambang Huruf C",
    desc: `Merupakan pengawalan nama kabinet <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>"Ceritera Kita"</span> yang bermakna <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>EM UB 2024</span> sebagai penggerak yang menciptakan cerita baik, serta memiliki peran besar dengan <span style='font-weight: bold; font-family: \"Helvetica ExtraBold\";'>kehadiran yang subtantif</span> bagi Mahasiswa Universitas Brawijaya.`,
    image: Logo,
  },
  {
    id: 2,
    title: "Lingkaran",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque quisquam. Perferendis fuga exercitationem, quo omnis facere dolorem reprehenderit veritatis aliquid voluptate? Beatae expedita esse iure maxime, commodi optio ipsam?",
    image: Logo,
  },
  {
    id: 3,
    title: "Kotak",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quasi excepturi quis architecto recusandae autem accusamus quas magni laudantium odio dolore eius fuga nisi in, temporibus, cumque delectus praesentium, incidunt cum. Aliquam rerum dicta veniam itaque voluptate?",
    image: Logo,
  },
];

const FilosofiLogo = () => {
  const [activeLogo, setActiveLogo] = useState(filosofi[0]);

  const handleChange=(obj)=>{
    setActiveLogo(obj);
  }

  return (
    <section className="container mx-auto px-24 py-10">
      <div className="flex w-full gap-5 items-end justify-start mb-10">
        <h1 className="text-primary-charcoalGray text-5xl font-black font-helvetica-extraBold w-fit whitespace-nowrap">
          Filosofi Logo
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></div>
      </div>
      <main className="w-full flex items-center justify-around">
        <div className=" w-[5%] flex flex-col gap-3">
            {
                filosofi.map((item)=>(
                    <img
                    onClick={()=>handleChange(filosofi[item.id-1])}
                      src={item.image}
                      className={`${activeLogo.id === item.id?"scale-125":"scale-100"} duration-300 ease-in-out w-full border-2 border-opacity-50 border-primary-charcoalGray aspect-square rounded-lg`}
                    />
                ))
            }
        </div>
        <img
          src={activeLogo.image}
          alt="logo"
          className="aspect-auto w-[30%] "
          draggable="false"
        />
        <div className=" w-3/5">
          <h3 className="font-helvetica-extraBold text-4xl text-primary-paleSalmon">
            {activeLogo.title}
          </h3>
          <p
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: activeLogo.desc }}
          ></p>
        </div>
      </main>
    </section>
  );
};

export default FilosofiLogo;