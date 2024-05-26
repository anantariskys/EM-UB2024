import React, { useState } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';

const AdminLayout = ({children,setIsActive,isActive}) => {
    

    return (
      <div className="font-helvetica-regular">
        <div className="flex h-screen overflow-hidden">
        
          <Sidebar setIsActive={setIsActive}  />
         
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        
            <Header isActive={isActive}/>
          
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          
          </div>
      
        </div>
       
      </div>
    )
}

export default AdminLayout