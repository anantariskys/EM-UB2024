import  { useState } from 'react'
import { Icon } from "@iconify/react";
import cardBody from "../assets/cardBody.png";
const CardAlumni = ({nama,fakultas,prodi,pekerjaan,perusahaan,image,angkatan}) => {
    const [isAbout,setIsAbout] = useState(true)
    const handleIsAbout = (status) => {
        setIsAbout(status);
    };


  return (
    <div className="w-full hover:-translate-y-1 duration-300 ease-in-out aspect-[5/7] bg-primary-tealBlue shadow-2xl rounded-[40px] overflow-hidden relative ">
    <div className="h-[45%] flex items-end justify-center relative">
        <div className="w-[45%] aspect-square rounded-full overflow-hidden bg-primary-white border relative z-20 border-primary-charcoalGray">
            <img src={image} className='size-full object-cover' alt="" />
        </div>
    </div>
    <div className="relative w-full flex z-20 font-helvetica-extraBold text-xl cursor-pointer">
        <div onClick={()=>setIsAbout(true)} className={`w-1/2 text-center p-2 border-b-2 duration-300 ease-in-out ${isAbout?"border-primary-tealBlue text-primary-tealBlue":" border-primary-charcoalGray border-opacity-30 text-primary-charcoalGray text-opacity-30"}`}>
            Tentang
        </div>
        <div onClick={()=>setIsAbout(false)} className={`w-1/2 text-center p-2 border-b-2 duration-300 ease-in-out ${!isAbout?"border-primary-tealBlue text-primary-tealBlue":" border-primary-charcoalGray border-opacity-30 text-primary-charcoalGray text-opacity-30"}`}>
            Pekerjaan
        </div>
      
    </div>
    <div className="relative w-full p-5  z-20 font-helvetica-extraBold text-xl">
       {
         isAbout?(
          <>
          <h1 className="text-3xl mb-3 line-clamp-1">{nama}</h1>
          <table className="text-sm">
          <tr>
              <td className="text-nowrap">Fakultas</td>
              <td className="ps-2">:</td>
              <td className="ps-2">{fakultas}</td>
          </tr>
          <tr>
              <td className="text-nowrap">Program Studi</td>
              <td className="ps-2">:</td>
              <td className="ps-2">{prodi}</td>
          </tr>
          <tr>
              <td>Angkatan</td>
              <td className="ps-2">:</td>
              <td className="ps-2">{angkatan}</td>
          </tr>
      </table>
      </>
        ):(
          <div className="font-helvetica-extraBold w-fit mx-auto text-center">
            <h2 className="text-2xl">Pekerjaan</h2>
            <h2 className="text-xl -mt-1.5 font-helvetica-regular font-thin">{pekerjaan}</h2>
            <h2 className="text-2xl">Perusahaan</h2>
            <h2 className="text-xl -mt-1.5 font-helvetica-regular font-thin">{perusahaan}</h2>
   
          </div>

        )
       }
        <div className="flex justify-center gap-5 text-3xl mt-3">
      <Icon className="text-shadow"  icon={"skill-icons:linkedin"}/>
      <Icon className="text-shadow"  icon={"skill-icons:gmail-light"}/>   
    </div>
    </div>
    <img
        src={cardBody}
        draggable="false"
        className="absolute bottom-0 left-0 w-full aspect-auto"
        alt=""
    />
</div>
  )
}

export default CardAlumni