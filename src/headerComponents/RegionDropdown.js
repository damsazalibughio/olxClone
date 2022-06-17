import React, {useContext, useEffect} from 'react'
// import { IoCarSportOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalState'


function RegionDropdown() {
    const {locations} =useContext(GlobalContext)
   
    return (
        <div>
            
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            {/* <i class="bi bi-search main-navbar-fs fs-5"></i> */}
            <option value="0">Select Region</option>
            {locations.map((locData, index)=>{
                return(
                    <option key={index} value="0">{locData.title}</option>
                )
            })}
               
                {/* <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
            </select>
        </div>
    )
}

export default RegionDropdown
