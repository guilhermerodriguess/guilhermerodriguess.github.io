import React, { useState } from 'react';
import gitHub from '../Images/logoGithub.avif';
import linkedin from '../Images/logoLinkedin.avif';
import pin from '../Images/pinIcon.avif';
import phone from '../Images/phoneIcon.avif';
import email from '../Images/emailIcon.avif'

const Contato = () => {
  const [messageSucess, setMessageSucess] = useState(false);

  const feedbackMessage = ({target}) => {
    target.reset();
    setMessageSucess(true);
  }

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
          <form className='form-inputs' action="https://api.staticforms.xyz/submit" method='POST' onSubmit={ (e) => feedbackMessage(e) } >
            <input type="hidden" name="accessKey" value='872d05c8-246e-4ec0-8696-0bb9afc00932' />
            <input type="hidden" name="redirectTo" value="https://guilhermerodriguess.github.io/#contato" />
            <div className='name-email-inputs'>
              <input name='name' className='name-input' placeholder='Nome' type="text" />
              <input name='email' className='email-input' placeholder='Email' type="email" />
            </div>
            <textarea name='message' className='escreva-input' placeholder='Escreva para mim...' cols="30" rows="2"></textarea>
            { messageSucess && <h2 className='sucessMessage'>Mensagem enviada com sucesso!</h2> }
            <button className='btn-enviar' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;