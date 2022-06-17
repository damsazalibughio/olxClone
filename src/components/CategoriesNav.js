import React from 'react'
import AllCat from '../headerComponents/AllCat'

export default function CategoriesNav() {
    return (
        <div className=''>
             <nav className="navbar navbar-expand-lg"  style={{backgroundColor:'white'}}>
                <div className="container-fluid">
                   <AllCat/>
                    <div className="collapse navbar-collapse" id="navbarAllCat">
                    <ul className="navbar-nav ms-4 mb-2 mb-lg-0">
                       
                        <li className="nav-item">
                            <a className="nav-link main-navbar-fs" href="#"> Mobile Phones</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link main-navbar-fs" href="#">Cars</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link main-navbar-fs" href="#">Motorcycles</a>
                        </li>

                        <li className="nav-item">
                           
                            <a className="nav-link main-navbar-fs" href="#">Houses</a>
                          
                        </li>

                        <li className="nav-item">
                     
                            <a className="nav-link main-navbar-fs" href="#">TV - Video - Audio</a>
                       
                        </li>

                        <li className="nav-item">
                         
                            <a className="nav-link main-navbar-fs" href="#">Tablets</a>
                          
                        </li>

                        <li className="nav-item">
                          
                            <a className="nav-link main-navbar-fs" href="#">Land & Plots</a>
                         
                        </li>
         






                       
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}
