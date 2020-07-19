import React from 'react';
import './styles.css';

const WorkExp = () => {
  return(
    <section className="works">
      <h1>Work <br /> Experiences</h1>
      <div className="work-container">
        <ul className="work-list-left">
          <li className="work-job">
          <span>Aug 2019</span>
          <h3>Leankeep Software</h3>
          <h2>Software Development Analyst</h2>
          <span>4 months</span>
          </li>
          <li className="work-job">
          <span>Sep 2018 - Jan 2019</span>
          <h3>Stefanini</h3>
          <h2>Technical Support Analyst</h2>
          <span>6 months</span>
          </li>
        </ul>
        <ul className="work-list-right">
          <li className="work-job">
            <span>Nov 2019  - Mar 2020</span>
            <h3>Leankeep Software</h3>
            <h2>Software Development Coordinator</h2>
            <span>5 months</span>
          </li>
          <li className="work-job">
            <span>Feb 2019</span>
            <h3>Leankeep Software</h3>
            <h2>Customer Success Support</h2>
            <span>4 months</span>
          </li>
          <li className="work-job">
            <span>Oct 2018 - Jan 2019</span>
            <h3>Lionbridge</h3>
            <h2>Personalized Internet Assessor</h2>
            <span>4 months</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WorkExp;
