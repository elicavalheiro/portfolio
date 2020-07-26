import React from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { TiHeart } from 'react-icons/ti';
import './styles.css';
import image from '../../assets/devcv-project.png';

const TotodoProject = () => {
  return(
    <>
      <div className="project-content">
        <div className="project-texts">
          <h1>#DevCV</h1>
          <p>Simple project that consumes GitHub API where you can search for a user and get information about projects created on GitHub.
For recruiters that are looking for developers, feels nice to have a simple visualization of a applicant projects. :D</p>
        </div>
        <ParallaxBanner
          className="devcv-image"
          layers={[
            {
              image: image,
              amount: 0.1,
            }
          ]}
          style={{ height: '600px', width: '100%'}}
        >
        </ParallaxBanner>
      </div>

      <div className="project-page">
        <Link to="#">see live</Link>
      </div>

      <nav className="project-nav">
        <Link to="/projects"><IoMdArrowBack className="project-icon" />return to work & projects</Link>
        <Link to="/projects/totodo">next project <IoMdArrowForward className="project-icon" /></Link>
      </nav>

      <footer className="project-footer">
        Made with <TiHeart className="project-icon" /> by Eli Cavalheiro
      </footer>
    </>
  )
};

export default TotodoProject;
