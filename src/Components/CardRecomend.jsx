import React from 'react';
import propTypes from 'prop-types';

export default function Card(props) {
  const { title, index, source } = props;
  return (
    <div className="recomendation-card">
      <img
        src={source}
        alt=""
        data-testid={`${index}-recomendation-card`}
        style={{ width: '100%' }}
      />
      <p className="recomendation-title" data-testid={`${index}-recomendation-title`}>
        {title}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  source: propTypes.string.isRequired,
};
