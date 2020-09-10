import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';

export default function TelaExplorarBebidaComida(props) {
  return (/comidas/).test(props.match.path) ?
  (
    <div>
      <BarraBuscaHeader title={'Explorar Comidas'} />
      <MenuInferior />
    </div>
  )
  :
  (
    <div>
      <BarraBuscaHeader title={'Explorar Bebidas'} />
      <MenuInferior />
    </div>
  );
}

TelaExplorarBebidaComida.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
