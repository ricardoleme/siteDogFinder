import React from 'react'
import './Cartao.css'
import ItemCartao from './ItemCartao'
/* Imagens */
import ImgCartao6 from '../images/img-6.jpg'
import ImgCartao2 from '../images/img-2.jpg'
import ImgCartao3 from '../images/img-3.jpg'
import ImgCartao4 from '../images/img-4.jpg'
import ImgCartao5 from '../images/img-5.jpg'

function Cartao() {
  return (
    <div className='cartao'>
      <h1>Confira tudo o que a Dog Finder pode oferecer para você e seu amigo!</h1>
      <div className='cartao-container'>
        <div className='cartao-wrapper'>
          <ul className='cartao-items'>
            <ItemCartao
              src={ImgCartao6}
              text='Contrate um passeador de cães para o seu melhor amigo'
              label='Dog Walker'
              path='/servicos'
            />
            <ItemCartao
              src={ImgCartao2}
              text='Encontre um clube próximo para praticar agility'
              label='Agility'
              path='/servicos'
            />
          </ul>
          <ul className='cartao-items'>
            <ItemCartao
              src={ImgCartao3}
              text='Veja locais próximos para deixar o seu pet durante as suas viagens'
              label='Hotel'
              path='/servicos'
            />
            <ItemCartao
              src={ImgCartao4}
              text='Consulte a lista completa de produtos disponíveis para delivery'
              label='Produtos'
              path='/produtos'
            />
            <ItemCartao
              src={ImgCartao5}
              text='Ainda não é nosso cliente? Faça o seu cadastro!'
              label='Faça parte!'
              path='/novo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cartao;
