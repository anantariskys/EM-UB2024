import{ useEffect } from "react";
import right from "../../src/assets/ProkerEM/heroRight.png";
import left from "../../src/assets/ProkerEM/heroLeft.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import { prokerMegaBesar } from "../data/data";
import { useParams } from "react-router-dom";
const DetailProker = () => {
  const [data,setData]=useState({});
  const {id} = useParams()


  useEffect(() => {
    const result = prokerMegaBesar.find((item)=>item.id==id)
    console.log(result)
  setData(result);
    
  }, [id])
  

  
    return (
        <div className="bg-primary-white relative font-helvetica-regular">
            <img
                src={right}
                className="absolute top-0 right-0 w-[15%] lg:w-[10%] aspect-auto"
                alt="img"
                draggable="false"
            />
            <img
                src={left}
                className="absolute top-0 left-0 lg:w-[10%] w-[15%] aspect-auto"
                alt="img"
                draggable="false"
            />
            <header className="container px-4 lg:px-24 mx-auto py-5 lg:py-10">
                    <div className="w-fit px-3 py-1.5 text-xs rounded-2xl mx-auto bg-primary-tealBlue text-slate-100">
                       {data.kementrian}
                    </div>
                    <h1 className="text-2xl lg:text-5xl font-helvetica-extraBold w-5/6 mx-auto text-center mt-5 lg:mt-3">{data.nama}</h1>

                <main className="w-full mt-5 lg:px-10">
                    <Splide
                    options={{
                      autoplay: true,
                      speed: 500,
                      interval: 4000,
                      rewind: true,
                      rewindSpeed: 500,
                    }}
                    >
                      {
                        data&&data.image&&data.image.map((item,index)=>(

                      <SplideSlide key={index}>
                        <img src={item} alt="img-proker" className="w-full aspect-video object-cover" />
                      </SplideSlide>
                        ))
                      }
                 
                    </Splide>
                    <div className="border text-sm lg:text-base border-primary-charcoalGray flex flex-col gap-5 lg:gap-10 border-opacity-20 shadow-lg p-5 lg:p-10">
                      {
                        data.body&&data.body.map((item,index)=>(

                          <p className="text-xl">{item}</p>
                        ))
                      }
                 
                    </div>
                </main>
            </header>
        </div>
    );
};

export default DetailProker;
