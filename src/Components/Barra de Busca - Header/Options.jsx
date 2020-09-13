import React from 'react';

export default function Options() {
  return (
    <div className="search-radio">
      <div>
        <input
          id="ingrediente"
          key="ingrediente"
          data-testid="ingredient-search-radio"
          type="radio"
          value="ingrediente"
          name="options"
        />
        <label htmlFor="ingrediente">Ingrediente</label>
      </div>
      <div>
        <input
          id="nome"
          key="nome"
          data-testid="name-search-radio" 
          type="radio"
          value="nome"
          name="options"
        />
        <label htmlFor="nome">Nome</label>
      </div>
      <div>
        <input
          id="primeiraLetra"
          key="primeiraLetra"
          data-testid="first-letter-search-radio"
          type="radio"
          value="primeiraLetra"
          name="options"
        />
        <label htmlFor="primeiraLetra">Primeira letra</label>
      </div>
    </div>
  );
}
