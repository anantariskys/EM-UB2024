import React from 'react'
import right from "../../../../src/assets/ProkerEM/heroRight.png";
import left from "../../../../src/assets/ProkerEM/heroLeft.png";
const Header = ({title,bpi}) => {
  return (
    <section className="w-full relative">
                <img
                    src={right}
                    className="absolute top-0 right-0 w-[10%] aspect-auto"
                    alt="img"
                    draggable="false"
                />
                <img
                    src={left}
                    className="absolute top-0 left-0 w-[10%] aspect-auto"
                    alt="img"
                    draggable="false"
                />
                <div className="container mx-auto px-24 h-[85vh] flex items-center ">
                    <div className="w-1/2 font-helvetica-extraBold text-4xl">
                        <h1 className=" text-primary-charcoalGray">
                            {title}
                        </h1>
                        <h1 className="text-primary-tealBlue">EM UB 2024</h1>
                    </div>
                    <div className="flex gap-2 w-1/2 self-end">
                        {
                            bpi.map((item,index)=>(
                        <div className="w-1/2" key={index}>
                            <img src={item.image} className="w-full aspect-[9/13] rounded-lg object-contain "/>
                            <h3 className="text-xl text-primary-tealBlue font-helvetica-extraBold text">
                                {item.nama}
                            </h3>
                            <p className="text-base text-primary-charcoalGray text-opacity-70">
                                {item.jabatan}
                            </p>
                        </div>

                            ))
                        }
                     
                    </div>
                </div>
            </section>
  )
}

export default Header