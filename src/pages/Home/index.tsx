import React from 'react';
import './styles.css';
import { TiHeart } from 'react-icons/ti';

import Intro from '../../components/Intro';
import About from '../../components/About';
import Skills from '../../components/Skills';
import WorkExp from '../../components/WorkExp';
import Contacts from '../../components/Contacts';

const Home = () => {
  return(
    <main className="main">
      <Intro />
      <About />
      <Skills />
      <WorkExp />
      <Contacts />
      <footer>Made with <TiHeart className="heart-icon" /> by Eli Cavalheiro</footer>
    </main>
  )
};

export default Home;
