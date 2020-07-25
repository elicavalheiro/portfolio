import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <Link to="/en" className="logo">Eli Cavalheiro</Link>
      <nav>
        <Link to="/en">about</Link>
        <Link to="/en/work-projects">work & projects</Link>
      </nav>
    </header>
  )
}

export default Header;
