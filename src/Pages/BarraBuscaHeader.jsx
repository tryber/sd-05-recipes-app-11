import React from 'react';
import userLogo from '../images/profileIcon.svg';
import searchLogo from '../images/searchIcon.svg';

export default function BarraBuscaHeader(props) {
  return (
    <div className="Bar-Busca-Header">
      <img src={userLogo} alt="Imagem User" className="Bar-Busca-Header"/>
      <h1 className="Bar-Busca-Header">Comidas</h1>
      <img src={searchLogo} alt="Search Logo" className="Bar-Busca-Header" />
    </div>
  );
}
