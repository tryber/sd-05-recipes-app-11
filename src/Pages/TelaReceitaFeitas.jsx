import React, { useState } from 'react';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import CardDone from '../Components/CardDone';

import '../CSS/TelaReceitaFeitas.css';

export default function TelaReceitaFeitas() {
  const [typeSelect, setType] = useState(false);
  let loadFav = JSON.parse(localStorage.getItem('doneRecipes'));
  loadFav = !loadFav ? [] : loadFav;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <BarraHeader title={'Receitas Feitas'} showTop="true" />
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
          <CardDone item={el} index={index} />
        ))}
    </div>
  );
}
