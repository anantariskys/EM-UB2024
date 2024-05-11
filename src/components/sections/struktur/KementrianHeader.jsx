import React from 'react'

const KementrianHeader = ({nama}) => {
  return (
    <section className="container mx-auto px-24 py-5">
    <div className="flex justify-center items-center gap-5">
        <div className="w-1/2 font-helvetica-extraBold text-4xl">
            <h1 className=" text-primary-charcoalGray">
                KEMENTRIAN {nama}
            </h1>
            <h1 className="text-primary-tealBlue">
                EM UB 2024
            </h1>
        </div>
        <div className="w-1/6 bg-green-400 aspect-square rounded-lg"></div>
    </div>
</section>
  )
}

export default KementrianHeader