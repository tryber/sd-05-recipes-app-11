import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Receita(props) {
  const { receita } = props;
  return (
    <Link to={`/comidas/${receita.idMeal}`}>
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
  /* receita: PropTypes.array.isRequired, */
};
