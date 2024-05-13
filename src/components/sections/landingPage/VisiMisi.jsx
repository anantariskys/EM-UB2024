import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VisiMisi = () => {
    const progres = useRef(null);
    const visi = useRef(null);
    const misi = useRef(null);
    const [circularProgress, setCircularProgress] = useState(50);
    const visiIsInView = useInView(visi, { margin: "-50% 0px -50% 0px" });
    const misiIsInView = useInView(misi, { margin: "-50% 0px -50% 0px" });

    const { scrollYProgress } = useScroll({
        target: progres,
        offset: ["start end", "end end"],
    });
    

    useEffect(() => {
        if (visiIsInView) {
            console.log(visiIsInView);
        }
        if (misiIsInView) {
            console.log(misiIsInView);
        }
    }, [visiIsInView, misiIsInView]);

    const progressValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

    useMotionValueEvent(progressValue, "change", (value) => {
        setCircularProgress(value);
        console.log(circularProgress);
    });

    return (
        <section ref={progres} className="lg:flex py-20 hidden  gap-10 px-24 bg-primary-white">
            <div className="size-[10%] sticky top-[45vh] flex justify-center z-50  items-center">
                <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-4/6 bg-primary-charcoalGray rounded-full absolute"></div>
                <CircularProgressbar value={circularProgress} maxValue={100} />
            </div>
            <div className=" text-7xl flex w-full justify-between font-helvetica-extraBold">
                <div className="">
                <motion.h2
                    ref={visi}
                    className={`
    h-[75vh]
    
    flex items-center
    duration-1000
    ease-in-out
   text-transparent
    font-outline-2
    bg-clip-text
    ${visiIsInView ? "bg-primary-tealBlue" : "bg-primary-white"}
   
    
    
  `}
                >
                    VISI .
                </motion.h2>

                <motion.h2
                    ref={misi}
                    className={`
    h-[75vh]
    flex items-center
    duration-1000
    ease-in-out
   text-transparent
   font-outline-2
   bg-clip-text
   ${misiIsInView ? "bg-primary-tealBlue" : "bg-primary-white"}
   
   
   
   `}
                >
                    {" "}
                    MISI .{" "}
                </motion.h2>

                </div>
            <div className="sticky w-3/5 flex justify-center items-center top-[15vh] h-[75vh] ">
                <motion.p 
                className={`${visiIsInView?"opacity-100":"opacity-0"} duration-200 ease-in-out absolute text-primary-charcoalGray text-3xl font-helvetica-regular`}>
                    Terwujudnya Eksekutif Mahasiswa Brawijaya sebagai{" "}
                    <span className="font-bold">Motor Pembaharuan</span> dan{" "}
                    <span className="font-bold">Konektor</span> bagi seluruh{" "}
                    <span>Simpul Brawijaya</span> dengan Bernafaskan Inisiatif.
                    Progresif dan Komunikatif dalam{" "}
                    <span className="font-bold">Mengukir Cerita Baik</span> bagi{" "}
                    <span className="font-bold">Brawijaya</span> dan{" "}
                    <span className="font-bold">Indonesia.</span>
                </motion.p>
                <p className={`${misiIsInView?"opacity-100":"opacity-0"} duration-200 ease-in-out absolute  text-primary-charcoalGray text-3xl font-helvetica-regular`}>
                Advocacy Student Well-Being Oriented Maximaze Collaborative Governance Intergrity and Enpowering Student Movement Spread Impactful Energy Self Efficacy and Future Oriented Community Development based on Social Needs Information
                </p>
            </div>
            </div>
        </section>
    );
};

export default VisiMisi;
