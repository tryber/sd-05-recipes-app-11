import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import Receita from './Receita';
import '../CSS/ListReceitas.css';

export default function ListReceitas() {
  const { comidas } = useContext(ReceitasContext);
  console.log(comidas);
  if (!comidas) {
    return <h1>Loading...</h1>;
  }
  const foods = comidas;
  console.log(foods.map((food) => food.strMeal));
  return (
    <div className="listFoods">
      {foods.map((food) => (
        <Receita food={food} />
      ))}
    </div>
  );
}
