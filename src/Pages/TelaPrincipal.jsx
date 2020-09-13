import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';
import ListReceitas from '../Components/ListReceitas';

export default function TelaPrincipal(props) {
  return /comida/.test(props.match.path) ? (
    <div>
      <BarraBuscaHeader title={'Comidas'} />
      <ListReceitas />
      <MenuInferior />
    </div>
  ) : (
    <div>
      <BarraBuscaHeader title={'Bebidas'} />
      <ListReceitas />
      <MenuInferior />
    </div>
  );
}

TelaPrincipal.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
