import React from 'react'
import Logo from '../../assets/images/logo.png'
import './header.css'

function Header() {
  return (
    <div className='header' id="hader">
        <div className='container-fluid'>
            <div className='row'>
               <div className='navbar'>
                  <div className='logo'>
                     <img src={Logo} alt=""/> 
                  </div> 
                  <div className='nav-links'>
                    <ul>
                        <li><a>About Rathinam</a></li>
                        <li><a>IT Parks</a></li>
                        <li><a>Facilities</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Attractions</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                  </div>
               </div> 
            </div>
        </div>
    </div>
  )
}

export default Header