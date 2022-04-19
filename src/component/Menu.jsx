import Modal from 'react-modal';
import React, { useContext } from "react";
import Header from './Header';
import MyContext from '../context/MyContext';

Modal.setAppElement('#root');

const Menu = () => {
  const { openModal, modalIsOpen, closeModal } = useContext(MyContext);

  return (
    <>
    <div className='menu'>
      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='Modal'
        overlayClassName="Overlay"
      >
        <a onClick={closeModal} href='#home'>
          <h1>Início</h1>
        </a>
        <a onClick={closeModal} href="#sobre">
          <h1>Sobre mim</h1>
        </a>
        <a onClick={closeModal} href="#projetos">
          <h1>Projetos</h1>
        </a>
        <a onClick={closeModal} href="#contato">
          <h1>Contato</h1>      
        </a>
      </Modal>
    </div>
      <Header value={openModal}/>
    </>
  )
}
export default Menu;
