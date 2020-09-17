import React from 'react';
import { Link } from 'react-router-dom';

function ItemCartao(props) {
  return (
    <>
      <li className='cartao-item'>
        <Link className='cartao-item-link' to={props.path}>
          <figure className='cartao-item-pic-wrap' data-category={props.label}>
            <img
              className='cartao-item-img'         
              src={props.src}
              alt={props.alt}
            />
          </figure>
          <div className='cartao-item-info'>
            <h5 className='cartao-item-text'>{props.text}</h5>
          </div>                                                                            
        </Link>
      </li>
    </>
  );
}

export default ItemCartao;
