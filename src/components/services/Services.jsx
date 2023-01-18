import React from 'react';
import './services.css';
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <div className='service__section'>
<section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX designer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
    </div>
    
  )
}

export default Services
