import { Icon } from '@iconify/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import cardEffect from "../../../assets/cardTautanEffect.png";
const TautanPintas = () => {
    const dummy = [
        {
            id: 1,
            name: "Profil Alumni",
        },
        {
            id: 2,
            name: "JHID - EM",
        },
    ];
  return (
    <section className="py-10 px-24 font-helvetica-regular bg-white">
    <div className="flex w-full gap-4  items-center justify-between mb-10">
        <h1 className="text-5xl font-bold w-1/4 ">Tautan Pintas</h1>
        <div className="h-1 w-3/4   bg-primary-tealBlue"></div>
    </div>
    <Splide
        options={{
            arrows: false,
            pagination: false,
            perPage: 3,
        }}
    >
        {dummy.map((item) => (
            <SplideSlide key={item.id}>
                <div className="w-4/5 relative group p-7 flex items-end shadow-2xl mx-auto  bg-primary-tealBlue hover:bg-opacity-100 duration-500 ease-in-out bg-opacity-35 rounded-xl overflow-hidden  aspect-[6/5]">
                    <Icon
                        icon="maki:arrow"
                        className="text-primary-tealBlue absolute top-7 group-hover:top-6 right-7 group-hover:right-6 z-30 duration-500 ease-in-out  text-2xl -rotate-45"
                    />
                    <div className="absolute w-2/5 h-2/5 -top-2/4 group-hover:-top-1  group-hover:-right-1 duration-700 ease-in-out group-hover:delay-300  -right-2/4   rounded-bl-xl bg-transparent z-10">
                        <img
                            src={cardEffect}
                            alt="effect"
                            className="absolute  size-1/4 left-0 top-0"
                        />
                        <img
                            src={cardEffect}
                            alt="effect"
                            className="absolute  size-1/4 right-0 bottom-0"
                        />
                        <div className="absolute bg-white size-3/4 rounded-bl-3xl right-0 top-0"></div>
                    </div>

                    <h1 className="relative text-3xl text-primary-charcoalGray ease-in-out duration-200 group-hover:text-primary-paleSalmon font-semibold z-10">
                        {item.name}
                    </h1>
                </div>
            </SplideSlide>
        ))}
    </Splide>
</section>
  )
}

export default TautanPintas