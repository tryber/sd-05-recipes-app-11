import React, { useEffect, useState } from 'react';
import { searchMealFilterArea, searchMealArea } from '../Services/ApiComida';
import MenuInferior from '../Components/MenuInferior';
import BarraBuscaHeader from '../Components/Barra de Busca - Header/BarraBuscaHeader';
import ListReceitasPorLocal from '../Components/ListReceitasPorLocal';
import '../CSS/TelaExplorarLocal.css';

function filterLocate(filtroDeLocais, setLocalSelect) {
  const localizações = ['All', ...filtroDeLocais];
  return (
    <div>
      <select
        data-testid="All-category-filter" type="ComboBox" className="localização"
        name="localização" onChange={(event) => setLocalSelect(event.target.value)}
      >
        {localizações.map((area) => <option
          data-testid={`${area}-option`}
          key={area}
        >
          {area}
        </option>)}
      </select>
    </div>
  );
}

function TemReceira(receitas) {
  console.log(receitas);
  if (!receitas) return null;
  /* if (receitas.length === 1) {
    return <Redirect to={`/comidas/${receitas[0]['idMeal']}`} />;
  } else if (receitas.length === 0) {
    return null;
  } */
  return (
    <div>
      <ListReceitasPorLocal receitas={receitas} />
    </div>
  );
}
export default function TelaExplorarLocal() {
  const [filtroDeLocais, setfiltroDeLocais] = useState([]);
  const [localSelect, setLocalSelect] = useState('All');
  const [explorarLocal, setExplorarLocal] = useState(undefined);
  useEffect(() => {
    searchMealFilterArea().then((resposta) => {
      if (!resposta) return null;
      return setfiltroDeLocais(resposta.map((res) => (res.strArea)));
    });
  }, []);
  useEffect(() => {
    searchMealArea(localSelect).then((resposta) => {
      if (!resposta) return null;
      return setExplorarLocal(resposta);
    });
  }, [localSelect]);
  return (
    <div>
      <BarraBuscaHeader title={'Explorar Origem'} />
      {filterLocate(filtroDeLocais, setLocalSelect)}
      {TemReceira(explorarLocal)}
      <MenuInferior />
    </div>
  );
}
