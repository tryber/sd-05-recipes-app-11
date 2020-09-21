import React, { useState } from 'react';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import CardFavorite from '../Components/CardFavorite';

export default function TelaReceitasFavoritas() {
  console.log('vai pro git')
  const [typeSelect, setType] = useState(false);
  let loadFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  loadFav = !loadFav ? [] : loadFav;
  return (
    <div>
      <BarraHeader title={'Receitas Favoritas'} showTop="true" />
      <br />
      <br />
      <br />
      <br />
      <button data-testid="filter-by-all-btn" onClick={() => setType(false)}>
        All
      </button>
      <button data-testid="filter-by-food-btn" onClick={() => setType('comida')}>
        Food
      </button>
      <button data-testid="filter-by-drink-btn" onClick={() => setType('bebida')}>
        Drinks
      </button>
      {loadFav
        .filter((el) => (typeSelect ? el.type === typeSelect : true))
        .map((el, index) => (
          <CardFavorite item={el} index={index} />
        ))}
    </div>
  );
}
