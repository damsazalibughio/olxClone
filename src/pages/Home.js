import React, {useContext} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import OlxAppBox from '../components/OlxAppBox';
import ProductCard from '../components/ProductCard';
import { GlobalContext } from '../store/GlobalState';

// import Slider from '../components/Slider';

function Home() {
    const {prodcutDetails} =useContext(GlobalContext);
    const productCardsData = [
       
        {productTitle: 'Samsaung1', image:'../images/mobile.jpg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung2', image:'../images/mobile.jpg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung3', image:'../images/mobile1.jpeg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung3', image:'../images/mobile1.jpeg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung3', image:'../images/mobile1.jpeg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung3', image:'../images/mobile1.jpeg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung1', image:'../images/mobile.jpg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung1', image:'../images/mobile.jpg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        {productTitle: 'Samsaung1', image:'../images/mobile.jpg', price: '1000', location:'Karachi', postedTime:'18 hours ago'},
        
    ]
    return (
        <div>
              <Header /> 
            <div className='showcase-img'>
                <img src="../images/showcase.jpg" alt="showcase" />
            </div>
            
            <div className='company-adds my-3 d-flex justify-content-center'>
            <img src="https://tpc.googlesyndication.com/simgad/17131258625495591734" alt="company-adds" />
            </div>

            <div className='olx-container mob-web-box'>
                <div className='d-flex justify-content-between'>
                <h3>More on Mobile Phones</h3>
                <button className='btn fw-bolder border-0 border-bottom  border-dark border-2'>View more...</button>
                </div>
                <div className='d-flex justify-content-between'>
                {/* <Slider/> */}
                </div>
            </div>

            <div className='olx-container my-3'>
                <h3>Fresh recommendations</h3>
                <div className='row d-flex justify-content-between'>
                {prodcutDetails.map((productCards, index) => {
                    return(
                         <ProductCard key={index} productCards ={productCards}/>
                    )
                })}
               
                </div>
            </div>

            <div className='company-adds my-4 d-flex justify-content-center'>
            <img src="https://tpc.googlesyndication.com/simgad/18370361094128777605?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qnbpBMx_3ai2Oa8SsFNrr9p0FfBbA" alt="company-adds" />
            </div>
            <OlxAppBox/>
            <Footer/>
        </div>

        
    )
}

export default Home
