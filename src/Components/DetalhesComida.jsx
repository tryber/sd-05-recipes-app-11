import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Card from './CardRecomend.jsx';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export function loopIndex(indexArr, IndexAtual) {
  let index = indexArr;
  if (indexArr < 0) index = 5;
  return index % 6 === IndexAtual % 6;
}

function ReverseArrayFoto(sugestDrink, indexRecom, setIndexRecom) {
  if (indexRecom < 0) {
    setIndexRecom(5);
    return sugestDrink
      .filter((_, index) => index === 5 % 6 || loopIndex(index - 1, 5))
      .reverse()
      .map((item, index) => (
        <Card key={item.strDrink} title={item.strDrink} index={index} source={item.strDrinkThumb} />
      ));
  }
  return sugestDrink
    .filter((_, index) => index === indexRecom % 6 || loopIndex(index - 1, indexRecom))
    .map((item, index) => (
      <Card key={item.strDrink} title={item.strDrink} index={index} source={item.strDrinkThumb} />
    ));
}

export function funcIngredients(ingredientes, details) {
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
}

export default function Detalhes(props) {
  const {
    details,
    favoriteRecipes,
    status,
    indexRecom,
    setIndexRecom,
    sugestDrink,
    idDaReceita,
  } = props;

  const novosIngredientes = funcIngredients([], details);
  return (
    <div>
      <img
        src={details.strMealThumb}
        alt={details.strMeal}
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <div className="DetelhesBuddy">
        <div className="campoTitle">
          <h1 className="recipe-title" data-testid="recipe-title">
            {details.strMeal}
          </h1>
          <img
            src={favoriteRecipes ? blackHeart : whiteHeart}
            alt="like icon"
            className="icon"
            data-testid="favorite-btn"
          />
          <img className="icon" src={shareIcon} alt="like icon" data-testid={'share-btn'} />
        </div>
        <h5 className="recipe-category" data-testid="recipe-category">
          {details.strCategory}
        </h5>
        <h3 className="subTitle">Ingredients</h3>
        <ul className="yellowCamp">
          {novosIngredientes.map((item, index) => (
            <li key={item.ingrediente} data-testid={`${index}-ingredient-name-and-measure`}>
              {item.ingrediente}- {item.quantidade}
            </li>
          ))}
        </ul>
        <h3 className="subTitle">Instructions:</h3>
        <p className="yellowCamp" data-testid="instructions">
          {details.strInstructions}
        </p>
        <h3 className="subTitle">Video</h3>
        <ReactPlayer url={details.strYoutube} height="320" width="320px" data-testid="video" />
        <h3 className="subTitle">Recomendações</h3>
        <div style={{ display: 'flex', flex: 1, flexGrow: 1, flexDirection: 'row' }}>
          <button onClick={() => setIndexRecom(indexRecom - 1)}>
            {'<'}
          </button>
          {ReverseArrayFoto(sugestDrink, indexRecom, setIndexRecom)}
          <button onClick={() => setIndexRecom(indexRecom + 1)}>
            {'>'}
          </button>
        </div>
        {status === 'done' ? null : (
          <Link to={`/comidas/${idDaReceita}/in-progress`}>
            <button className="start-recipe-btn" data-testid="start-recipe-btn">
              {status === 'noting' ? 'Inicia Receita' : 'Continuar Receita'}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

Detalhes.propTypes = {
  details: propTypes.instanceOf(Object).isRequired,
  favoriteRecipes: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
  indexRecom: propTypes.number.isRequired,
  setIndexRecom: propTypes.func.isRequired,
  sugestDrink: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  idDaReceita: propTypes.number.isRequired,
};
