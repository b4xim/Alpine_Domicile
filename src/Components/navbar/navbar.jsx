import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    
    <div className="n-wrapper">
        <div className="n-left">
          <a href=""><img src={require('../../img/logo.png')} alt="Logo" className="n-logo" height='45px'/></a>
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
            </div>
            <button className="button n-button">Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar

 