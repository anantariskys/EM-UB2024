import { motion } from "framer-motion";
import React from "react";
const ListImage = ({top=0,bottom=0,listImage,index}) => {
  return (
    <motion.div
      style={{
        top: top,
        bottom:bottom,
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
