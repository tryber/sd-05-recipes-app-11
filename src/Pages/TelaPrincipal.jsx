import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';

export default function TelaPrincipal(props) {
  console.log(props);
  return (/comida/).test(props.match.path) ?
  ( 
    <div>
      <BarraBuscaHeader />
      comida
      <MenuInferior />
    </div>
  )
  :
  (
    <div>
      <BarraBuscaHeader />
      bebida
      <MenuInferior />
    </div>
  );
}

TelaPrincipal.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
