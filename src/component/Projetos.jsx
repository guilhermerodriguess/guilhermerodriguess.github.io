import React from 'react';
import trivia from '../Images/Tela-de-Login.avif';

const Projetos = () => {
  return (
    <section id='projetos' className='projetos'>
      <h1>Projetos</h1>
      <div className='projetos-content'>
        <div className='projeto projeto-1'>
          <div>
            <img src={trivia} alt="" />
          </div>
          <h3>Jogo de Perguntas</h3>
        </div>
        <div className='projeto projeto-2'>
          <div>
              <img src={trivia} alt="" />
            </div>
            <h3>Jogo de Perguntas</h3>
          </div>
        <div className='projeto projeto-3'>
          <div>
              <img src={trivia} alt="" />
            </div>
            <h3>Jogo de Perguntas</h3>
          </div>
        <div className='projeto projeto-4'>
          <div>
              <img src={trivia} alt="" />
            </div>
            <h3>Jogo de Perguntas</h3>
          </div>
      </div>
    </section>
  )
}

export default Projetos;