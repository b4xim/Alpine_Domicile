import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const[done, setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5jak5s', 'template_4sbff5e', form.current, 'mHrqJkaS6Tn-RcT2F')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get In Touch!</span>
                <span>Contact Us</span>
                <span> Email : alpinedomicile@gmail.com <br /> Phone : +91 99467 47507, +91 97460 47507</span>
                <div className="blur s-blur1" style={{background: 'var(--lblue)'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value="    Send    " className='button' />
                <span>{done && "Thanks For Contacing Us!  We will get back to you shortly."}</span>
                <div className="blur c-blur1" style={{background: 'var(--dblue)'}}></div>
            </form>

        </div>
    </div>
  )
}

export default Contact