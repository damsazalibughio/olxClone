import React from 'react'
import Navbar from '../componentsAdmin/Navbar'
import Sidebar from '../componentsAdmin/Sidebar'

function Admin() {
    return (
       
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-lg-3'>
                    <Sidebar/>
                </div>
                <div className='col-lg-8'>
               
                </div>
            </div>
        </div>
          
      
    )
}

export default Admin
