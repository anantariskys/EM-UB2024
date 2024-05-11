import React from "react";

const CardProker = ({ index, nama, desc }) => {
    return (
        <div
            className={`${
                index % 2 == 0
                    ? "bg-primary-tealBlue text-primary-white"
                    : "bg-primary-white text-primary-navbarText "
            } w-full aspect-[12/14] rounded-xl p-7 hover:-translate-y-1 duration-300 ease-in-out hover:shadow-xl `}
        >
            <p className="font-helvetica-extraBold text-4xl text-end">
                {index + 1}
            </p>
            <p className="font-helvetica-extraBold text-xl">{nama}</p>
            <p className="text-sm">{desc}</p>
        </div>
    );
};

export default CardProker;
