import fotowapres from "../../../assets/Struktur/Pres/fotowapres.png";
import kiri2 from "../../../assets/Struktur/Pres/kiri2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import kanan2 from "../../../assets/Struktur/Pres/kanan2.png";
import { useRef } from "react";
const Wapres = () => {
    const target = useRef(null)
    const {scrollYProgress} = useScroll({
        target:target,
        offset:['start end',"end end"]
    })
    const left = useTransform(scrollYProgress,[0,1],[200,0])
    const right = useTransform(scrollYProgress,[0,1],[-200,0])
    const y = useTransform(scrollYProgress,[0,1],[200,0])
    const y2 = useTransform(scrollYProgress,[0,1],[100,0])
    const y3 = useTransform(scrollYProgress,[0,1],[-150,0])
    const opacity = useTransform(scrollYProgress,[0,1],[0,1])
  return (
    <motion.div
    ref={target}
  >
    <section className="w-full h-full flex justify-center relative overflow-hidden">

      <motion.img 
      style={{
        y,
        translateX:'-50%',
        opacity
      }}
      draggable="false" alt="img" src={fotowapres} className="w-1/5 absolute bottom-0 left-1/2  -translate-x-1/2 z-40  " />

      <div className="w-1/2 relative overflow-hidden">
        <motion.div 
          style={{
            translateY:'-50%',
            translateX:'30%',
            y:y2,
            x:right,
            opacity
        }}
        className="text-white md:text-3xl text-xs lg:text-5xl font-helvetica font-extrabold -translate-y-1/2 absolute top-1/2 -translate-x-1/3 left-0">
          <h3>ZAHRA</h3>
          <h3>LAYLA</h3>
          <h3>NISYA</h3>
        </motion.div>

        <motion.h3 
         style={{x:left,opacity}}
        className=" text-white md:text-3xl text-xs lg:text-5xl font-helvetica font-extrabold absolute top-0 lg:top-5 right-0">
          WAKIL
        </motion.h3>
        <img draggable="false" alt="img" src={kiri2} className="" />
      </div>
      <div className="w-1/2 overflow-hidden relative">
        <motion.div 
           style={{
            translateY:'-50%',
            translateX:'-30%',
            y:y3,
            x:left,
            opacity
        }}
        className="text-primary-tealBlue md:text-3xl text-xs lg:text-5xl font-helvetica font-extrabold absolute top-1/2 -translate-x-1/3 right-0">
          <h3>FIKES</h3>
          <h3 className="text-right">21</h3>
        </motion.div>

        <motion.h3 
           style={{x:right,opacity}}
        className=" text-primary-tealBlue md:text-3xl text-xs lg:text-5xl font-helvetica font-extrabold absolute top-0 lg:top-5 ">
          PRESIDEN
        </motion.h3>
        <img draggable="false" alt="img" src={kanan2} className="" />
      </div>
    </section>
  </motion.div>
  )
}

export default Wapres