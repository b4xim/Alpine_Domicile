import React from 'react'
import './Services.css'
import icon1 from '../../img/icon1.png'
import icon2 from '../../img/icon2.png'
import icon3 from '../../img/icon3.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">
{/* {left side} */}
    <div className="awesome">
        <span>Our Great</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat consequuntur ab ipsa. <br />Doloribus placeat repellat error, est fuga magni minus </span>
        <a href="#">
        <button className="button s-button">Download Brochure</button>
        </a>
        <div className="blur s-blur1" style={{background: 'var(--dblue)'}}></div>
    </div>
    {/* {right side} */}
    <div className="cards">
        <div style={{left: '14rem'}}>
            <Card
            emoji = {icon1}
            heading = {'Construction'}
            details = {'Survey, Construction, 3D Elevation'}
            />
        </div>
        <div style={{top: '12rem', left: '-4rem'}}>
            <Card
            emoji = {icon3}
            heading = {'Survey'}
            details = {'Land Survey, Partition, Scaling'}
            />
        </div>
        <div style={{top: '19rem', left: '12rem'}}>
            <Card
            emoji = {icon2}
            heading = {'Planning'}
            details = {'Landscaping, Renovation, Elevation'}
            />
        </div>
        <div className="blur s-blur2" style={{background: 'var(--lblue)'}}></div>
    </div>
    </div>

  ) 
}

export default Services