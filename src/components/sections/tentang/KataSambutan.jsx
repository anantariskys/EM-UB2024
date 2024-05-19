import { motion, useScroll, useTransform } from 'framer-motion';
import  { useRef } from 'react'
import Petinggi from "../../../assets/petinggi.png"
import SambutanScroll from './SambutanScroll';

const KataSambutan = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
      target: target,
      offset: ["start end", "start start"],
  });

 
  const xLeft = useTransform(scrollYProgress, [0,1], [-200,0]);

  return (
    <main ref={
        target
    } className="flex flex-col lg:flex-row mt-5 lg:mt-10 items-center gap-10 justify-between font-helvetica-regular">
        <motion.img
        style={{
            x:xLeft
        }}
        
        src={Petinggi} className="lg:w-2/5 aspect-square  rounded-md object-contain" draggable="false"/>
       <SambutanScroll/>
    </main>
  )
}




export default KataSambutan