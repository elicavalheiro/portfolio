import React from 'react';
import './styles.css';
import { ReactComponent as Image } from '../../assets/image.svg';

const Intro = () => {
  return(
    <section className="intro">
      <Image className="image" />
      <div className="intro-text">
        <h1>Hello, I’m Eli!</h1>
        <h2>Front-end developer <br /> & Associate Product <br /> Manager.</h2>
      </div>
    </section>
  )
}

export default Intro;
