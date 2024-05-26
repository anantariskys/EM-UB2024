import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const PageLayout = ({children}) => {
  useEffect(() => {
    window.scrollTo(0,0)

  }, [children])
  
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout