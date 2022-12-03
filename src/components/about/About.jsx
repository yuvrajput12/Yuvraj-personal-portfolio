import React from 'react'
import './about.css'
import ME from '../../assets/about-image.jpg'
import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

     <div className=".container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>


          <article className='about__card'>
            <GiSkills className='about__icon'/>
            <h5>Skills</h5>
            <small>10+</small>
          </article>


          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>2-3</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus sequi itaque eligendi laudantium eveniet similique, voluptatem debitis nam modi et corrupti vitae rerum ipsa natus, fugit velit, culpa mollitia.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
    </section>
  )
}

export default about