import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r80zuts', 'template_0tsm4w6', form.current, 'JJEy6-GesRuKSzfvL')
      
    e.target.reset();
  };
  return (
   <div className = "contactSection" id = "contact">
<h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>sammanbhetwal2025@gmail.com</h5>
            <a href="mailto: bhetwalsamman2@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Samman Bhetwal</h5>
            <a href="https://m.me/samman.bhetwal.39" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+2018878818</h5>
            <a href="https://api.whatsapp.com/send?phone+2018878818" target="_blank">Send a message</a>
          </article>
        </div>
        {/**End of contact options */}
        <form ref={form } onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea type="text" name="name" placeholder="Your Full Name" required ></textarea>
          <button type="submit" className='btn btn-primary'> Send a message</button>
        </form>
      </div>
   </div>
      
   
  )
}

export default Contact
