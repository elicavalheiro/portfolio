import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <Link to="/" className="logo">Eli Cavalheiro</Link>
      <nav>
        <Link to="/" className="selected">about</Link>
        <Link to="work-projects">work & projects</Link>
      </nav>
    </header>
  )
}

export default Header;
