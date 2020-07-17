import React from 'react';
import './styles.css';

const Header = () => {
  return(
    <header className="header">
      <a href="/home" className="logo">Eli Cavalheiro</a>
      <nav>
        <a href="/home" className="selected">about</a>
        <a href="work_projects">work & projects</a>
        <a href="/pt">PT</a>
        <a href="/en" className="selected">EN</a>
      </nav>
    </header>
  )
}

export default Header;
