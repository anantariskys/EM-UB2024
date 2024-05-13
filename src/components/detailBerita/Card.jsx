import React from "react";

const Card = ({img,time,title}) => {
    return (
        <div className="w-full  text-primary-charcoalGray group">
            <div className="w-full aspect-video overflow-hidden">
                <img
                    src={img}
                    alt="card-img"
                    className="aspect-video w-full object-cover group-hover:scale-110 duration-300 ease-in-out group-hover:rotate-3"
                    draggable="false"
                />
            </div>
            <p className="lg:text-sm text-xs font-bold text-slate-500 mt-2">
               {time}
            </p>
            <h1 className="lg:text-xl  text-sm font-extrabold line-clamp-2 ">
                {title}
            </h1>
        </div>
    );
};

export default Card;
