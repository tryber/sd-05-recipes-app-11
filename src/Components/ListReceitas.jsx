import React, { useContext } from 'react';
import ReceitasContext from '../Context/ReceitasContext';
import Receita from './Receita';
import '../CSS/ListReceitas.css';

export default function ListReceitas() {
  const { receitas } = useContext(ReceitasContext);
  if (!receitas) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="listReceitas">
      {receitas.map((receita) => (
        <Receita receita={receita} />
      ))}
    </div>
  );
}
