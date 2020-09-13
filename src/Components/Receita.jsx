import React from 'react';

export default function Receita(props) {
  const { food } = props;
  return (
    <div className="food">
      <img className="imgFood" src={food.strMealThumb} alt={food.strMeal} />
      <p className="textFood">{food.strMeal}</p>
    </div>
  );
}
