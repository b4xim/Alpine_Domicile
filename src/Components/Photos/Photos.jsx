import React from 'react'
import './Photos.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import sidebar from '../../img/sidebar.png'
import music from '../../img/musicapp.png'

const Photos = () => {
  return (
    <div className="photos">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Works Completed</span>
        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor='true'
        className='photos-slider'
        >
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={music} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
        </Swiper>
        <div className="blur s-blur5" style={{background: 'var(--lblue)'}}></div>
        <div className="blur s-blur6" style={{background: 'var(--dblue)'}}></div>
    </div>
  )
}

export default Photos