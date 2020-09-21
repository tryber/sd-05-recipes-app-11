import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { searchMealFilterArea, searchMealArea } from '../Services/ApiComida';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';
import ListReceitas from '../Components/ListReceitas';
import '../CSS/TelaExplorarLocal.css';

function filterLocate(filtroDeLocais, setLocalSelect) {
  const localizações = ['All',...filtroDeLocais];
  return (
    <div>
      <select
        data-testid="All-category-filter" type="ComboBox" className="localização"
        name="localização" onChange={(event) => setLocalSelect(event.target.value)}
      >
        {localizações.map((area) => <option data-testid={`${area}-option`}
        key={area}>
          {area}</option>)}
      </select>
    </div>
  );
}

function TemReceira(receitas) {
  if (!receitas) return null;
  if (receitas.length === 1) {
    return <Redirect to={`/comidas/${receitas[0]['idMeal']}`} />;
  } else if (receitas.length === 0) {
    return null;
  }
  return (
    <div>
      <ListReceitas />
    </div>
  );
}
export default function TelaExplorarLocal(props) {
  const [filtroDeLocais, setfiltroDeLocais] = useState([]);
  const [localSelect, setLocalSelect] = useState('All');
  console.log(localSelect);
  const [explorarLocal, setExplorarLocal] = useState(undefined);
  console.log(explorarLocal)
  useEffect(() => {
    searchMealFilterArea().then((resposta) => {
      if (!resposta) return null;
      setfiltroDeLocais(resposta.map(res => res.strArea));
    });
    }, []);
  useEffect(() => {
    searchMealArea(localSelect).then((resposta) => {
      if (!resposta) return null;
      setExplorarLocal(resposta);
    });
    }, [localSelect]);
  return (
    <div>
      <BarraBuscaHeader title='comidas' />
      {filterLocate(filtroDeLocais, setLocalSelect)}
      {TemReceira(explorarLocal)}
      <MenuInferior />
    </div>
  );
}

TelaExplorarLocal.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
