import React from "react";

const CardProker = ({ index, nama, desc }) => {
    return (
        <div
            className={`${
                index % 2 == 0
                    ? "bg-primary-tealBlue text-primary-white"
                    : "bg-primary-white text-primary-navbarText "
            } w-full lg:aspect-[12/14] rounded-xl lg:p-7 p-2 hover:-translate-y-1  duration-300 ease-in-out hover:shadow-xl group`}
        >
            <p className="font-helvetica-extraBold text-2xl lg:text-4xl text-end">
                {index + 1}
            </p>
            <p className="font-helvetica-extraBold text-sm lg:text-xl">{nama}</p>
            <p className="text-xs lg:text-sm lg:group-hover:text-base duration-200 ease-in-out line-clamp-[8] lg:line-clamp-none overflow-auto">{desc}</p>
        </div>
    );
};

export default CardProker;
