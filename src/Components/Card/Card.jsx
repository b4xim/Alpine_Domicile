import React from 'react'
import './Card.css'
const Card = ({emoji, heading, details}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <a href="">
        <button className="cardbutton">Learn More</button>
        </a>
    </div>
  )
}

export default Card