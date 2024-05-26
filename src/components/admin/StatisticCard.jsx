import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react'
import { getAllTautan } from '../../api/services/tautan'
import { getAllAdmin } from '../../api/services/admin'
import { useState } from 'react'


const StatisticCard = ({children,icon,title}) => {
    const [total,setTotal] = useState()

useEffect(() => {
 fetchTotal()
 return(
    fetchTotal
 )
}, [])

const fetchTotal=async()=>{
    try {
        if (title==='tautan') {
            const response = await getAllTautan();
            setTotal(response.data.length)
        }else if(title==='admin'){
            const response = await getAllAdmin();
            setTotal(response.data.length)
        }
        
      
      } catch (error) {
       console.log(error) 
      }
}


  return (
    <div className="w-full shadow-lg flex flex-col justify-center rounded-lg p-4 bg-primary-white border">
    <div className="flex gap-3 items-center">
      <Icon icon={icon} className="text-2xl" />
      <h3 className="text-2xl font-semibold">{children}</h3>
    </div>
    <div className="">
      <h3>Banyak {title} : {total}</h3>
    </div>
  </div>
  )
}

export default StatisticCard