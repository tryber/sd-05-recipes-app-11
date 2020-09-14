import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Receita(props) {
  const { receita } = props;
  let tipo = 'comidas';
  let id = receita.idMeal;
  if (receita.strDrink) {
    tipo = 'bebidas';
    id = receita.idDrink;
  }
  return (
    <Link to={`/${tipo}/${id}`}>
      <div className="receita">
        <img
          className="imgReceita"
          src={receita.strMealThumb || receita.strDrinkThumb}
          alt={receita.strMeal || receita.strDrink}
        />
        <p className="textReceita">{receita.strMeal || receita.strDrink}</p>
      </div>
    </Link>
  );
}

Receita.propTypes = {
  receita: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
