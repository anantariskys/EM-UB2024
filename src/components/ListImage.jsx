import { motion } from "framer-motion";
import React from "react";
const ListImage = ({top,bottom,listImage,index}) => {
  return (
    <motion.div
      style={{
        
        top:top&&top,
        bottom:bottom&&bottom,
      }}
      className={`${index <=1?"hidden lg:flex":"flex"} flex-col  gap-5 lg:w-[16%] w-[25%] relative ease-in-out`}
    >
        {
            listImage.map((item,index)=>(
                <img key={index} src={item} className="aspect-[9/14] w-full object-cover rounded-xl" loading="lazy" alt="img" />
            ))
        }
    </motion.div>
  );
};

export default ListImage;
