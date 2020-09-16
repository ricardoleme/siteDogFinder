import React from 'react';
import '../../App.css';

import Cartao from '../Cartao';
import SecaoHeroi from '../Heroi';
import Rodape from '../Rodape';

function Inicio() {
  return (
    <>
      <SecaoHeroi />
      <Cartao />
      <Rodape />
    </>
  );
}

export default Inicio;
