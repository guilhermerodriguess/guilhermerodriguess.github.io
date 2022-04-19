import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({children}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
    return (
      <MyContext.Provider value={ {openModal, modalIsOpen, closeModal} }>
        {children}
      </MyContext.Provider>
    )
  }
export default MyProvider;