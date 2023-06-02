/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../assets/icons/logo_gr_white.png';
import './menu-nav.css';

function MenuNav() {
  return (
    <nav className="menu-nav">
      <div className="menu-nav__logo">
        <a href="/">
          <img src={logo} alt="Logo da Empresa" className="menu-nav__logo-image" />
        </a>
      </div>
      <input type="checkbox" id="menu-nav-toggle" className="menu-nav__checkbox" />
      <label htmlFor="menu-nav-toggle" className="menu-nav__icon" />
      <ul className="menu-nav__list">
        <li className="menu-nav__item">
          <a href="/projects" className="menu-nav__link">
            PROJECTS
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="/contact" className="menu-nav__link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNav;
