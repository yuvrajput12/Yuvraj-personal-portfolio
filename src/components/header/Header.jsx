import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/photo.png'
import headersocial from './headersocial.jsx'

const header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h5 className='firstline'>Hii I'm</h5>
        <h1 className='secondline'>Yuvraj Singh</h1>
        <h5 className="text-light">I'm a Web Developer</h5>
        <CTA />
        <headersocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll__Down</a>


      </div>
    </header>
  )
}

export default header