import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import Routes from './pages/Routes';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <ParallaxProvider>
          <Header />
          <Routes />
        </ParallaxProvider>
      </Router>
    </div>
  );
}

export default App;
