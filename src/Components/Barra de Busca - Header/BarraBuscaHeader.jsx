import React from 'react';
import PropTypes from 'prop-types';
import HeaderBusca from './Header';
import Search from './Search';
import Options from './Options';
import BottonBuscar from './BottonBuscar';

export default function BarraBuscaHeader(props) {
  return (
    <div className="Bar-Busca-Header-column">
      <HeaderBusca title={props.title} />
      <div>
        <Search />
        <Options />
      </div>
      <BottonBuscar />
    </div>
  );
}

BarraBuscaHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
