import kiri1 from "../../../assets/Struktur/Pres/kiri1.png";
import fotopres from "../../../assets/Struktur/Pres/fotopres.png";
import kanan1 from "../../../assets/Struktur/Pres/kanan1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { forwardRef } from "react";

const Pres =forwardRef((props, ref) => {
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
    <div ref={ref}>

    <motion.div
    ref={target}
   
    
  >
    <section  className="w-full h-full flex justify-center relative overflow-hidden">

      <motion.img 
      style={{
        y,
        translateX:'-50%',
        opacity
      }}
      draggable="false" alt="img" src={fotopres} className="w-1/5 absolute bottom-0 left-1/2   z-40 " />


      <div className="w-1/2 relative z-30 overflow-hidden">
        <motion.h3 
        style={{
            translateY:'-50%',
            translateX:'30%',
            y:y3,
            x:right,
            opacity
        }}
        className="text-primary-tealBlue md:text-3xl text-xs lg:text-5xl z-40 font-helvetica font-extrabold absolute top-1/2 -translate-x-1/3 left-0">
          FISIP<br></br>20
        </motion.h3>
        <motion.h3 
        style={{x:left,opacity}}
        className=" text-primary-tealBlue md:text-3xl text-xs lg:text-5xl z-40 font-extrabold absolute top-0 lg:top-5 right-0">
          PRES
        </motion.h3>
        <motion.img 
       
        draggable="false" alt="img" src={kiri1} className="w-full object-contain relative z-10" />
      </div>
      <div className="w-1/2 relative z-30 overflow-hidden">
        <motion.div 
        style={{
            translateY:'-50%',
            translateX:'-30%',
            y:y2,
            x:left,
            opacity
        }}
        className="text-white text-right md:text-3xl text-xs lg:text-5xl z-40 font-helvetica font-extrabold -translate-y-1/2 absolute top-1/2 -translate-x-1/3 right-0">
          <h3>SATRIA</h3>
          <h3>NAUFAL</h3>
          <h3>PUTRA</h3>
          <h3>ANSAR</h3>
        </motion.div>

        <motion.h3 
            style={{x:right,opacity}}
        
        className="text-white md:text-3xl text-xs lg:text-5xl font-helvetica z-40 font-extrabold absolute top-0 lg:top-5  ">
          IDEN
        </motion.h3>
        <motion.img 
        style={{
          
        }}
        draggable="false" alt="img" src={kanan1} className="w-full object-contain relative z-20" />
      </div>
    </section>
  </motion.div>
  </div>
  )
})

export default Pres
