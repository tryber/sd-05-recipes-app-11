import React from 'react';
import propTypes from 'prop-types';

const CardIngredient = (props) => {
  const { title, image, index } = props;
  return (
    <div data-testid={`${index}-ingredient-card`} id={title}>
      <img src={image} alt={title} data-testid={`${index}-card-img`} />
      <p data-testid={`${index}-card-name`}>{title}</p>
    </div>
  );
};

export default CardIngredient;

CardIngredient.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
