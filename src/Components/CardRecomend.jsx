import React from 'react';
import propTypes from 'prop-types';

export default function Card(props) {
  const { title, index, source, show } = props;
  let visible = false;
  if (index % 6 === show % 6 || index === (show + 1) % 6) {
    visible = true;
  }

  return (
    <div style={visible?null:{display:'none'}}>
      <img
        src={source}
        alt=""
        data-testid={`${index}-recomendation-card`}
        style={{ width: '100%' }}
      />
      <p data-testid={`${index}-recomendation-title`}>{title}</p>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  source: propTypes.string.isRequired,
};
