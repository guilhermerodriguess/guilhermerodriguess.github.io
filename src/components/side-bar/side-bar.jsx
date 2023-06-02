import React from 'react';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import whatsappIcon from '../../assets/icons/whatsapp-icon.svg';
import './side-bar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__social-icons">
        <li>
          <a href="https://www.linkedin.com/in/guilhermerodriguessousa/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin Ícone" />
          </a>
        </li>
        <li>
          <a href="https://github.com/guilhermerodriguess/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Ícone" />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5561999951917&text=Ol%C3%A1%20Guilherme,%20vim%20pelo%20seu%20portf%C3%B3lio!%20Tudo%20bem%20com%20voc%C3%AA?" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whats App Ícone" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
