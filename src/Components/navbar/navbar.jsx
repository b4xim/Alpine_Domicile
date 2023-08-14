import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    
    <div className="n-wrapper" id='navbar'>
        <div className="n-left">
          <a href=""><img src={require('../../img/logo.png')} alt="Logo" className="n-logo" height='45px'/></a>
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style={{listStyleType: 'none'}} className='hypert'>
                <Link spy={true} to='navbar' smooth={true} activeClass='activeClass' className='hyper'>
                <li className='hyper'>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                <li className='hyper'>Services</li>
                </Link>

                <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                <li className='hyper'>Experience</li>
                </Link>

                <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                <li className='hyper' id='sett'>Projects</li>
                </Link>
            </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button n-button" id='butt'>Contact Us</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar

 