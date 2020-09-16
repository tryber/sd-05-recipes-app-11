import React from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../Components/MenuInferior';
import BarraHeader from '../Components/Barra de Busca - Header/Header';

export default function TelaExplorar() {
  return (
    <div>
      <BarraHeader title={'Explorar'} showTop="true" />
      <div>
        <br/> <br/> <br/>
        <Link to="/explorar/comidas" data-testid="explore-food" id="explorarComidas">
          <button>Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas" data-testid="explore-drinks" id="explorarBebidas">
          <button>Explorar Bebidas</button>
        </Link>
      </div>
      <MenuInferior />
    </div>
  );
}
