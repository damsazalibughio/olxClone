import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OlxAppBox from '../components/OlxAppBox'

function Mall() {
    return (
        <div>
          <Header /> 
             <h1 className='text-center my-5'>Mall</h1>
          <OlxAppBox/>
          <Footer/>
        </div>
    )
}

export default Mall
