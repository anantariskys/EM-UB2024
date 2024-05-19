import React from 'react'

const BPH = ({list}) => {

    console.log(list)
  return (
    <section className="container mx-auto px-24 py-5 justify-center flex gap-1">
    {
        list.bph.map((item,index)=>(
    <div className="w-[18%] group" key={index}>
        <div className='w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out  relative'>
        <img draggable="false" className="h-full  object-contain rounded-lg " src={item.image}/>

        </div>
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