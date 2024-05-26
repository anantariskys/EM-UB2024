import { useScroll, useTransform ,motion} from 'framer-motion';
import React, { useRef } from 'react'

const Kabinet = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
      target: target,
      offset: ["start end", "end end"],
  });
  const value1 = useTransform(scrollYProgress, [0, 1], [-200,0]);
  const value2 = useTransform(scrollYProgress, [0, 1], [300,0]);
  const valueY = useTransform(scrollYProgress, [0, 1], [400,0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0,1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8,1]);
  return (
    <section ref={target} className="h-screen  overflow-hidden container mx-auto px-4 lg:px-24  flex items-center justify-center">
    <div className="w-fit">
        <motion.h3 
        style={{
            x:value1,
            opacity,
            scale
        }}
        
        
        className="text-2xl lg:text-6xl text-shadow-heading text-primary-tealBlue font-medium">
            Kabinet
        </motion.h3>
        <motion.h1 
        style={{
            x:value2,
            opacity,
            scale
        }}
        className="text-4xl lg:text-8xl text-shadow-heading font-helvetica-extraBold text-primary-tealBlue font-black">
            CERITERA KITA
        </motion.h1>
        <motion.p 
        style={{
            y:valueY,
            scale,
        }}
        className="text-base lg:text-3xl text-shadow-heading text-primary-tealBlue text-center italic">
            "TULISKAN CERITA, MENGGAPAI ASA, WIJAYA"
        </motion.p>
    </div>
</section>
  )
}

export default Kabinet