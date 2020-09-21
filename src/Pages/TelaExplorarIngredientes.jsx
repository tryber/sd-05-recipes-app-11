import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import CardIngredient from '../Components/cards/CardIngredient';

export default function TelaExplorarIngredientes(props) {
  const tipo = /comida/.test(props.match.path) ? 'comidas' : 'bebidas';
  const id = tipo === 'comidas' ? 'idMeal' : 'idDrink';
  useEffect(() => {
    searchMealById(idDaReceita).then((resposta) => {
      if (!resposta) {
        return null;
      }
      return setDetails(resposta[0]);
    });
    updateStatus(idDaReceita, setStatus, setFavorite, 'meals');
  }, []);
  return (
    <div>
      <BarraHeader title={'Explorar Ingredientes'} showTop="true" />
      <br /><br /><br /><br />
      <CardIngredient title="Luca" image="Pr"/>
      <MenuInferior />
    </div>
  );
}

TelaExplorarIngredientes.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
