import React from 'react';

const options = ['Ingrediente', 'Nome', 'Primeira letra'];
const idOptions = ['ingredient-search-radio',]
export default function Options() {
  return (
    <div>
      {options.map((el) => (
        <>
          <input key={el} data-testid="search-input" type="radio" value={el} name={'options'} />
          <label>{el}</label>
        </>
      ))}
    </div>
  );
}
