import right from "../../../../src/assets/ProkerEM/heroRight.png";
import left from "../../../../src/assets/ProkerEM/heroLeft.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Header = ({title,bpi}) => {
    const target = useRef(null);
    const {scrollYProgress} = useScroll({
        target:target,
        offset:['start start','end center']
    })

    const fadeOutRight = useTransform(scrollYProgress,[0,1],[0,window.innerWidth/3]);
    const fadeOutLeft = useTransform(scrollYProgress,[0,1],[0,-window.innerWidth/3]);
    const fadeOutTop = useTransform(scrollYProgress,[0,1],[0,-window.innerHeight/3]);
    const fadeOutBottom = useTransform(scrollYProgress,[0,1],[0,window.innerHeight-200]);
    const opacity = useTransform(scrollYProgress,[0,1],[1,0]);

  return (
    <section ref={target} className="w-full relative overflow-hidden">
                <motion.img
                initial={{
                    x:200
                  }}
                  animate={{
                      x:0
                  }}
                  transition={{
                      duration:1.5
                  }}
                  style={{
                    x:fadeOutRight
                  }}
                  src={right}
                    className="absolute top-0 right-0 w-[10%] aspect-auto"
                    alt="img"
                    draggable="false"
                />
                <motion.img
                initial={{
                    x:-200
                }}
                animate={{
                    x:0
                }}
                transition={{
                    duration:1.5
                }}
                style={{
                  x:fadeOutLeft
                }}
                src={left}
                className="absolute top-0 left-0 w-[10%] aspect-auto"
                alt="img"
                draggable="false"
                />
                <div className="container mx-auto px-4 lg:px-24 lg:h-[85vh] flex lg:flex-row flex-col justify-center items-center py-5 ">
                    <motion.div 
                    
                    initial={{
                        x:-200
                      }}
                      animate={{
                          x:0
                      }}
                      transition={{
                          duration:1
                      }}
                        style={{
                          y:fadeOutTop
                        }}
                      className="lg:w-1/2 font-helvetica-extraBold w-3/4 mx-auto text-xl text-center lg:text-start lg:text-4xl">
                        <h1 className=" text-primary-charcoalGray">
                            {title}
                        </h1>
                        <h1 className="text-primary-tealBlue">EM UB 2024</h1>
                    </motion.div>
                    <div className="flex gap-2 lg:w-1/2 self-end">
                        {
                            bpi.map((item,index)=>(
                        <div className="w-1/2 relative " key={index}>
                            <div className='w-full aspect-[9/13] overflow-hidden '>
                            <motion.img 
                            initial={{
                                y:index===0?'200%':"-200%"
                            }}
                            animate={{
                                y:0
                            }}
                            style={{
                              y:index===0?fadeOutTop:fadeOutBottom,
                              opacity
                            }}
                           transition={{
                            duration:(index+1)
                           }}
                            draggable="false" alt='bpi-img' src={item.image} className="w-full aspect-[9/13] rounded-lg object-contain "/>

                            </div>
                            <motion.h3 
                            style={{opacity}}
                            className="text-base lg:text-xl text-primary-tealBlue font-helvetica-extraBold text">
                                {item.nama}
                            </motion.h3>
                            <motion.p 
                            style={{opacity}}
                            className="text-xs lg:text-base text-primary-charcoalGray text-opacity-70">
                                {item.jabatan}
                            </motion.p>
                        </div>

                            ))
                        }
                     
                    </div>
                </div>
            </section>
  )
}

export default Header