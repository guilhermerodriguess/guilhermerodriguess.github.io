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
    </header>
  )
}

export default Header;