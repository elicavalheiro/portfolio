import React from 'react';
import './styles.css';
import { ReactComponent as Image } from '../../assets/image.svg';

const Home = () => {
  return(
    <main className="main">
      <section className="intro">
        <Image className="image" />
        <div className="intro-text">
          <h1>Hello, I’m Eli!</h1>
          <h2>Front-end developer <br /> & Associate Product <br /> Manager.</h2>
        </div>
      </section>
      <section className="about">
        <h1>About</h1>
        <p>
          Driven by my <strong>passion for technology</strong>, my objective is to <strong>create digital products</strong> and <strong>be part of projects</strong> that allows me to <strong>innovate</strong> and <strong>make great experiences to people</strong>. I'm looking for challenges that could lead me to <strong>another moment</strong> and because of that I'm willing to <strong>big changes</strong>.
          <br />
          <br />
          As a developer, <strong>I love to develop apps and websites</strong> with awesome interface, especially using <strong>ReactJS</strong>. And <strong>think</strong>, <strong>create projects</strong> and <strong>follow up the development</strong> of products that <strong>make the difference</strong> is what I want to do as an APM!
          <br />
          <br />
          And at last but not least, as a freelancer, I would love to help you <strong>get your awesome idea out of the paper</strong>! :D
        </p>
      </section>
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
      <section className="works">
        <h1>Work <br /> Experiences</h1>
        <div className="work-container">
          <ul className="work-list-left">
            <li className="work-job">
            <span>Nov 2019  - Mar 2020</span>
            <h3>Leankeep Software</h3>
            <h2>Software Development Coordinator</h2>
            <span>4 months</span>
            </li>
            <li className="work-job">
            <span>Nov 2019  - Mar 2020</span>
            <h3>Leankeep Software</h3>
            <h2>Software Development Coordinator</h2>
            <span>4 months</span>
            </li>
          </ul>
          <ul className="work-list-right">
            <li className="work-job">
              <span>Nov 2019  - Mar 2020</span>
              <h3>Leankeep Software</h3>
              <h2>Software Development Coordinator</h2>
              <span>4 months</span>
            </li>
            <li className="work-job">
              <span>Nov 2019  - Mar 2020</span>
              <h3>Leankeep Software</h3>
              <h2>Software Development Coordinator</h2>
              <span>4 months</span>
            </li>
            <li className="work-job">
              <span>Nov 2019  - Mar 2020</span>
              <h3>Leankeep Software</h3>
              <h2>Software Development Coordinator</h2>
              <span>4 months</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="contact"></section>
    </main>
  )
};

export default Home;
