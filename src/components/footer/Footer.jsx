import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const footer = () => {
  return (
   <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twiter.com"><AiOutlineTwitter/></a>
        <a href="https://Linkedin.com"><AiFillLinkedin/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy;2022 All Rights Reserved</small>
      </div>
   </footer>
  )
}

export default footer