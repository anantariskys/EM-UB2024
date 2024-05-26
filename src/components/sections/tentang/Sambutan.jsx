import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Petinggi from "../../../assets/petinggi.png"
import Rektorat from "../../../assets/rektorat.png";
import KataSambutan from './KataSambutan';
import SambutanImage from '../../../assets/sambutan.png'

const Sambutan = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
      target: target,
      offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0,1], [0.7,1]);


  
  return (
    <section ref={target} className="relative overflow-hidden scroll-smooth z-30 font-helvetica-extraBold flex flex-col items-center  container mx-auto lg:px-24 px-4 py-10 ">
    <motion.img
    style={{ scale}}
    draggable="false"
    src={SambutanImage} alt="img" className='w-4/5 aspect-auto mx-auto' />
  
    <KataSambutan/>
   
</section>
  )
}

export default Sambutan