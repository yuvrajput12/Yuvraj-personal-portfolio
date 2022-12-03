import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiContactsBook2Fill} from 'react-icons/ri'
import  { useState } from "react";

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiUser/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
    <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><VscFolderLibrary/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Fill/></a>
   </nav>
  )
}

export default Nav