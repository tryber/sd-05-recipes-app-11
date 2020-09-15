import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import { searchCockTailById } from '../Services/ApiBebida';
/* import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Card from '../Components/CardRecomend.jsx'; */
import context from '../Context/ReceitasContext';
import DetalhesBebida from '../Components/DetalhesBebida';
import { updateStatus } from './TelaDetalhesComida';


/* function loopIndex(indexArr, IndexAtual) {
  let index = indexArr;
  if (indexArr < 0) index = 5;
  return index % 6 === IndexAtual % 6;
} */

/* function ReverseArrayFoto(sugestFood, indexRecom, setIndexRecom) {
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
} */

/* function funcIngredients(ingredientes, details) {
  for (let i = 0; i < 20; i += 1) {
    if (details[`strIngredient${i}`] !== null && details[`strIngredient${i}`] !== '') {
      ingredientes.push({
        ingrediente: details[`strIngredient${i}`],
        quantidade: details[`strMeasure${i}`],
      });
    }
  }
  return ingredientes;
} */
/* function done(setStatus, id) {
  let doneVar = localStorage.getItem('doneRecipes');
  if (doneVar) {
    doneVar = JSON.parse(doneVar);
    doneVar = doneVar.find((el) => el.id === id);
    if (doneVar) {
      return setStatus('done');
    }
  }
  return null;
} */
/* function favoriteRecipes(setFavoriteRecipes, id) {
  let favoriteRecipesVar = localStorage.getItem('favoriteRecipes');
  if (favoriteRecipesVar) {
    favoriteRecipesVar = JSON.parse(favoriteRecipesVar);
    favoriteRecipesVar = favoriteRecipesVar.find((el) => el.id === id);
    if (favoriteRecipesVar) {
      return setFavoriteRecipes(true);
    }
  }
  return null;
} */
/* function inProgressRecipes(setStatus, id) {
  let inProgressRecipesVar = localStorage.getItem('inProgressRecipes');
  if (inProgressRecipesVar) {
    inProgressRecipesVar = JSON.parse(inProgressRecipesVar).drinks;
    inProgressRecipesVar = inProgressRecipesVar[id];
    if (inProgressRecipesVar) {
      return setStatus('inProgressRecipes');
    }
  }
  return null;
} */
/* function updateStatus(id, setStatus, setFavoriteRecipes) {
  done(setStatus, id);
  favoriteRecipes(setFavoriteRecipes, id);
  inProgressRecipes(setStatus, id);
  return null;
} */
export default function TelaDetalhesBebida(props) {
  const { sugestFood } = useContext(context);
  const [details, setDetails] = useState(undefined);
  const [indexRecom, setIndexRecom] = useState(0);
  const [status, setStatus] = useState('nothing');
  const [favorite, setFavoriteRecipes] = useState(false);
  const { id_da_receita: idDaReceita } = props.match.params;
  useEffect(() => {
    searchCockTailById(idDaReceita).then((resposta) => {
      setDetails(resposta[0]);
    });
    updateStatus(idDaReceita, setStatus, setFavoriteRecipes, 'cocktails');
  }, []);
  if (!details) {
    return <h1>Carregando</h1>;
  }
  /* const ingredientes = funcIngredients([], details); */
  return (
    <DetalhesBebida
      details={details}
      favoriteRecipes={favorite}
      status={status}
      indexRecom={indexRecom}
      setIndexRecom={setIndexRecom}
      sugestFood={sugestFood}
      idDaReceita={idDaReceita}
      match={props.match}
    />
  );
}

TelaDetalhesBebida.propTypes = {
  match: propTypes.shape({ params: propTypes.number.isRequired }).isRequired,
};
