
import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";

//Gambar
import SPI_BPI_1 from "../../assets/Struktur/Petinggi/SPI/SPI_BPI_1.png";
import SPI_BPI_2 from "../../assets/Struktur/Petinggi/SPI/SPI_BPI_2.png";
import PENGEMBANGAN_BPI_1 from "../../assets/Struktur/Petinggi/Pengembangan/PENGEMBANGAN_BPI_1.png";
import PENGEMBANGAN_BPI_2 from "../../assets/Struktur/Petinggi/Pengembangan/PENGEMBANGAN_BPI_2.png";
import PERGERAKAN_BPI_1 from "../../assets/Struktur/Petinggi/Pergerakan/PERGERAKAN_BPI_1.png";
import PERGERAKAN_BPI_2 from "../../assets/Struktur/Petinggi/Pergerakan/PERGERAKAN_BPI_2.png";
import PPM_BPI_1 from "../../assets/Struktur/Petinggi/PPM/PPM_BPI_1.png";
import PPM_BPI_2 from "../../assets/Struktur/Petinggi/PPM/PPM_BPI_2.png";
import DJO_BPI_1 from "../../assets/Struktur/Petinggi/DJO/DJO_BPI_1.png";
import DJO_BPI_2 from "../../assets/Struktur/Petinggi/DJO/DJO_BPI_2.png";

import HeroSection from "../../components/sections/strukturPres/HeroSection";
import Pres from "../../components/sections/strukturPres/Pres";
import Wapres from "../../components/sections/strukturPres/Wapres";
import { Icon } from "@iconify/react";
import { useRef } from "react";
//Gambar

const data =[
  {
    nama1 :"SATUAN",
    nama2 :"PENGENDALI INTERNAL",
    image : [
      SPI_BPI_1,
      SPI_BPI_2,
    ],
    link : '/struktur/spi'
  },
  {
    nama1 :"KEMENTERIAN KOORDINATOR",
    nama2 :"PENGEMBANGAN",
    image : [
      PENGEMBANGAN_BPI_1,
      PENGEMBANGAN_BPI_2,
    ],
    link : '/struktur/pengembangan'
  },
  {
    nama1 :"KEMENTERIAN KOORDINATOR",
    nama2 :"PERGERAKAN",
    image : [
     PERGERAKAN_BPI_1,
     PERGERAKAN_BPI_2,
    ],
    link : '/struktur/pergerakan'
  },
  {
    nama1 :"KEMENTERIAN KOORDINATOR",
    nama2 :"PENGABDIAN DAN PEMBERDAYAAN MASYARAKAT",
    image : [
     PPM_BPI_1,
     PPM_BPI_2,
    ],
    link : '/struktur/ppm'
  },
  {
    nama1 :"KEMENTERIAN KOORDINATOR",
    nama2 :"DIPLOMASI DAN JARINGAN ORGANISASI",
    image : [
    DJO_BPI_1,
    DJO_BPI_2,
    ],
    link : '/struktur/djo'
  },
 
]

const Struktur = () => {

  const presRef = useRef(null)
 

  return (

    <div className="bg-primary-white w-full scroll-smooth">
      <HeroSection ref={presRef} />
      <Pres ref={presRef} />
      <Wapres />
      <section className="flex flex-col gap-5 container mx-auto lg:px-24 px-4 py-16">
        {
          data.map((item,index)=>(
        <div className="e w-full h-full  rounded shadow-xl flex justify-between py-2 lg:py-5 items-center px-4 lg:px-16">
          <h3 className="text-primary-tealBlue text-xs md:text-xl lg:text-3xl w-full lg:w-2/5 font-helvetica font-extrabold   ">
            {item.nama1} <span className="text-black"> {item.nama2}</span>
          </h3>
          <div className="w-2/5">
          <div className="w-full grid-cols-2  grid-rows-1 grid gap-1 lg:gap-5">
            {
              item.image.map((item,index)=>(
                <img src={item} key={index} draggable="false" alt="img" className="w-full h-full aspect-auto object-cover " />

              ))
            }
          </div>
        
          </div>
            <Link
              to={item.link}
              href=""
              className="hover:bg-primary-charcoalGray duration-300 ease-in-out rounded-full hover:text-primary-white"
            >
              <Icon icon={"iconamoon:arrow-up-2"} className="text-2xl lg:text-5xl rotate-90"/>
            
            </Link>
        </div>

          ))
        }
      </section>



    </div>

  );
};

export default Struktur;
