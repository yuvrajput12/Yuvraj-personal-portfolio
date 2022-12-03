import React from 'react'
import './project.css'
import IMG1 from '../../assets/project3.webp'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.webp'
import IMG4 from '../../assets/project4.webp'
import IMG5 from '../../assets/project5.webp'
import IMG6 from '../../assets/project2.jpg'

const project = () => {
  return (
    <section id='project'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG1} alt="" />
          </div>
          <h3>this is a Project item title</h3>
          <div className="project__item-cta">
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG2} alt="" />
          </div>
          <h3>this is a Project item title</h3>
          <div className="project__item-cta">
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG3} alt="" />
          </div>
          <h3>this is a Project item title</h3>
         <div className="project__item-cta">
         <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG4} alt="" />
          </div>
          <h3>this is a Project item title</h3>
          <div className="project__item-cta">
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG5} alt="" />
          </div>
          <h3>this is a Project item title</h3>
         <div className="project__item-cta">
         <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='project__item'>
          <div className="project__item-image">
                <img src={IMG6} alt="" />
          </div>
          <h3>this is a Project item title</h3>
         <div className="project__item-cta">
         <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default project