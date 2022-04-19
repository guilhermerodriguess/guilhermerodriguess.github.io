import React, { useState } from 'react';
import toggle from '../Images/toggle.avif'
import toggleDark from '../Images/toggle-dark.avif'

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.querySelector('html');
     html.classList.toggle('dark-mode');

    setDarkMode(!darkMode);
  }

  const darkModeOn = <img className='dm-on' onClick={toggleDarkMode} src={toggleDark} alt='modo escuro ligado'/>
  const darkModeOff = <img className='dm-off' onClick={toggleDarkMode} src={toggle} alt='modo escuro desligado'/>

  return (
    <footer>
      <hr></hr>
      <h2>Dark mode</h2>
        {darkMode ? darkModeOn : darkModeOff}
      <h3>Letras miúdas do final</h3>
      <p className='easter-egg'>O tempo passa mais rápido do que podemos perceber, por isso, aproveite cada segundo. Não perca tempo lendo letras miúdas sem sentido.</p>
      <hr></hr>
      <p className='creditos-copia-nao-comedia'>Criado e desenvolvido por Guilherme Rodrigues &copy;</p>
    </footer>
  )
}

export default Footer;