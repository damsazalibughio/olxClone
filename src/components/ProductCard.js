import React from 'react'

export default function ProductCard({productCards}) {
    console.log(productCards);
    return (
        <div className="card mt-3" style={{width: '18rem'}}>
            <img src='../images/mobile.jpg' style={{ height: '12rem'}}  className="card-img-top mt-3" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{productCards.price}</h5>
                <p className="card-text">{productCards.title}</p>
                <div className='d-flex justify-content-between'>
                    <small>{productCards.location}</small>
                    <small>{productCards.postedTime}</small>
                </div>
            </div>
        </div>
    )
}
