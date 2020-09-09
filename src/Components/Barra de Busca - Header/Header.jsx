import React from 'react';
import userLogo from '../../images/profileIcon.svg';
import searchLogo from '../../images/searchIcon.svg';
import '../../CSS/HeaderBusca.css'

export default function HeaderBusca() {
  return (
    <div className="Bar-Busca-Header">
      <img src={userLogo} alt="Imagem User" className="Bar-Busca-Header" />
      <div className="Bar-Busca-Header-text">
        <span>Comidas</span>
      </div>
      <img src={searchLogo} alt="Search Logo" className="Bar-Busca-Header" />
    </div>
  );
}
