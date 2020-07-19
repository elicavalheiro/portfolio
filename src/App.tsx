import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './pages/Routes';

import Header from './components/Header';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
