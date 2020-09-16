import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../Components/MenuInferior';
import BarraHeader from '../Components/Barra de Busca - Header/Header';
import ReceitasFeitas from './TelaReceitaFeitas';
import ReceitasFavoritas from './TelaReceitasFavoritas';
import Context from '../Context/ReceitasContext';

export default function TelaPerfil() {
  const { email } = useContext(Context);
  return (
    <div>
      <BarraHeader title={'Perfil'} showTop="true" />
      <br />
      <br />
      <br />
      <div>
        <p data-testid="profile-email">{email}</p>
        <Link to="/receitas-feitas" data-testid="profile-done-btn" id="receitasFeitas">
          <button>Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas" data-testid="profile-favorite-btn" id="receitasFavoritas">
          <button>Receitas Favoritas</button>
        </Link>
        <Link to="/" data-testid="profile-logout-btn" id="Sair">
          Sair
        </Link>
      </div>
      <MenuInferior />
    </div>
  );
}
