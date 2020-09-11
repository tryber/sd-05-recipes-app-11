import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import Options from './Options';
import { useState } from 'react';
import { set } from 'lodash';

export default function BarraBuscaHeader(props) {
  const [showSearch, setShowSearch] = useState(false);
  const update = () => {
    setShowSearch(!showSearch)
  }
  return (
    <div className="Bar-Busca-Header-column">
      <Header title={props.title} setShowSearch={update} showSearch={showSearch} />
      {showSearch ? <Search /> : null}
      {showSearch ? <Options /> : null}
    </div>
  );
}

BarraBuscaHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
