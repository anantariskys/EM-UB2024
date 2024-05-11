import React from "react";

const CardKementrian = ({name}) => {
    return (
        <div className="w-full py-6 border px-5  flex flex-col gap-1 border-primary-charcoalGray border-opacity-30 rounded-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl duration-300 ease-in-out">
            <div className="w-3/6 aspect-square mx-auto bg-primary-tealBlue"></div>
            <div className="font-helvetica-extraBold text-base">
                <h2 className="text-primary-tealBlue">KEMENTRIAN</h2>
                <h2 className="text-primary-charcoalGray">{name}</h2>
            </div>
            <p className="text-sm line-clamp-4">
                Bendahara Kabinet siap memberikan kontribusi penuh dalam
                mewujudkan perubahan di kampus biru, kampus perjuangan,
                Universitas Brawijaya.
            </p>
        </div>
    );
};

export default CardKementrian;
