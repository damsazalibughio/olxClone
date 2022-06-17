import React from 'react'
import { Link } from 'react-router-dom';

import CategoriesList from '../components/CategoriesList';


export default function MainNavbar() {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className='navbar-brand text-primary fw-bolder' to="/">olx</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <CategoriesList/>                    
                    </div>
                </div>
            </nav>
        </div>
    )
}
