import React, {useContext} from 'react';
// import { IoCarSportOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalState';

function CategoriesList() {
    const {categories} =useContext(GlobalContext)
    
    return (
        <ul className="navbar-nav ms-4 mb-2 mb-lg-0">     
        {categories.map((cat,index)=>{
            return(
                <li key={index} className="nav-item d-flex flex-row">               
                    <i className={`bi bi-${cat.icon} fs-5`}></i>               
                    <Link className="nav-link main-navbar-fs" to={`/${cat.catLink}`}>{cat.title}</Link>
              
                 </li>
            )
        })}
           
        </ul>
    )
}

export default CategoriesList
