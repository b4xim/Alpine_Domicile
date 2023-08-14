import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
  <div className="maindiv" id='Experience'>
    <div className="expname">
        <span>Our </span>
        <span>Experiences</span>
        <span>We are highly experienced in all the fields we are working on with lots of different clients <br />We can cater any of your requirements with the expertise from our experiences.</span>
      </div>
    <div className="experience">
      <div className="achievement">
        <div className="circle">8+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      
      <div className="achievement">
        <div className="circle">30+</div>
        <span>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle">7+</div>
        <span>Services</span>
        <span>Offered</span>
      </div>
      <div className="blur s-blur3" style={{background: 'var(--lblue)'}}></div>
      <div className="blur s-blur4" style={{background: 'var(--dblue)'}}></div>
    </div>
  </div>
  )
}

export default Experience