import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CardKementrian = ({name,image,onClick,desc,length,index}) => {
    const target =useRef(null)


    const {scrollYProgress} = useScroll({
        target:target,
        offset:['start end','start center']
    })
    const fadeUp = useTransform(scrollYProgress,[0,1],[200,0])
    const toLeft = useTransform(scrollYProgress,[0,1],[200,0])
    const toRight = useTransform(scrollYProgress,[0,1],[-200,0])
    console.log(length)
    
    
    return (
        <motion.div 
        style={{
            y:fadeUp,
            x:index===length-1?toLeft:index===0?toRight:0,
        }}
        ref={target}  onClick={onClick} className="lg:w-[23%] w-[45%] py-2 lg:py-6 border px-2 lg:px-5  flex flex-col gap-1 border-primary-charcoalGray border-opacity-30 rounded-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl duration-300 ease-in-out">
            <img className="lg:w-4/6 w-4/5 aspect-square mx-auto object-contain " src={image} draggable />
            <div className="font-helvetica-extraBold text-sm lg:text-base">
                <h2 className="text-primary-tealBlue">KEMENTERIAN</h2>
                <h2 className="text-primary-charcoalGray text-sm">{name.replace("KEMENTERIAN","")}</h2>
            </div>
            <p className="text-xs line-clamp-5 overflow-auto">
                {desc}
            </p>
        </motion.div>
    );
};

export default CardKementrian;
