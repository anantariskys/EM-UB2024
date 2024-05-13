import React from 'react'
import CardProker from '../../CardProker'

const ProgramKerja = ({list}) => {
   
  return (
    <section className="container mx-auto px-24">
    <div className="px-10 py-5 bg-primary-skyBlue rounded-xl border-2 border-primary-charcoalGray border-opacity-10">
        <h1 className="text-4xl font-helvetica-extraBold  text-primary-charcoalGray mb-3">PROGRAM KERJA</h1>
        <main className="w-full grid grid-cols-3 grid-rows-1 gap-10">
            {
                list.programKerja.map((item,index)=>(
                   <CardProker key={index} index={index} desc={item.desc} nama={item.nama} />
                ))
            }

        </main>

    </div>

</section>
  )
}

export default ProgramKerja