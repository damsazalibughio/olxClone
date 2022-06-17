import React from 'react'
import LoginBtn from '../headerComponents/LoginBtn'
import MainNavbar from '../headerComponents/MainNavbar'
import RegionDropdown from '../headerComponents/RegionDropdown'
import SearchBox from '../headerComponents/SearchBox'
import SellBtn from '../headerComponents/SellBtn'
import CategoriesNav from './CategoriesNav'

function Header() {
    return (
        <div className='header-container'>
           <div className='olx-container'>
                <MainNavbar />
           </div>
           <div className='olx-container mt-2 d-flex justify-content-between'>
              <div className='col-3'>
              <RegionDropdown />
              </div>
              <div className='col-7'>
              <SearchBox />
              </div>
               <div className='d-flex'>
                    <div>
                    <LoginBtn />
                    </div>
                    <div>
                        <SellBtn />
                    </div>
               </div>
           </div>
           <div className='olx-container'>
           <CategoriesNav/>
           </div>
        </div>
    )
}

export default Header
