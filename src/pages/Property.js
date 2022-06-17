import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OlxAppBox from '../components/OlxAppBox'

export default function Property() {
    return (
        <div>
             <Header /> 
                <h1 className='text-center my-5'>Property</h1>
            <OlxAppBox/>
            <Footer/>
        </div>
    )
}
