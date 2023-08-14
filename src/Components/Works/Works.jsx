import React from 'react'
import './Works.css'
import image20 from '../../img/image20.png'
import image21 from '../../img/image21.png'
import image22 from '../../img/image22.png'
import image23 from '../../img/image23.png'
import image24 from '../../img/image24.png'
import { Link } from 'react-scroll'

const Works = () => {
  return (
    <div className="works">
       <div className="awesome">
        <span>Our All Type Of</span>
        <span>Works</span>
        <span>Our Works are all Perfect. We use only high quality products for our Clients. <br />Our Customers are utmost satisfied with our completed works.</span>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
        <button className="button s-button">Hire Us</button>
        </Link>
        <div className="blur s-blur1" style={{background: 'var(--dblue)'}}></div>
    </div>
    {/* Right side */}
    <div className="w-right">
      <div className="main-circle">
        <div className="sec-circle">
          <img src={image21} alt="" />
        </div>
        <div className="sec-circle">
          <img src={image23} alt="" />
        </div>
        <div className="sec-circle">
          <img src={image20} alt="" />
        </div>
        <div className="sec-circle">
          <img src={image22} alt="" />
        </div>
        <div className="sec-circle">
          <img src={image24} alt="" />
        </div>
      </div>
      {/* Background Circles */}
      <div className="bg-circle lbluecircle"></div>
      <div className="bg-circle dbluecircle"></div>
    </div>
    </div>
  )
}

export default Works