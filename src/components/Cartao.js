import React from 'react';
import './Cartao.css';
import ItemCartao from './ItemCartao';

function Cartao() {
  return (
    <div className='cartao'>
      <h1>Confira tudo o que a Dog Finder pode oferecer para você e seu amigo!</h1>
      <div className='cartao-container'>
        <div className='cartao-wrapper'>
          <ul className='cartao-items'>
            <ItemCartao
              src='images/img-6.jpg'
              text='Contrate um passeador de cães para o seu melhor amigo'
              label='Dog Walker'
              path='/servicos'
            />
            <ItemCartao
              src='images/img-2.jpg'
              text='Encontre um clube próximo para praticar agility'
              label='Agility'
              path='/servicos'
            />
          </ul>
          <ul className='cartao-items'>
            <ItemCartao
              src='images/img-3.jpg'
              text='Veja locais próximos para deixar o seu pet durante as suas viagens'
              label='Hotel'
              path='/servicos'
            />
            <ItemCartao
              src='images/img-4.jpg'
              text='Consulte a lista completa de produtos disponíveis para delivery'
              label='Produtos'
              path='/produtos'
            />
            <ItemCartao
              src='images/img-5.jpg'
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
