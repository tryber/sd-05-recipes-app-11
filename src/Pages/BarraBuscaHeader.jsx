import React from 'react';
import HeaderBusca from '../Components/Barra de Busca - Header/Header';
import Search from '../Components/Barra de Busca - Header/Search';
import Options from '../Components/Barra de Busca - Header/Options';

export default function BarraBuscaHeader(props) {
  return (
    <div className="Bar-Busca-Header-column">
      <HeaderBusca />
   
      <Search />

      <Options />
    </div>
  );
}
