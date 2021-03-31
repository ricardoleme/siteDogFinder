import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import './Heroi.css';
import videoDog from '../videos/video-1.mp4'


function Heroi() {
  return (
    <div className='heroi-container'>
      <video src={videoDog} autoPlay loop muted />
      <h1>DOG FINDER</h1>
      <p>Procura algo para o seu cão?</p>
      <div className='heroi-btns'>
      <Link to='/novo' className='btn-mobile'>
      <button
        className={'btn btn-delineado btn-grande'}
      >
       JÁ É USUÁRIO?
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
