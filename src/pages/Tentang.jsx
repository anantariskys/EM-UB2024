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
    const blur = useTransform(scrollYProgress, [0, 0.5], ["0", "10"]);
    
    
  
  
    useMotionValueEvent(blur, "change", (latest) => {
        setblurValue(latest)
    });

  return (
    <div className='scroll-smooth'>
        <motion.section 
        style={{
            filter : `blur(${blurValue}px)`
         
        }}
        
        className='h-screen w-4/5 mx-auto sticky    top-0 pt-20 font-helvetica-extraBold text-primary-tealBlue flex flex-col '>
            <div className='overflow-hidden h-24 '>
                <motion.h1 
                initial={{
                    y:100
                }}
                animate={{
                    y:0
                }}
                transition={{
                    duration:0.3
                }}
                className='text-7xl font-bold h-24  '>Tentang </motion.h1>
            </div>
            <div className='overflow-hidden h-24 '>
            <motion.h1 
            initial={{
                y:100
            }}
            animate={{
                y:0
            }}
            transition={{
                duration:0.3,
                delay:0.1
            }}
            className='text-7xl font-bold  h-24'>Eksekutif Mahasiswa</motion.h1>
            </div>
            <div className='overflow-hidden h-24 '>
            <motion.h1 
            initial={{
                y:100
            }}
            animate={{
                y:0
            }}
            transition={{
                duration:0.3,
                delay:0.2
            }}
            className='text-7xl font-bold h-24 '>Universitas Brawijaya 2024</motion.h1>
            </div>
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