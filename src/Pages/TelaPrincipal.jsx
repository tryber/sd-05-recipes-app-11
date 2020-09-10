import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';

export default function TelaPrincipal(props) {
  return (/comidas/).test(props.match.path) ?
  (
    <div>
      <BarraBuscaHeader title={'Comidas'} />
      comidas
      <MenuInferior />
    </div>
  )
  :
  (
    <div>
      <BarraBuscaHeader title={'Bebidas'} />
      bebidas
      <MenuInferior />
    </div>
  );
}

TelaPrincipal.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
