import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <Link to="/en" className="logo">Eli Cavalheiro</Link>
      <nav>
        <Link to="/en" className="selected">about</Link>
        <Link to="/en/work-projects">work & projects</Link>
        <Link to="/pt">PT</Link>
        <Link to="/en" className="selected">EN</Link>
      </nav>
    </header>
  )
}

export default Header;
