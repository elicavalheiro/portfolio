import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const WorkAndProjects = () => {
  return(
    <div className="work-page">
      <Link to="/en/work-projects/totodo">.totodo</Link>
      <Link to="/en/work-projects/devcv">DevCV</Link>
    </div>
  )
}

export default WorkAndProjects;
