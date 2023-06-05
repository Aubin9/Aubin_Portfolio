import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";
import {BsPatchCheck} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>My skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <ListExperiences />
        <div className="experience__frontend">
          <h3>Front end development</h3>
          <div className="ecperience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>Backend development</h3>
          <div className="ecperience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
             <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>GUI backend</h4>
                <small className="text-light">Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
