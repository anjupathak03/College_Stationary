import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Paidservices from '../components/Paidservices'
import Freeservices from '../components/Freeservices'




function Home() {
  return (
    <div>
        <>
        <Navbar/>
        <Banner/>
        
        <Freeservices/>
        <Footer/>
        
        
        </>
    </div>
  )
}

export default Home