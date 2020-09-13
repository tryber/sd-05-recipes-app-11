import React from 'react';
import { Link } from 'react-router-dom';

export default function Receita(props) {
  const { food } = props;
  return (
    <Link to={`/comidas/${food.idMeal}`}>
      <div className="food">
        <img className="imgFood" src={food.strMealThumb} alt={food.strMeal} />
        <p className="textFood">{food.strMeal}</p>
      </div>
    </Link>
  );
}
