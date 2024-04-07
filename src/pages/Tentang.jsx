import { useMotionValueEvent, motion,useScroll, useTransform } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Tentang = () => {
    const [blurValue, setblurValue] = useState(0)
    const target = useRef(null)
    const { scrollYProgress } = useScroll({
        target: target,
        offset:["start end","end start"]
    });
    const value = useTransform(scrollYProgress, [0, 0.2], ["80%", "100%"]);
    const border = useTransform(scrollYProgress, [0, 0.2], ["16px", "0px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], ["0.6", "1"]);
    const blur = useTransform(scrollYProgress, [0, 0.2], ["0", "10"]);
    
    
  
  
    useMotionValueEvent(blur, "change", (latest) => {
        setblurValue(latest)
    });

  return (
    <div className='scroll-smooth'>
        <motion.section 
        style={{
            filter : `blur(${blurValue}px)`
         
        }}
        
        className='h-screen w-4/5 mx-auto sticky    top-0 pt-20 font-helvetica-extraBold text-primary-tealBlue flex flex-col gap-4'>
            <h1 className='text-7xl font-bold z-0  '>Tentang </h1>
            <h1 className='text-7xl font-bold z-0 '>Eksekutif Mahasiswa</h1>
            <h1 className='text-7xl font-bold z-0 '>Universitas Brawijaya 2024</h1>
        </motion.section>
        <motion.section
        style={{
            width:value,
            borderRadius:border,
            opacity:opacity
        }}
        ref={target} className='bg-primary-tealBlue w-4/5 mx-auto p-5 relative z-10 h-[calc(100vh*2)] rounded-2xl opacity-100 -mt-20'>
           
        </motion.section>
    </div>
  )
}

export default Tentang