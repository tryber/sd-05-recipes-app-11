import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import CardIngredient from '../Components/cards/CardIngredient';
import { searchMealsByListOfIngredient } from '../Services/ApiComida';
import { useState } from 'react';
import { searchCockTailByListOfIngredient } from '../Services/ApiBebida';
import { Link } from 'react-router-dom';

export default function TelaExplorarIngredientes(props) {
  const tipo = /comida/.test(props.match.path) ? 'comidas' : 'bebidas';
  const id = tipo === 'comidas' ? 'idMeal' : 'idDrink';
  const [lista, setLista] = useState([]);
  useEffect(() => {
    if (tipo === 'comidas') {
      searchMealsByListOfIngredient().then((resposta) => {
        if (!resposta) {
          return null;
        }
        console.log(resposta);
        return setLista(resposta);
      });
    } else {
      console.log('bebidas');
      searchCockTailByListOfIngredient().then((resposta) => {
        if (!resposta) {
          return null;
        }

        return setLista(resposta);
      });
    }
  }, []);
  console.log(lista);
  return (
    <div>
      <BarraHeader title={'Explorar Ingredientes'} showTop="true" />
      <br />
      <br />
      <br />
      <br />
      {lista
        .filter((_, index) => index < 12)
        .map((el, index) => {
          console.log(tipo === 'comidas');
          const ingrediente = tipo === 'comidas' ? el.strIngredient : el.strIngredient1;
          console.log(ingrediente);
          return (
            <Link to={`/${tipo}`}>
              <CardIngredient
                index={index}
                title={tipo === 'comidas' ? ingrediente : el.strIngredient1}
                image={
                  tipo === 'comidas'
                    ? `https://www.themealdb.com/images/ingredients/${el.strIngredient}-Small.png`
                    : `https://www.thecocktaildb.com/images/ingredients/${el.strIngredient1}-Small.png `
                }
              />
            </Link>
          );
        })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MenuInferior />
    </div>
  );
}

TelaExplorarIngredientes.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
