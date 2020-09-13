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

function filterComidas(title, optionsValue, searchValue, setReceitas, setIsFetching) {
  if (optionsValue === 'primeiraLetra') {
    ApiSearchByFirstLetter(searchValue)
      .then((ListaComidasPelaPrimeiraLetra) => {
        setReceitas(ListaComidasPelaPrimeiraLetra);
      })
      .then(() => {
        setIsFetching(true);
      });
  } else if (optionsValue === 'ingrediente') {
    ApiSearchByMainIngredient(searchValue)
      .then((ListaComidasPorIngrediente) => {
        setReceitas(ListaComidasPorIngrediente);
      })
      .then(() => {
        setIsFetching(true);
      });
  } else {
    ApiSearchMealByName(searchValue)
      .then((ListaComidasPeloNome) => {
        setReceitas(ListaComidasPeloNome);
      })
      .then(() => {
        setIsFetching(true);
      });
  }
}

function filterBebidas(title, optionsValue, searchValue, setReceitas, setIsFetching) {
  if (optionsValue === 'primeiraLetra') {
    searchCockTailByLetter(searchValue)
      .then((ListaBebidasPelaPrimeiraLetra) => {
        setReceitas(ListaBebidasPelaPrimeiraLetra);
      })
      .then(() => {
        setIsFetching(true);
      });
  } else if (optionsValue === 'ingrediente') {
    searchCockTailByIngredient(searchValue)
      .then((ListaBebidasPorIngrediente) => {
        setReceitas(ListaBebidasPorIngrediente);
      })
      .then(() => {
        setIsFetching(true);
      });
  } else {
    searchCockTailByName(searchValue)
      .then((ListaBebidasPeloNome) => {
        setReceitas(ListaBebidasPeloNome);
      })
      .then(() => {
        setIsFetching(true);
      });
  }
}

export default function Provider(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [receitas, setReceitas] = useState([]);
  const [optionsValue, setOptionsValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [changeFilter, setchangeFilter] = useState(0);
  const [title, setTitle] = useState('');

  const state = {
    isFetching,
    receitas,
    optionsValue,
    searchValue,
    changeFilter,
    title,
    setIsFetching,
    setReceitas,
    setOptionsValue,
    setSearchValue,
    setchangeFilter,
    setTitle,
  };

  useEffect(() => {
    if (title === 'Comidas') filterComidas(title, optionsValue, searchValue, setReceitas, setIsFetching);
    if (title === 'Bebidas') filterBebidas(title, optionsValue, searchValue, setReceitas, setIsFetching);
  }, [changeFilter]);

  return <ReceitasContext.Provider value={state}>{props.children}</ReceitasContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
