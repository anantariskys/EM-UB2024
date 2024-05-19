import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Petinggi from "../../../assets/petinggi.png"
import Rektorat from "../../../assets/rektorat.png";
import KataSambutan from './KataSambutan';

const Sambutan = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
      target: target,
      offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0,1], [0.7,1]);
  const xRight = useTransform(scrollYProgress, [0,1], [200,0]);


  
  return (
    <section ref={target} className="relative overflow-hidden scroll-smooth z-30 font-helvetica-extraBold flex flex-col items-center  container mx-auto lg:px-24 px-4 py-10 ">
    <motion.h1
        className={`lg:text-[12rem]  text-5xl  text-shadow-heading bg-clip-text text-transparent text-center`}
        style={{
            backgroundImage: `url(${Rektorat})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale
        }}
    >
        SAMBUTAN
    </motion.h1>
    <motion.h3
    style={{
        x:xRight
    }}
    className="text-sm   lg:text-5xl text-shadow-heading  self-center bg-gradient-to-b from-primary-tealBlue to-primary-charcoalGray bg-clip-text text-transparent ">
        Presiden dan Wakil Presiden
    </motion.h3>
    <KataSambutan/>
   
</section>
  )
}

export default Sambutan