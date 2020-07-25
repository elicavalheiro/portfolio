import React from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { TiHeart } from 'react-icons/ti';
import './styles.css';
import image from '../../assets/totodo_project.png';

const TotodoProject = () => {
  return(
    <>
      <div className="project-content">
        <div className="project-texts">
          <h1>.totodo</h1>
          <p>A beatiful and easy to do app designed for people who wants to organize ideas, <br /> thoughts or even job tasks.</p>
        </div>
        <ParallaxBanner
          className="totodo-image"
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
        <Link to="/en/work-projects"><IoMdArrowBack className="project-icon" />return to work & projects</Link>
        <Link to="/en/work-projects/devcv">next project <IoMdArrowForward className="project-icon" /></Link>
      </nav>

      <footer className="project-footer">
        Made with <TiHeart className="project-icon" /> by Eli Cavalheiro
      </footer>
    </>
  )
};

export default TotodoProject;
