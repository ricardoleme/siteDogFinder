import React from 'react';
import './Rodape.css';
import { Link } from 'react-router-dom';

function Rodape() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Faça parte do clube de clientes da Dog Finder
        </p>
        <p className='footer-subscription-text'>
          Você pode cancelar a sua assinatura a qualquer momento. 
          Detestamos SPAM.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Informe o seu e-mail'
            />
            <button className='btn btn-delineado'>Assinar</button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/nofo'>Como Funciona</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Carreira</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos do Serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Fale Conosco</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Parceiros</Link>
            <Link to='/'>Patrocinadores</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>         
              Dog Finder &copy; {(new Date().getFullYear())}        
            </Link>
          </div>         
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rodape;
