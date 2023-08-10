import React from 'react'
import './Intro.css'
import Facebook from '../../img/Facebook1.png';
import Instagram from '../../img/instagram.png';
import Whatsapp from '../../img/Whatsapp.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import tower from '../../img/tower.png'
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Alpine Domicile</span>
                <span>Building Dreams, Building Realities.</span>
                <span>Alpine Domicile is here to serve you in all your construction and building projects, We turn your dreams into reality!</span>
            </div>
            <button className="button i-button cbutton">Hire Us</button>
            <div className="i-icons">
                <a href="https://instagram.com/alpine_domicile?igshid=MzRlODBiNWFlZA==" target='_blank'><img src={Instagram} alt="IG" /></a>
                <a href="https://wa.me/919946747507" target='_blank'><img src={Whatsapp} alt="WB" /></a>
                <a href="https://www.facebook.com/profile.php?id=100094878421803&mibextid=LQQJ4d" target='_blank'><img src={Facebook} alt="FB" /></a>
            </div>
            </div>
        
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={tower} alt="" />
            {/* <img src={Glasses} alt="" /> */}
            <div
            style={{top: '-4%', left: '56%'}}>
                <FloatingDiv image={Crown} txt1='Reliable' txt2='Construction'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={Thumbup} txt1={'Modern'} txt2={'Designs'}/>
            </div>
            <div className="blur" style={{background: 'var(--dblue)'}}></div>
            <div className="blur" style={{background: 'var(--lblue)', top: '17rem', width: '21rem', height: '11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro