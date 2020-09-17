import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as DogWalker} from '../components/icons/walking.svg'
import './Navbar.css';
import './Botao.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [exibeBotao, setExibeBotao] = useState(true);

  const handleClick = () => setClick(!click);
  const fechaMobileMenu = () => setClick(false);

  const verificaBotao = () => {
    if (window.innerWidth <= 960) {
      setExibeBotao(false);
    } else {
      setExibeBotao(true);
    }
  };

  useEffect(() => {
    verificaBotao();
  }, []);

  window.addEventListener('resize', verificaBotao);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={fechaMobileMenu}>
          <DogWalker  width="50"  /> Dog Finder    
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={fechaMobileMenu}>
                Início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/servicos'
                className='nav-links'
                onClick={fechaMobileMenu}
              >
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/produtos'
                className='nav-links'
                onClick={fechaMobileMenu}
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link
                to='/novo'
                className='nav-links-mobile'
                onClick={fechaMobileMenu}
              >
                Cadastre-se
              </Link>
            </li>
          </ul>
          {exibeBotao && 
          <Link
          to='/novo'>
           <button
           className={'btn btn-delineado btn-grande'}
         >
          CADASTRE-SE
         </button>
         </Link>
         }  
        </div>
      </nav>
    </>
  );
}

export default Navbar;
