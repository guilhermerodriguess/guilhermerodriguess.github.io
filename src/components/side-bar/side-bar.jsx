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
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin Ícone" />
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Ícone" />
          </a>
        </li>
        <li>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whats App Ícone" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
