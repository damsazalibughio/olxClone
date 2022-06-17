import React from 'react'
import Table from './Table'

function Card() {
    return (
        <div className="card text-white bg-dark my-3" >
            <div className="card-header">Products
            </div>
            <div className='d-flex justify-content-between mx-3'>
                    <div>
                        <button type="button" className='btn btn-light btn-sm my-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@addproduct"> Add Product</button>
                    </div>
                    <div>
                    <form>
                         <input className="form-control  my-1" type="text" placeholder="Search Product" aria-label="Search"/>
                    </form>
                    </div>
               </div>
            <div className="card-body">
            
            <Table/>
            </div>
        </div>
    )
}

export default Card
