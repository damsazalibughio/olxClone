import AddProduct from '../componentsAdmin/AddProductForm'
import Navbar from '../componentsAdmin/Navbar'
import Sidebar from '../componentsAdmin/Sidebar'
import React, {useContext} from 'react';
import { GlobalContext } from '../store/GlobalState';
import Card from '../componentsAdmin/Card';
import Modal from '../componentsAdmin/Modal';


function ProductsView() {
    const {prodcutDetails} =useContext(GlobalContext);
  


    return (
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-lg-3'>
                    <Sidebar/>
                </div>
                <div className='col-lg-8'>
                {/* <AddProduct/> */}
                <Card/>
                </div>
            </div>
            <Modal/>
        </div>
    )
}

export default ProductsView
