import React from 'react';
import './styles.css';

const skills = [
  {id: 0, name: "HTML", percentage: "80%" },
  {id: 1, name: "Javascript", percentage: "60%" },
  {id: 2, name: "Node.js", percentage: "60%" },
  {id: 3, name: "CSS", percentage: "80%" },
  {id: 4, name: "ReactJS", percentage: "50%" },
  {id: 5, name: "Agile Methodologies", percentage: "80%" }
]

const certificates = [
  { id: 0, name: "Modern web development with Javascript", entity: "Udemy" },
  { id: 1, name: "Product Leadership &  Product Management", entity: "How Bootcamps"}
]

const Skills = () => {
  const skillsList = skills.map(skill => {
    if(skill.percentage === "80%"){
      return(
        <li key={skill.id} className="skill">
          <label className="skill-name">{skill.name}</label>
          <div className="skill-bar">
            <div className="skill-progress eighty-percent"></div>
            <div className="skill-percentage">{skill.percentage}</div>
          </div>
        </li>
      );
    }

    if(skill.percentage === "60%"){
      return(
        <li key={skill.id} className="skill">
          <label className="skill-name">{skill.name}</label>
          <div className="skill-bar">
            <div className="skill-progress sixty-percent"></div>
            <div className="skill-percentage">{skill.percentage}</div>
          </div>
        </li>
      )
    };

    if(skill.percentage === "50%"){
      return(
        <li key={skill.id} className="skill">
          <label className="skill-name">{skill.name}</label>
          <div className="skill-bar">
            <div className="skill-progress fifty-percent"></div>
            <div className="skill-percentage">{skill.percentage}</div>
          </div>
        </li>
      )
    };
  });

  const certificateList = certificates.map(certificate => {
    return(
      <li key={certificate.id}>_ {certificate.name} | <strong>{certificate.entity}</strong></li>
    )
  });

  return(
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <ul className="skills-row">
          {skillsList}
        </ul>
        <div className="other-skills">
          <p>Other Skills: Project Management | Customer Centric | Leadership | Analytical Capability | Data Driven | Problem Solving</p>
        </div>
        <div className="certificates">
          <h2>Certificates</h2>
          <ul>
            {certificateList}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
