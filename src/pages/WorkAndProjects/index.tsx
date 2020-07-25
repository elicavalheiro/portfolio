import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const WorkAndProjects = () => {
  return(
    <div className="work-page">
      <Link to="/projects/totodo">.totodo</Link>
      <Link to="/projects/devcv">DevCV</Link>
    </div>
  )
}

export default WorkAndProjects;
