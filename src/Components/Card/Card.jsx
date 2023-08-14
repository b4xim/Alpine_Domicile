import React from 'react'
import './Card.css'
import { Link } from 'react-scroll'
const Card = ({emoji, heading, details}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
        <button className="cardbutton">Learn More</button>
        </Link>
    </div>
  )
}

export default Card