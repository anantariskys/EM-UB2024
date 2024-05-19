import { motion ,useScroll, useTransform} from "framer-motion";
import React from "react";
import { useRef } from "react";

const CeriteraKita = () => {
    return (
        <section className=" container mx-auto px-4 lg:px-24 w-full flex flex-col-reverse gap-4 lg:flex-row py-5 lg:py-10 items-center justify-between ">
      <div className="lg:w-3/5 w-4/5 font-helvetica-extraBold flex-col flex gap-3 lg:gap-10 text-primary-charcoalGray">
        <h1 className="text-2xl  lg:text-7xl font-bold">EM UB 2024 Kabinet Cerita Kita</h1>
       <Paragraph/>
        {/* <p className="text-base lg:text-2xl font-semibold">
          <span className="bg-gradient-to-br from-primary-navbarText from-10% inline-block font-helvetica-extraBold to-primary-tealBlue bg-clip-text text-transparent font-bold">Ceritera</span> adalah bahasa tidak baku dari{" "}
          <span className="bg-gradient-to-br from-primary-navbarText from-10% inline-block font-helvetica-extraBold to-primary-tealBlue bg-clip-text text-transparent font-bold">Cerita</span> . Mimpi kami adalah mimpi Brawijaya, sehingga
          cerita kami adalah cerita Brawijaya.
        </p> */}
      </div>
      <div className="w-2/5 bg-green-400 aspect-square self-center lg:self-auto"></div>
    </section>
  );
};


const Paragraph = ()=>{
    const paragraph = "Ceritera adalah bahasa tidak baku dari Cerita . Mimpi kami adalah mimpi Brawijaya, sehingga cerita kami adalah cerita Brawijaya.";
    const target = useRef(null)

    const { scrollYProgress}=useScroll({
        target:target,
        offset:[window.innerWidth>768?"start 0.9":"start 0.5","start 0.2"]
    })
    const words = paragraph.split(" ")
    return (
        <p
        ref={target}
        className="flex flex-wrap text-base lg:text-2xl font-semibold "
        >
            {
                words.map((item,index)=>{
                    const start = index / words.length;
                    const end = start + (1 / words.length);

                    return <Word key={index} index={index} range={[start,end]} progress={scrollYProgress}>{item}</Word>
})
            }

        </p>
    )
}

const Word =({children,progress,range,index})=>{
    const opacity = useTransform(progress,range,[0,1])
    return(
        <span className="relative">
            <span className="absolute opacity-40 lg:mr-4 mr-2 leading-relaxed lg:leading-10">
                {children}
            </span>
        <motion.span
        style={{opacity}}
        className={`${index===0||index===6?'bg-gradient-to-br from-primary-navbarText from-10% inline-block font-helvetica-extraBold to-primary-tealBlue bg-clip-text text-transparent font-bold':""} lg:mr-4 mr-2 leading-relaxed lg:leading-10`}
        >
            {children}
        </motion.span>
            </span>

    )
}

export default CeriteraKita;
