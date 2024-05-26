import { motion, useScroll, useTransform } from 'framer-motion';
import React, { forwardRef, useRef } from 'react';

const KementrianHeader = forwardRef(({ nama, image }, ref) => {
  const targetRef = useRef(null); 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });
  const fadeRight = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const fadeLeft = useTransform(scrollYProgress, [0, 1], [-250, 0]);

  return (
    <section ref={ref} className="container mx-auto lg:px-24 py-5">
      <div ref={targetRef} className="flex justify-center items-center gap-5">
        <motion.div 
          style={{ x: fadeLeft }}
        
        className="w-1/2 font-helvetica-extraBold text-xl lg:text-4xl">
          <h1 className=" text-primary-charcoalGray"> {nama} </h1>
          <h1 className="text-primary-tealBlue"> EM UB 2024 </h1>
        </motion.div>
        <motion.img
          style={{ x: fadeRight }}
          src={image}
          className="w-1/6 object-contain aspect-square rounded-lg"
        />
      </div>
    </section>
  );
});

export default KementrianHeader;