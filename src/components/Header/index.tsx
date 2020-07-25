import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <NavLink to="/" className="logo">Eli Cavalheiro</NavLink>
      <nav>
        <NavLink exact to="/" activeClassName="selected">about</NavLink>
        <NavLink to="/projects" activeClassName="selected">work & projects</NavLink>
      </nav>
    </header>
  )
}

export default Header;
