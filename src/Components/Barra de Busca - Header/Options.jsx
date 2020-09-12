import React from 'react';

export default function Options() {
  return (
    <div className="search-radio">
      <div>
        <input
          id="Ingrediente"
          key="Ingrediente"
          data-testid="ingredient-search-radio"
          type="radio"
          value="Ingrediente"
          name="Ingrediente"
        />
        <label htmlFor="Ingrediente">Ingrediente</label>
      </div>
      <div>
        <input
          id="Nome"
          key="Nome"
          data-testid="name-search-radio"
          type="radio"
          value="Nome"
          name="Nome"
        />
        <label htmlFor="Nome">Nome</label>
      </div>
      <div>
        <input
          id="Primeira letra"
          key="Primeira letra"
          data-testid="first-letter-search-radio"
          type="radio"
          value="Primeira letra"
          name="Primeira letra"
        />
        <label htmlFor="Primeira letra">Primeira letra</label>
      </div>
    </div>
  );
}
