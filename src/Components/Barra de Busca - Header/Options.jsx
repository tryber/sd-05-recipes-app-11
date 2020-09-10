import React from 'react';

const options = ['Ingrediente', 'Nome', 'Primeira letra'];
/* const idOptions = ['ingredient-search-radio',]; */
export default function Options() {
  return (
    <div className="search-top-btn">
      {options.map((el) => (
        <div>
          <input id={el} key={el} data-testid="search-top-btn" type="radio" value={el} name={'options'} />
          <label htmlFor={el}>{el}</label>
        </div>
      ))}
    </div>
  );
}
