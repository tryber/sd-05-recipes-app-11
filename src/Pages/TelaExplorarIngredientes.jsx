import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';

export default function TelaExplorarIngredientes(props) {
  return (/comidas/).test(props.match.path) ?
  (
    <div>
      <BarraBuscaHeader title={'Explorar Ingredientes'} />
      <MenuInferior />
    </div>
  )
  :
  (
    <div>
      <BarraBuscaHeader title={'Explorar Ingredientes'} />
      <MenuInferior />
    </div>
  );
}

TelaExplorarIngredientes.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
