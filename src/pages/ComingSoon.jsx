import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";
import Planet from "../../public/Planet.png";
const ComingSoon = () => {
  return (
    <div className="relative overflow-hidden ">
      <div className="h-screen w-full bg-black relative overflow-hidden">
        <div 
       
        
        className="lg:w-2/4 lg:h-auto h-4/6    -right-96 lg:-right-32 -z-0 lg:-top-56 top-16 blur-[125px] aspect-square rounded-full absolute bg-primary-tealBlue"></div>
        <motion.h3 
         initial={{
          y: 350,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          y: { duration: 0.5, delay: 3 },
          opacity: { duration: 1.5, delay: 3 },
        }}
        className="lg:text-[2vw] md:text-[3vh] lg:w-full w-[65%] absolute lg:top-10 md:top-36 top-24  left-10 z-10 font-helvetica-regular text-primary-paleSalmon font-">Shh... We're under construction. But it's going to be worth the wait!</motion.h3>
        <div className="flex flex-col absolute bottom-40 lg:bottom-3 left-10 w-full">
          <motion.h1
            initial={{
              y: 500,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: { duration: 0.5, delay: 2.5 },
              opacity: { duration: 1.5, delay: 2.5 },
            }}
            className="lg:text-[12vw] md:text-[13vh] text-[9vh] z-10 font-helvetica-extraBold text-primary-paleSalmon font-extrabold -mb-[7vw]"
          >
            COMING
          </motion.h1>
          <div className="flex w-full items-center ">
            <motion.h1
              initial={{
                y: 500,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                y: { duration: 0.5, delay: 2 },
                opacity: { duration: 1.5, delay: 2 },
              }}
              className="lg:text-[12vw] md:text-[13vh] text-[9vh] -me-[2.5%] z-10 font-helvetica-extraBold text-primary-paleSalmon font-extrabold"
            >
              SO
            </motion.h1>
            <motion.img
              initial={{
                y: 500,
               
              }}
              animate={{
                y: 0,
                rotate: [0,360],
              }}
              transition={{
                y: { duration: 0.5, delay: 2 },
                rotate: { duration: 5, repeat: Infinity },
              }}
              src={Planet}
              alt="planet"
              className="lg:w-[15%] md:w-[23%] w-[24%]  "
              loading="lazy"
              draggable="false"
            />
            <motion.h1
              initial={{
                y: 500,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              
              }}
              transition={{
                y: { duration: 0.5, delay: 2 },
                opacity: { duration: 1.5, delay: 2 },
              }}
              className="lg:text-[12vw] md:text-[13vh] text-[9vh] ms-[-3%]  z-10 font-helvetica-extraBold text-primary-paleSalmon font-extrabold"
            >
              N!
            </motion.h1>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{
          y: -1500,
        }}
        transition={{
          y: { duration: 1.3, delay: 1 },
        }}
        className="h-screen w-full bg-black top-0 left-0 absolute flex justify-center items-center overflow-hidden"
      >
        <div className="bg-primary-charcoalGray absolute -z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 lg:w-4/5 h-3/5 lg:h-4/5 blur-3xl"></div>
        <motion.img
          initial={{
            y: 350,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            y: { duration: 0.5 },
            opacity: { duration: 1 },
          }}
          src={Logo}
          className="z-10 w-2/4 lg:w-1/4"
          loading="lazy"
          alt="Logo"
          draggable="false"
        />
      </motion.div>
    </div>
  )
}

export default ComingSoon