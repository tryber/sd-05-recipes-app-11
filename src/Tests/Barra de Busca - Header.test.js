import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import BarraBusca from '../Components/Barra de Busca - Header/BarraBuscaHeader';

describe('testando arquivo Header', () => {
  test('renderiza link com imagem Perfil', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const foodBottom = getByTestId('profile-top-btn');
    expect(foodBottom).toBeInTheDocument();
  });

  test('renderiza o titulo com o nome da página', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const exploreBottom = getByTestId('page-title');
    expect(exploreBottom).toBeInTheDocument();
  });

  test('renderiza link com imagem da lupa de busca', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const drinkBottom = getByTestId('search-top-btn');
    expect(drinkBottom).toBeInTheDocument();
  });
});
