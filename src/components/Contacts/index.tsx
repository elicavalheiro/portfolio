import React from 'react';
import './styles.css';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { FiGithub, FiMail } from 'react-icons/fi';

const Contacts = () => {
  return(
    <section className="contact">
      <h1>Contact Me</h1>
      <p><strong>If you enjoyed</strong> my portfolio and <strong>want to chat about an idea or a job</strong>,
      <br /> please <strong>contact me</strong> through one of these channels:</p>
      <div className="social">
        <a href="https://www.linkedin.com/in/elimaracavalheiro/">
          <FaLinkedinIn size={35} />
        </a>
        <a href="https://www.behance.net/elimaracavalhe">
          <FaBehance size={35} />
        </a>
        <a href="https://github.com/elicavalheiro">
          <FiGithub size={35} />
        </a>
        <a href="mailto: elimara.ac@gmail.com">
          <FiMail size={35} />
        </a>
      </div>
    </section>
  )
}

export default Contacts;
