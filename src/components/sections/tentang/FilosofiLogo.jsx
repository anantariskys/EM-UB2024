import React, { useRef } from "react";
import { useState } from "react";
import filosofi1 from "../../../assets/filosofi1.png";
import filosofi2 from "../../../assets/filosofi2.png";
import logo from "../../../assets/Logo_2.png"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
  const [activeLogo, setActiveLogo] = useState({
    title:"Kabinet Ceritera Kita",
    desc:"",
    image :logo
  });
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end end"],
});
const value1 = useTransform(scrollYProgress, [0, 1], [-200,0]);
const value2 = useTransform(scrollYProgress, [0, 1], [200,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [0,1]);


  const handleChange = (obj) => {
    setActiveLogo(obj);
  };

  return (
    <section ref={target} className="container mx-auto relative z-30 lg:px-24 px-4 py-32 lg:py-10   ">
      <div className="flex w-full lg:gap-5 gap-2 items-end justify-start mb-10">
        <motion.h1 
        initial={{
          x:-200,
          opacity:0
        }}
       
       
        style={{
          x:value1,
          opacity

        }}
        transition={{
         
          duration:1.2
        }}
        className="text-primary-tealBlue text-2xl lg:text-5xl font-black font-helvetica-extraBold w-fit whitespace-nowrap">Filosofi Logo</motion.h1>
        <motion.div 
        initial={{
          x:200,
          opacity:0
        }}
        style={{
          x:value2,
          opacity
        }}
        
       
        transition={{
         
          duration:1.2
        }}
        
        
        className="w-full lg:h-1 h-0.5 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></motion.div>
      </div>
      <main className="w-full flex flex-col lg:flex-row items-center gap-5 justify-around">
        <div className="w-1/6 lg:w-[5%] flex flex-row relative lg:flex-col gap-3 justify-center">
          {filosofi.map((item) => (
            <motion.img
           
            style={{
              opacity
            }}
              onClick={() => handleChange(filosofi[item.id - 1])}
              src={item.image}
              className={`${activeLogo.id === item.id ? "scale-125" : "scale-100"} duration-300 ease-in-out w-full border-2 border-opacity-50 border-primary-charcoalGray object-contain aspect-square rounded-lg`}
            />
          ))}
        </div>
        <div className=" w-4/5 lg:w-[30%] aspect-square relative">
          <AnimatePresence>
            <motion.img
              key={activeLogo.id}
              src={activeLogo.image}
              alt="logo"
              className="aspect-square object-contain size-full absolute"
              draggable="false"
              initial={{  opacity: 0 }}
              animate={{  opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <div className="w-4/5 lg:w-3/5 relative flex items-center">
          
            <AnimatePresence>
              <motion.div 
              className="absolute"
              key={activeLogo.id} 
              initial={{ x: 200, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{  opacity: 0 }} 
              transition={{ duration: 0.3, ease: "easeInOut" }}>
                <h3 className="font-helvetica-extraBold text-2xl lg:text-4xl text-primary-tealBlue">{activeLogo.title}</h3>
                <p className="lg:text-2xl text-base text-primary-charcoalGray" dangerouslySetInnerHTML={{ __html: activeLogo.desc }}></p>
              </motion.div>
            </AnimatePresence>
         
        </div>
      </main>
    </section>
  );
};

export default FilosofiLogo;
