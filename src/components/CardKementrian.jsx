import React from "react";

const CardKementrian = ({name,image,onClick,desc}) => {
    return (
        <div onClick={onClick} className="w-[23%] py-6 border px-5  flex flex-col gap-1 border-primary-charcoalGray border-opacity-30 rounded-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl duration-300 ease-in-out">
            <img className="w-4/6 aspect-square mx-auto object-contain " src={image} draggable />
            <div className="font-helvetica-extraBold text-base">
                <h2 className="text-primary-tealBlue">KEMENTERIAN</h2>
                <h2 className="text-primary-charcoalGray text-sm">{name.replace("KEMENTERIAN","")}</h2>
            </div>
            <p className="text-xs line-clamp-5">
                {desc}
            </p>
        </div>
    );
};

export default CardKementrian;
