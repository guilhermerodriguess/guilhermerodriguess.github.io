import React from 'react';
import gitHub from '../Images/logoGithub.avif';
import linkedin from '../Images/logoLinkedin.avif';
import pin from '../Images/pinIcon.avif';
import phone from '../Images/phoneIcon.avif';
import email from '../Images/emailIcon.avif'

const Contato = () => {
  return (
    <section id='contato' className='contato'>
      <h1>Contato</h1>
      <div className='contato-content'>
        <div className='social-content'>
          <a target='_blank' href="https://github.com/guilhermerodriguess" rel="noreferrer">
            <img className='github' src={gitHub} alt="" />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/guilhermerodriguessousa/" rel="noreferrer">
            <img className='linkedin' src={linkedin} alt="" />
          </a>
        </div>
        <div className='local-phone-email-content'>
          <a target='_blank' href="https://goo.gl/maps/Psswf4oMQ4eQ6JRFA" rel="noreferrer">
            <div className='local'>
              <img src={pin} alt=""/>
              <p>Brasília, Distrito Federal</p>
            </div>
          </a>
          <a target='_blank' href="https://api.whatsapp.com/send?phone=5561999951917&text=Olá,%20Guilherme!%20Tudo%20bem%20?%20Gostaria%20de%20conhecer%20melhor%20o%20seu%20trabalho." rel="noreferrer">
            <div className='phone'>
              <img src={phone} alt=""/>
              <p>(61) 9 9995-1917</p>
            </div>
          </a>
          <a href="emailto:guilhermero@outlook.com">
            <div className='email'>
              <img className='email-icon' src={email} alt=""/>
              <p>guilhermero@outlook.com</p>
            </div>
          </a>
        </div>
        <div className='inputs-content'>
          <form className='form-inputs' action="">
            <div className='name-email-inputs'>
              <input className='name-input' placeholder='Nome' type="text" />
              <input className='email-input' placeholder='Email' type="email" />
            </div>
            <textarea className='escreva-input' placeholder='Escreva para mim...' name="" id="" cols="30" rows="2"></textarea>
            <button className='btn-enviar' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;