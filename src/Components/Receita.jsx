import React from 'react';
import PropTypes from 'prop-types';

export default function Receita(props) {
  const { receita } = props;
  return (
    <div className="receita">
      <img
        className="imgReceita"
        src={receita.strMealThumb || receita.strDrinkThumb}
        alt={receita.strMeal || receita.strDrink}
      />
      <p className="textReceita">{receita.strMeal || receita.strDrink}</p>
    </div>
  );
}

Receita.propTypes = {
  receita: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  /* receita: PropTypes.array.isRequired, */
};
