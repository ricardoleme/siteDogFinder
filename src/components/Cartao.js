import React from 'react';
import './Cartao.css';
import ItemCartao from './ItemCartao';

function Cartao() {
  return (
    <div className='cards'>
      <h1>Confira tudo o que a Dog Finder pode oferecer para você e seu amigo!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ItemCartao
              src='images/img-9.jpg'
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
          <ul className='cards__items'>
            <ItemCartao
              src='images/img-3.jpg'
              text='Veja locais próximos para deixar o seu pet durante as suas viagens'
              label='Hotel'
              path='/services'
            />
            <ItemCartao
              src='images/img-4.jpg'
              text='Consulte a lista completa de produtos disponíveis para delivery'
              label='Produtos'
              path='/produtos'
            />
            <ItemCartao
              src='images/img-8.jpg'
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
