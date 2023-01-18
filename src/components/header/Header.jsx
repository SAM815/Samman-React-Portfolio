import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Samman.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <div className="container header__container">
    <h5>Hello I am </h5>
    <h1>Samman Bhetwal</h1>
    <h5 className='text-light'>FrontEnd Developer</h5>
    <CTA/>
    <HeaderSocials/>

    <div className="me">
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>
   </div>
  )
}

export default Header
