import React from 'react';
import GuilhermeCV from '../GuilhermeCurrículo.pdf'

const Sobre = () => {
  return (
    <section id='sobre' className='sobre'>
      <h1>Sobre mim</h1>
      <div className='sobre-content'>
        <p className='p1'>
        Formado em Gestão de Recursos Humanos pela Unip, estou em transição de carreira, migrando para a área de tecnologia, atualmente estudando desenvolvimento web. Onde finalmente encontrei o que procurava: A constante mudança! 
        </p>
        <p className='p2'>
        Me fascina como a programação pode ser desafiadora e gratificante, resolvendo desde problemas simples do nosso cotidiano, até mudar o destino da humanidade.
        </p>
        <p className='p3'>
        Estou a procura da primeira oportunidade para trocar conhecimentos e fazer a diferença.
        </p>
        <div className='sobre-btn-content'>
          <a href={GuilhermeCV} download>
            <button>Baixar meu CV</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sobre;