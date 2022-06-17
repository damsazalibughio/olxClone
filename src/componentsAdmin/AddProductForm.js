import React, {useState} from 'react'
import {db} from '../firebaseConfig';

import {collection, getDocs,addDoc, onSnapshot} from 'firebase/firestore';

function AddProductForm() {
    const [products, setProducts] = useState([])

    const addProduct = (event) =>{
        event.preventDefault()
      

        addDoc(collection(db, "productDetails"), {
            productTitle: 'Samsaung9',
            price: '1000', location:'Hyderabad',
            postedTime:'20 hours ago',
           
          });
          console.log('run');

    }
    

    return (
        <form onSubmit={addProduct}>
            {/* <h4 className='mt-3'>Add Products</h4> */}
            <div className="form-group my-2">
                <input onChange={(e)=>   setProducts(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Title"/>
            </div>
            <div className="form-group my-2">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Location"/>
            </div>
            <div className="form-group my-2">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Price"/>
            </div>
           
          
            <button type="submit" className="btn btn-dark my-2">Submit</button>
      </form>
    )
}

export default AddProductForm
