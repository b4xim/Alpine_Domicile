import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png' 
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fb from '@iconscout/react-unicons/icons/uil-facebook'
import Mail from '@iconscout/react-unicons/icons/uil-whatsapp'
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
             <span id='res'>ALPINE DOMICILE <br />alpinedomicile@gmail.com</span>
             <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Fb color='white' size='3rem'/>
                <Mail color='white' size='3rem'/>
             </div>
        </div>
        <span className='textdiv'>Developed By<br />2023 - All Rights Reserved - Basim Ahmed - ibasimahmed@gmail.com</span>
    </div>
  )
}

export default Footer