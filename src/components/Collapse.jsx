import React, { useState } from 'react'

const Collapse = ({data,children,bg="bg-primary-tealBlue"}) => {
    const [isActive,setIsActive] = useState(false);
    const handleIsActive=()=>{
        setIsActive(!isActive);
    }
  return (
    <div className='group'>
  <div onClick={()=>{handleIsActive()}} className={`${isActive?"rounded-t-xl  rounded-b-none duration-100":"duration-500 rounded-xl delay-100"} ${bg} text-base lg:text-2xl font-helvetica-extraBold text-slate-100 py-3 px-5 lg:px-20 duration-100 ease-in-out text-center w-full`}>
    <h1 className='text-shadow-heading'>{children}</h1>
  </div>
  <div className={`w-full overflow-hidden  ease-out  ${isActive?"max-h-screen duration-500":"max-h-0 duration-100"} bg-primary-skyBlue`}>
    <ul className='p-7 lg:p-10 text-sm list-disc  text-primary-charcoalGray'>
        {
            data&&data.map((item,index)=>(
                <li className='' key={index}>{item}</li>

            ))
        }
    </ul>
  </div>
</div>
  )
}

export default Collapse