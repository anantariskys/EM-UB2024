import React from 'react'

const BPH = ({list}) => {
  return (
    <section className="container mx-auto px-24 py-5 justify-center flex gap-1">
    {
        list.bph.map((item,index)=>(
    <div className="w-1/6" key={index}>
        <div className="w-full aspect-[9/13] rounded-lg bg-primary-tealBlue"></div>
        <h3 className=" text-primary-tealBlue font-helvetica-extraBold text-base">
            {item.nama}
        </h3>
        <p className=" text-primary-charcoalGray text-opacity-70 text-sm">
            {item.jabatan}
        </p>
    </div>

        ))
    }
  
</section>
  )
}

export default BPH