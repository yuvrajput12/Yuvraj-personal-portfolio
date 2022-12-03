import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const headersocial = () => {
  return (
    <div className="header__social">
        <a href="https://Linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://Github.com" target="_blank"><BsGithub/></a>
        <a href="https://Instagram.com" target="_blank"><FaInstagramSquare/></a>
        <a href="https://Twitter.com" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default headersocial