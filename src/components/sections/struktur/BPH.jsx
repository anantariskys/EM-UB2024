import { useScroll, useTransform,motion } from "framer-motion";
import { useRef } from "react";


const BPH = ({list}) => {
    const target = useRef(null); 
    const { scrollYProgress } = useScroll({
      target: target,
      offset: window.innerWidth>728?['start end', 'start center']:['start end', 'start 0.9'],
    });
    const fadeRight = useTransform(scrollYProgress, [0, 1], [250, 0]);
    const fadeLeft = useTransform(scrollYProgress, [0, 1], [-250, 0]);
    const fadeUp = useTransform(scrollYProgress, [0, 1], [250, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  


  return (
    <section className="container mx-auto lg:px-24 px-4 py-5 justify-center flex lg:flex-nowrap flex-wrap gap-1 overflow-hidden">
    {
        list.bph.map((item,index)=>(
    <motion.div 
    ref={target}
    style={{
        y:index!==0&&index!==list.bph.length-1?fadeUp:0,
        x:index===0?fadeLeft:index===list.bph.length-1?fadeRight:0,
        opacity
    }}
    
    className="lg:w-[18%] md:[32%] w-[45%] group" key={index}>
        <div className='w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out  relative'>
        <img draggable="false" className="h-full  object-contain rounded-lg " src={item.image}/>

        </div>
        <h3 className=" text-primary-tealBlue font-helvetica-extraBold text-base">
            {item.nama}
        </h3>
        <p className=" text-primary-charcoalGray text-opacity-70 text-sm">
            {item.jabatan}
        </p>
    </motion.div>

        ))
    }
  
</section>
  )
}

export default BPH