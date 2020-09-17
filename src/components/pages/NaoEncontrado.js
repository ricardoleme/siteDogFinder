import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <>
      <div className='fundo naoEncontrado'>
        Página não encontrada
        <Link to='/novo' className='btn-mobile'>
          <button
            className={'btn btn-delineado btn-grande'}
          >
            Voltar na página inicial
          </button>
        </Link>
      </div>
    </>
  )
}
