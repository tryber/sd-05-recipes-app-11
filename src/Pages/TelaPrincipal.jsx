import React from 'react';
import PropTypes from 'prop-types';
import MenuInferior from '../Components/MenuInferior';

export default function TelaPrincipal(props) {
  console.log(props);
  return (/comida/).test(props.match.path) ?
  (
    <div>
      comida
      <MenuInferior />
    </div>
  )
  :
  (
    <div>
      bebida
      <MenuInferior />
    </div>
  );
}

TelaPrincipal.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
