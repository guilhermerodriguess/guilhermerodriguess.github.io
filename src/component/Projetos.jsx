import React from 'react';
import trivia from '../Images/Tela-de-Login.avif';
import Trybetunes from '../Images/Trybetunes.avif'

const Projetos = () => {
  return (
    <section id='projetos' className='projetos'>
      <h1>Projetos</h1>
      <div className='projetos-content'>
        <div className='projeto projeto-1'>
          <div>
            <img src={trivia} alt="" />
          </div>
          <a className='link-projeto' target="_blank" href="https://guilhermerodriguess.github.io/project-trivia" rel="noreferrer">
            <button>Jogo de Perguntas</button>
          </a>
        </div>
        <div className='projeto projeto-2'>
          <div>
            <img src={Trybetunes} alt="" />
          </div>
          <a className='link-projeto' target="_blank" href="https://guilhermerodriguess.github.io/project-trybetunes" rel="noreferrer">
            <button>Streaming de música</button>
          </a>
          </div>
        <div className='projeto projeto-3'>
          <div>
              <img src={trivia} alt="" />
            </div>
            <a className='link-projeto' target="_blank" href="https://guilhermerodriguess.github.io/project-frontend-online-store" rel="noreferrer">
            <button>E-commerce</button>
          </a>
          </div>
        <div className='projeto projeto-4'>
          <div>
              <img src={trivia} alt="" />
            </div>
            <a className='link-projeto' target="_blank" href="https://guilhermerodriguess.github.io/project-trivia" rel="noreferrer">
            <button>Undefined</button>
          </a>
          </div>
      </div>
    </section>
  )
}

export default Projetos;