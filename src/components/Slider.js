import React from 'react'
import ProductCard from './ProductCard'

export default function Slider() {
    const imgData = [
       
        {image:'../images/mobile.jpg'},
        {image:'../images/mobile2.jpg'},
        {image:'../images/mobile1.jpg'},
       
    ]
    
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="../images/mobile.jpg" className="d-block"  style={{width: '18rem'}}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="../images/mobile.jpg" className="d-block"   style={{width: '18rem'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="../images/mobile.jpg" className="d-block"  style={{width: '18rem'}}  alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}
