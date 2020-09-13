import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';
import {
  searchCockTailByName,
  searchCockTailByLetter,
  searchCockTailByIngredient,
} from '../Services/ApiBebida';
import {
  ApiSearchMealByName,
  ApiSearchByFirstLetter,
  ApiSearchByMainIngredient,
} from '../Services/ApiComida';

export default function Provider(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [comidas, setComidas] = useState([]);
  const [optionsValue, setOptionsValue] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const state = {
    isFetching,
    comidas,
    optionsValue,
    searchValue,
    setIsFetching,
    setComidas,
  };

  useEffect(() => {
    ApiSearchMealByName('B')
      .then((ListaComidasPeloNome) => {
        setComidas(ListaComidasPeloNome);
      })
      .then(() => {
        setIsFetching(true);
      });
  }, []);

  useEffect(() => {
    ApiSearchByFirstLetter('B')
      .then((ListaComidasPeloNome) => {
        setComidas(ListaComidasPeloNome);
      })
      .then(() => {
        setIsFetching(true);
      });
  }, []);

  return <ReceitasContext.Provider value={state}>{props.children}</ReceitasContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
