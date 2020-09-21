import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../CSS/TelaReceitaProcesso.css';

function fotoPrincipal(details) {
  let title = details.strMeal;
  let foto = details.strMealThumb;
  if (details.strDrink) {
    title = details.strDrink;
    foto = details.strDrinkThumb;
  }
  return <img src={foto} alt={title} className="recipe-photo" data-testid="recipe-photo" />;
}

function addFavority(receita, setFavority) {
  let oldFav = localStorage.getItem('favoriteRecipes');
  if (!oldFav) {
    setFavority(true);
    return localStorage.setItem('favoriteRecipes', JSON.stringify([receita]));
  }
  oldFav = [...JSON.parse(oldFav)];
  if (oldFav.find((el) => el.id === receita.id)) {
    setFavority(false);
    return localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(oldFav.filter((el) => el.id !== receita.id))
    );
  }
  const temp = [...oldFav, receita];
  setFavority(true);
  return localStorage.setItem('favoriteRecipes', JSON.stringify(temp));
}

export function convertFavorite(details, setFavority) {
  let type = 'Drink';

  if (details.idMeal) {
    type = 'Meal';
  }
  const saida = {
    id: details[`id${type}`],
    type: type === 'Drink' ? 'bebida' : 'comida',
    category: details.strCategory,
    alcoholicOrNot: type === 'Meal' ? '' : 'Alcoholic',
    name: details[`str${type}`],
    image: details[`str${type}Thumb`],
    area: details.strArea !== undefined ? details.strArea : '',
  };
  addFavority(saida, setFavority);
  return saida;
}
// HA https://www.codegrepper.com/code-examples/basic/copy+string+to+clipboard+javascript
export function CopyURL() {
  const endereco = window.location.toString();
  const index = endereco.indexOf('/in-progress');
  window.navigator.clipboard.writeText(endereco.substring(0, index));
}

function funcLinks(details, favority, setFavority, copiador, copy) {
  let title = details.strMeal;
  if (details.strDrink) title = details.strDrink;
  return (
    <div className="campoTitle">
      <h1 className="recipe-title" data-testid="recipe-title">
        {title}
      </h1>
      <Link onClick={() => convertFavorite(details, setFavority)}>
        <img
          src={favority ? blackHeart : whiteHeart}
          alt="like icon"
          className="icon"
          data-testid="favorite-btn"
        />
      </Link>
      <Link
        onClick={() => {
          copiador(true);
          CopyURL();
        }}
      >
        <img src={shareIcon} alt="like icon" className="icon" data-testid={'share-btn'} />
      </Link>
      {copy ? <span>Link copiado!</span> : null}
    </div>
  );
}

export function funcIngredients(ingredientes, details) {
  const used = teste(details);
  for (let i = 1; i < 20; i += 1) {
    if (
      details[`strIngredient${i}`] !== null &&
      details[`strIngredient${i}`] !== '' &&
      details[`strIngredient${i}`] !== undefined
    ) {
      ingredientes.push({
        ingrediente: details[`strIngredient${i}`],
        quantidade: details[`strMeasure${i}`],
        checked: used.includes(details[`strIngredient${i}`]) ? true : false,
      });
    }
  }
  return ingredientes;
}
function teste(details) {
  const type = details.idMeal ? 'Meal' : 'Drink';
  const chave = details.idMeal ? 'meals' : 'cocktails';
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: {}, cocktails: {} }));
  }
  const localSAtual = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!localSAtual[chave][details[`id${type}`]]) return [];
  const ingredientes = localSAtual[chave][details[`id${type}`]];
  return ingredientes;
}

function updateUsedIngredients(details, setContCheck, setDone, novosIngredientes) {
  const type = details.idMeal ? 'Meal' : 'Drink';
  const chave = details.idMeal ? 'meals' : 'cocktails';
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: {}, cocktails: {} }));
  }
  const localSAtual = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!localSAtual[chave][details[`id${type}`]]) return [];
  const ingredientes = localSAtual[chave][details[`id${type}`]];
  setContCheck(0);
  ingredientes.forEach((ingredient) => {
    checkboxON(setContCheck, { target: { checked: true } });
  });
  if (ingredientes.length === novosIngredientes.length) {
    setDone(true);
  }
  return ingredientes;
}

function checkboxON(setContCheck, event) {
  if (event.target.checked) {
    setContCheck((contCheck) => contCheck + 1);
  } else {
    setContCheck((contCheck) => contCheck - 1);
  }
}
/* 
export function loopIndex(indexArr, IndexAtual) {
  let index = indexArr;
  if (indexArr < 0) index = 5;
  return index % 6 === IndexAtual % 6;
}


function localSProcess(details, event) {
  const type = details.idMeal ? 'Meal' : 'Drink';
  const chave = details.idMeal ? 'meals' : 'cocktails';
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: {}, cocktails: {} }));
  }
  const localSAtual = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!localSAtual[chave][details[`id${type}`]]) {
    localSAtual[chave][details[`id${type}`]] = [];
  }
  if (localSAtual[chave][details[`id${type}`]].includes(event.target.id)) {
    localSAtual[chave][details[`id${type}`]] = localSAtual[chave][details[`id${type}`]].filter(
      (e) => e !== event.target.id
    );
  } else {
    localSAtual[chave][details[`id${type}`]].push(event.target.id);
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(localSAtual));
}
 */

function changeStorage(details, final) {
  const type = details.idMeal ? 'Meal' : 'Drink';
  const chave = details.idMeal ? 'meals' : 'cocktails';
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: {}, cocktails: {} }));
  }
  const localSAtual = JSON.parse(localStorage.getItem('inProgressRecipes'));
  console.log(localSAtual[chave][details[`id${type}`]]);
  const elements = document.getElementsByClassName('ingredient-step');
  localSAtual[chave][details[`id${type}`]] = [];
  /* elements.forEach((ingredient) => {
    //document.getElementById(ingredient).checked = true;
  }); */
  let total = 0;
  let used = 0;
  for (let i = 0; i < elements.length; i++) {
    total += 1;
    if (elements[i].checked === true) {
      localSAtual[chave][details[`id${type}`]].push(elements[i].id);
      used += 1;
    }
  }
  if (total === used) {
    final(true);
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(localSAtual));
}

function InputCheck(props) {
  const { item, used, action, details, setDone } = props;
  let checked;
  if (used.includes(item.ingrediente)) checked = true;
  if (!item.checked) {
    return (
      <input
        type="checkbox"
        className="ingredient-step"
        id={item.ingrediente}
        onClick={(event) => {
          action(details, setDone);
          event.target.checked = true;
        }}
      />
    );
  }
  return (
    <input
      type="checkbox"
      className="ingredient-step"
      id={item.ingrediente}
      onClick={(event) => {
        action(details, setDone);
        event.target.checked = false;
      }}
      checked
    />
  );
}
function Botao(props) {
  const { habilita } = props;
  return (
    <Link to={`/receitas-feitas`}>
      <button data-testid="finish-recipe-btn" className="finish-recipe-btn" disabled={!habilita}>
        Finalizar receita
      </button>
    </Link>
  );
}
export default function Detalhes(props) {
  const { details, favoriteRecipes } = props;
  const [done, setDone] = useState(false);
  const [copy, copiador] = useState(false);
  //const [contCheck, setContCheck] = useState(0);
  const [favority, setFavority] = useState(false);
  useEffect(() => setFavority(favoriteRecipes), []);
  const [usedIngredients, setUsedIngredients] = useState([]);
  const novosIngredientes = funcIngredients([], details);
  useEffect(() => {
    setUsedIngredients(updateUsedIngredients(details, setContCheck, setDone, novosIngredientes));
  }, []);
  console.log(novosIngredientes);
  return (
    <div>
      {fotoPrincipal(details)}
      <div className="DetelhesBuddy">
        {funcLinks(details, favority, setFavority, copiador, copy)}
        <h5 className="recipe-category" data-testid="recipe-category">
          {details.strCategory}
        </h5>
        <h3 className="subTitle">Ingredients</h3>
        <ul className="yellowCamp">
          {novosIngredientes.map((item) => (
            <div data-testid="0-ingredient-step">
              <InputCheck
                item={item}
                used={usedIngredients}
                action={changeStorage}
                details={details}
                setDone={setDone}
              />
              <label htmlFor={item.ingrediente}>
                {item.ingrediente}- {item.quantidade}
              </label>
            </div>
          ))}
        </ul>
        <h3 className="subTitle">Instructions:</h3>
        <p className="yellowCamp" data-testid="instructions">
          {details.strInstructions}
        </p>
      </div>
      <Botao habilita={novosIngredientes.every((el) => el.checked)} />
    </div>
  );
}

Detalhes.propTypes = {
  details: propTypes.instanceOf(Object).isRequired,
  favoriteRecipes: propTypes.func.isRequired,
};
