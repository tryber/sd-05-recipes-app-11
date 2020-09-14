import React, { useEffect, useState, useContext } from 'react';
import ReactPlayer from 'react-player';
import { searchMealById } from '../Services/ApiComida';
/* import blackHeart from '../images/blackHeartIcon.svg'; */
import whiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Card from '../Components/CardRecomend.jsx';
import context from '../Context/ReceitasContext';

function loopIndex(indexArr, IndexAtual) {
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
        <Card title={item.strDrink} index={index} source={item.strDrinkThumb} />
      ));
  }
  return sugestDrink
    .filter((_, index) => index === indexRecom % 6 || loopIndex(index - 1, indexRecom))
    .map((item, index) => <Card title={item.strDrink} index={index} source={item.strDrinkThumb} />);
}

function funcIngredients(ingredientes, details) {
  for (let i = 0; i < 20; i += 1) {
    if (details[`strIngredient${i}`] !== null && details[`strIngredient${i}`] !== '') {
      ingredientes.push({
        ingrediente: details[`strIngredient${i}`],
        quantidade: details[`strMeasure${i}`],
      });
    }
  }
  return ingredientes;
}

export default function TelaDetalhesComida(props) {
  const [details, setDetails] = useState(undefined);
  const [indexRecom, setIndexRecom] = useState(0);
  const { sugestDrink } = useContext(context);
  useEffect(() => {
    searchMealById(props.match.params.id_da_receita).then((resposta) => {
      setDetails(resposta[0]);
    });
  }, []);
  if (!details) {
    return <h1>Carregando</h1>;
  }
  let ingredientes = funcIngredients([], details);
  return (
    <div>
      <img src={details.strMealThumb} alt={details.strMeal} data-testid="recipe-photo" />
      <div>
        <h1 data-testid="recipe-title">{details.strMeal}</h1>
        <img src={whiteHeart} alt="like icon" data-testid="favorite-btn" />
        <img src={shareIcon} alt="like icon" data-testid={'share-btn'} />
      </div>
      <h5 data-testid="recipe-category">{details.strCategory}</h5>
      <h3>Ingredients</h3>
      <ul>
        {ingredientes.map((item, index) => (
          <li data-testid={`${index}-ingredient-name-and-measure`}>
            {item.ingrediente}- {item.quantidade}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p data-testid="instructions">{details.strInstructions}</p>
      <h3>Video</h3>
      <ReactPlayer url={details.strYoutube} data-testid="video" />
      <h3>Recomendações</h3>
      <div style={{ display: 'flex', flex: 1, flexGrow: 1, flexDirection: 'row' }}>
        <button onClick={() => setIndexRecom(indexRecom - 1)}>{'<'}</button>
        {ReverseArrayFoto(sugestDrink, indexRecom, setIndexRecom)}
        <button onClick={() => setIndexRecom(indexRecom + 1)}>{'>'}</button>
      </div>
      <button data-testid="start-recipe-btn">Inicia Receita</button>
    </div>
  );
}
