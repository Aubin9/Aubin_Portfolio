import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import{AiFillFolder} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h1>Get to know</h1>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Client</h5>
              <small>empty</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>

            <article className='about__card'>
              <AiFillFolder className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ months internship</small>
            </article>
          </div>
          <p>
            I am actually following a bachelor degree program as computer ingineering option sofware engineer.
            Young bilingual Camerounian first speacking of french, I am so gratfull to be in an ingineering field
            and i wish to be very very useful in the sociaty in that of identify problems in the live society and
            be abble to comme out with sollutions, that's all about thinking as engineer !!
          </p>
          <a href="#contact" className='btn btn-primary'>Let us talk</a>
        </div>
      </div>
    </section>
  )
}

export default About