import React from 'react';
import HeaderBusca from './Header';
import Search from './Search';
import Options from './Options';

export default function BarraBuscaHeader() {
  return (
    <div className="Bar-Busca-Header-column">
      <HeaderBusca />
      <Search />
      <Options />
    </div>
  );
}
