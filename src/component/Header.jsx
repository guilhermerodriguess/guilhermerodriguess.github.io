import { useContext } from 'react';
import MyContext from '../context/MyContext';
import menuIcon from '../Images/menuIcon.avif'

const Header = () => {
  const { openModal } = useContext(MyContext);

  return (
    <header className='header'>
      <div className='menu-content'>
      <img onClick={openModal} src={menuIcon} alt="menu icon" className='menu-icon'/>
      </div>
      <nav>
        <ul>
          <a href="#home">
            <li>Início</li>
          </a>
          <a href="#sobre">
            <li>Sobre mim</li>
          </a>          
          <a href="#projetos">
            <li>Projetos</li>
          </a>          
          <a href="#contato">
            <li>Contato</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header;