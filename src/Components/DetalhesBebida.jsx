import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './CardRecomend.jsx';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { loopIndex, funcIngredients } from './DetalhesComida';

/* export function loopIndex(indexArr, IndexAtual) {
  let index = indexArr;
  if (indexArr < 0) index = 5;
  return index % 6 === IndexAtual % 6;
} */

function ReverseArrayFoto(sugestFood, indexRecom, setIndexRecom) {
  if (indexRecom < 0) {
    setIndexRecom(5);
    return sugestFood
      .filter((_, index) => index === 5 % 6 || loopIndex(index - 1, 5))
      .reverse()
      .map((item, index) => (
        <Card key={item.strMeal} title={item.strMeal} index={index} source={item.strMealThumb} />
      ));
  }
  return sugestFood
    .filter((_, index) => index === indexRecom % 6 || loopIndex(index - 1, indexRecom))
    .map((item, index) => (
      <Card key={item.strMeal} title={item.strMeal} index={index} source={item.strMealThumb} />
    ));
}

/* export function funcIngredients(ingredientes, details) {
  for (let i = 1; i < 20; i += 1) {
    if (
      details[`strIngredient${i}`] !== null &&
      details[`strIngredient${i}`] !== '' &&
      details[`strIngredient${i}`] !== undefined
    ) {
      ingredientes.push({
        ingrediente: details[`strIngredient${i}`],
        quantidade: details[`strMeasure${i}`],
      });
    }
  }
  return ingredientes;
} */

export default function Detalhes(props) {
  const {
    details, favoriteRecipes, status, indexRecom,
    setIndexRecom, sugestFood, idDaReceita,
  } = props;

  const ingredientes = funcIngredients([], details);
  console.log(details);
  return (
    <div>
      <img src={details.strDrinkThumb} alt={details.strDrink} data-testid="recipe-photo" />
      <div>
        <h1 data-testid="recipe-title">{details.strDrink}</h1>
        <img
          src={favoriteRecipes ? blackHeart : whiteHeart}
          alt="like icon"
          data-testid="favorite-btn"
        />
        <img src={shareIcon} alt="like icon" data-testid={'share-btn'} />
      </div>
      <h5 data-testid="recipe-category">{details.strCategory}</h5>
      <h3>Ingredients</h3>
      <ul>
        {ingredientes.map((item, index) => (
          <li key={item.ingrediente} data-testid={`${index}-ingredient-name-and-measure`}>
            {item.ingrediente}- {item.quantidade}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p data-testid="instructions">{details.strInstructions}</p>
      <h3>Recomendações</h3>
      <div style={{ display: 'flex', flex: 1, flexGrow: 1, flexDirection: 'row' }}>
        <button onClick={() => setIndexRecom(indexRecom - 1)}>{'<'}</button>
        {ReverseArrayFoto(sugestFood, indexRecom, setIndexRecom)}
        <button onClick={() => setIndexRecom(indexRecom + 1)}>{'>'}</button>
      </div>
      {status === 'done' ? null : (
        <Link to={`/comidas/${idDaReceita}/in-progress`}>
          <button data-testid="start-recipe-btn">
            {status === 'noting' ? 'Inicia Receita' : 'Continuar Receita'}
          </button>
        </Link>
      )}
    </div>
  );
}

Detalhes.propTypes = {
  details: propTypes.instanceOf(Object).isRequired,
  favoriteRecipes: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
  indexRecom: propTypes.number.isRequired,
  setIndexRecom: propTypes.func.isRequired,
  sugestFood: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  idDaReceita: propTypes.number.isRequired,
};
