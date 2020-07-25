import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import Routes from './pages/Routes';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ParallaxProvider>
          <Header />
          <Routes />
        </ParallaxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
