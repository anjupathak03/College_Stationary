import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Paidservices from '../components/Paidservices'

function Market() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <Paidservices />
    </div>
    <Footer />
    </>
  )
}

export default Market