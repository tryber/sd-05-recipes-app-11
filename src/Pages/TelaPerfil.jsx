import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../Components/MenuInferior';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import Context from '../Context/ReceitasContext';
import '../CSS/TelaPerfil.css';

export default function TelaPerfil() {
  const { email } = useContext(Context);
  console.log(email)
  return (
    <div>
      <BarraHeader title={'Perfil'} showTop="true" />
      <div className="buddy-perfil">
        <p className="profile-email" data-testid="profile-email">{email}</p>
        <Link to="/receitas-feitas" data-testid="profile-done-btn" id="receitasFeitas">
          <button className="profile-btn" >Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas" data-testid="profile-favorite-btn" id="receitasFavoritas">
          <button className="profile-btn" >Receitas Favoritas</button>
        </Link>
        <Link to="/" data-testid="profile-logout-btn" id="Sair">
          <button className="profile-logout-btn">Sair</button>
        </Link>
      </div>
      <MenuInferior />
    </div>
  );
}
