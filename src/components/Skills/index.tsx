import React from 'react';
import './styles.css';

const Skills = () => {
  return(
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skills-row">
          <div className="skill">
            <label className="skill-name">HTML</label>
            <div className="skill-bar">
              <div className="skill-progress eighty-percent"></div>
              <div className="skill-percentage">80%</div>
            </div>
          </div>
          <div className="skill">
            <label className="skill-name">Javascript</label>
            <div className="skill-bar">
              <div className="skill-progress sixty-percent"></div>
              <div className="skill-percentage">60%</div>
            </div>
          </div>
          <div className="skill">
            <label className="skill-name">Node.js</label>
            <div className="skill-bar">
              <div className="skill-progress eighty-percent"></div>
              <div className="skill-percentage">80%</div>
            </div>
          </div>
        </div>

        <div className="skills-row">
        <div className="skill">
          <label className="skill-name">CSS</label>
          <div className="skill-bar">
            <div className="skill-progress eighty-percent"></div>
            <div className="skill-percentage">80%</div>
          </div>
        </div>
        <div className="skill">
          <label className="skill-name">ReactJS</label>
          <div className="skill-bar">
            <div className="skill-progress fifty-percent"></div>
            <div className="skill-percentage">50%</div>
          </div>
        </div>
        <div className="skill">
          <label className="skill-name">Agile Methodologies</label>
          <div className="skill-bar">
            <div className="skill-progress eighty-percent"></div>
            <div className="skill-percentage">80%</div>
          </div>
        </div>
        </div>
        <div className="other-skills">
          <p>Other Skills: Project Management | Customer Centric | Leadership | Analytical Capability | Data Driven | Problem Solving</p>
        </div>

        <div className="certificates">
          <h2>Certificates</h2>
          <ul>
            <li>_ Modern web development with Javascript | <strong>UDEMY</strong></li>
            <li>_ Product Leadership &  Product Management  | <strong>HOW BOOTCAMPS</strong></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
