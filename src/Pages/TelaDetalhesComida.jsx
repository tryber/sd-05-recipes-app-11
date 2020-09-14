import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import { searchMealById } from '../Services/ApiComida';
import context from '../Context/ReceitasContext';
import DetalhesComida from '../Components/DetalhesComida';

export function done(setStatus, id) {
  let doneVar = localStorage.getItem('doneRecipes');
  if (doneVar) {
    doneVar = JSON.parse(doneVar);
    doneVar = doneVar.find((el) => el.id === id);
    if (doneVar) {
      return setStatus('done');
    }
  }
  return null;
}
export function favoriteRecipes(setFavoriteRecipes, id) {
  let favoriteRecipesVar = localStorage.getItem('favoriteRecipes');
  if (favoriteRecipesVar) {
    favoriteRecipesVar = JSON.parse(favoriteRecipesVar);
    favoriteRecipesVar = favoriteRecipesVar.find((el) => el.id === id);
    if (favoriteRecipesVar) {
      return setFavoriteRecipes(true);
    }
  }
  return null;
}
function inProgressRecipes(setStatus, id) {
  let inProgressRecipesVar = localStorage.getItem('inProgressRecipes');
  if (inProgressRecipesVar) {
    inProgressRecipesVar = JSON.parse(inProgressRecipesVar).meals;
    inProgressRecipesVar = inProgressRecipesVar[id];
    if (inProgressRecipesVar) {
      return setStatus('inProgressRecipes');
    }
  }
  return null;
}
export function updateStatus(id, setStatus, setFavoriteRecipes) {
  done(setStatus, id);
  favoriteRecipes(setFavoriteRecipes, id);
  inProgressRecipes(setStatus, id);
  return null;
}
export default function TelaDetalhesComida(props) {
  const { sugestDrink } = useContext(context);
  const [details, setDetails] = useState(undefined);
  const [indexRecom, setIndexRecom] = useState(0);
  const [status, setStatus] = useState('nothing');
  const [favorite, setFavorite] = useState(false);
  const { id_da_receita: idDaReceita } = props.match.params;
  useEffect(() => {
    searchMealById(idDaReceita).then((resposta) => {
      setDetails(resposta[0]);
    });
    updateStatus(idDaReceita, setStatus, setFavorite);
  }, []);
  if (!details) {
    return <h1>Carregando</h1>;
  }
  return (
    <DetalhesComida
      details={details}
      favoriteRecipes={favorite}
      status={status}
      indexRecom={indexRecom}
      setIndexRecom={setIndexRecom}
      sugestDrink={sugestDrink}
      idDaReceita={idDaReceita}
    />
  );
}
TelaDetalhesComida.propTypes = {
  match: propTypes.shape({ params: propTypes.number.isRequired }).isRequired,
};
