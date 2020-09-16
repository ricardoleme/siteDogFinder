import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import './Heroi.css';

function Heroi() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>DOG FINDER</h1>
      <p>O que você está procurando para o seu cão?</p>
      <div className='hero-btns'>
      <Link to='/novo' className='btn-mobile'>
      <button
        className={'btn btn-delineado btn-grande'}
      >
       INICIE AGORA
      </button>
    </Link>
    <Link to='/novo' className='btn-mobile'>
      <button
        className={'btn btn-primario btn-grande'}
      >
       VEJA O COMERCIAL <i className='far fa-play-circle' />
      </button>
    </Link>
      </div>
    </div>
  );
}

export default Heroi;
