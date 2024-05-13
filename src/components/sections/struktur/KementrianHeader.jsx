import React, { forwardRef } from 'react';

const KementrianHeader = forwardRef(({ nama, image }, ref) => {
  return (
    <section ref={ref} className="container mx-auto px-24 py-5">
      <div className="flex justify-center items-center gap-5">
        <div className="w-1/2 font-helvetica-extraBold text-4xl">
          <h1 className=" text-primary-charcoalGray"> {nama} </h1>
          <h1 className="text-primary-tealBlue"> EM UB 2024 </h1>
        </div>
        <img src={image} className="w-1/6 object-contain aspect-square rounded-lg" />
      </div>
    </section>
  );
});

export default KementrianHeader;