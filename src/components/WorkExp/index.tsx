import React from 'react';
import './styles.css';

const workExperiences = [
  {
    id: 0,
    job_title: "Software Development Coordinator",
    company: "Leankeep Software",
    dates: "Nov 2019 - Mar 2020",
    work_time: "5 months",
    position: "right",
  },
  {
    id: 1,
    job_title: "Software Development Analyst",
    company: "Leankeep Software",
    dates: "Aug 2019",
    work_time: "4 months",
    position: "left",
  },
  {
    id: 2,
    job_title: "Customer Success Support",
    company: "Leankeep Software",
    dates: "Feb 2019",
    work_time: "6 months",
    position: "right",
  },
  {
    id: 3,
    job_title: "Technical Support Analyst",
    company: "Stefanini",
    dates: "Sep 2018 - Jan 2019",
    work_time: "6 months",
    position: "left",
  },
  {
    id: 4,
    job_title: "Personalized Internet Assessor",
    company: "Stefanini",
    dates: "Oct 2018 - Jan 2019",
    work_time: "4 months",
    position: "right"
  }
]

const WorkExp = () => {
  const workList = workExperiences.map(work => {
    if(work.position === "left"){
      return(
        <li className="work-job left" key={work.id} >
          <div className="content">
            <p>{work.dates}</p>
            <h3>{work.company}</h3>
            <h2>{work.job_title}</h2>
            <p>{work.work_time}</p>
          </div>
        </li>
      )
    } else {
      return(
        <li className="work-job right" key={work.id} >
          <div className="content">
            <p>{work.dates}</p>
            <h3>{work.company}</h3>
            <h2>{work.job_title}</h2>
            <p>{work.work_time}</p>
          </div>
        </li>
      )
    };
  });

  return(
    <section className="works">
      <h1>Work <br /> Experiences</h1>
      <div className="work-container">
        <ul className="work-list">
          {workList}
        </ul>
      </div>
    </section>
  )
}

export default WorkExp;
