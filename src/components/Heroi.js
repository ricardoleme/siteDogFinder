import React from 'react';
import '../App.css';
import { Button } from './Botao';
import './Heroi.css';

function Heroi() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>DOG FINDER</h1>
      <p>O que você está procurando para o seu cão?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMECE AGORA
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          VEJA O COMERCIAL <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Heroi;
