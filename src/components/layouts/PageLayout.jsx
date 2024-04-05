import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const PageLayout = ({children}) => {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout