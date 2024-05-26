import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react'
import { forwardRef } from 'react';
import { useRef } from 'react';
import struktur from "../../../assets/Struktur/Struktur.svg";

const HeroSection = forwardRef((props, ref) =>  {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
      target: target,
      offset: ['start start', 'end center'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    const handleAnimationComplete = () => {
      
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header ref={target} className="bg-white w-full h-screen flex item-center justify-center overflow-hidden">
        {/* Struktur EM UB 24 */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          src={struktur}
          draggable="false"
          alt="hero-img"
          style={{ opacity }}
          className="w-2/5 lg:w-1/5 aspect-auto"
          onAnimationComplete={handleAnimationComplete}
/>
      </header>
    );
  });
  
  export default HeroSection;