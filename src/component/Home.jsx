import React from 'react';
import squareImage from '../Images/SquareImage.avif'
import arrow from '../Images/arrow.avif'

const Home = () => {
  return (
    <section id='home' className='home'>
      <main>
        <h1>Olá, mundo</h1>
        <div className='person-image-content'>
          <img src={squareImage} alt="Foto de Guilherme com blusa preta usando colar discreto e ao fundo uma paisagem de céu e arvores" className='person-image'/>
        </div>
        <div className='my-name-content'>
          <div className='my-name-is'>
            <h1>
              meu nome é
            </h1>
          </div>
          <div className='guilherme-content'>
            <h1>
              Guilherme
            </h1>
            <div className='line'/>
          </div>
          <div className='sou-dev-content'>
            <h2>Sou desenvolvedor web front end</h2>
          </div>
        </div>
        <img src={arrow} alt="" className='arrow'/>
      </main>
    </section>

  )
}

export default Home;