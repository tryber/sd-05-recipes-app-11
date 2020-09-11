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

describe('testando arquivo Search', () => {
  test('renderiza input search', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const foodBottom = getByTestId('search-input');
    expect(foodBottom).toBeInTheDocument();
  });
});

});describe('testando arquivo Options', () => {
  test('renderiza link com imagem Perfil', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const foodBottom = getByTestId('ingredient-search-radio');
    expect(foodBottom).toBeInTheDocument();
  });

  test('renderiza o titulo com o nome da página', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const exploreBottom = getByTestId('name-search-radio');
    expect(exploreBottom).toBeInTheDocument();
  });

  test('renderiza link com imagem da lupa de busca', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const drinkBottom = getByTestId('first-letter-search-radio');
    expect(drinkBottom).toBeInTheDocument();
  });
});

describe('testando arquivo ButtonBuscar', () => {
  test('renderiza link com imagem Perfil', () => {
    const { getByTestId } = render(
    <MemoryRouter>
      <BarraBusca />
    </MemoryRouter>
    );
    const foodBottom = getByTestId("exec-search-btn");
    expect(foodBottom).toBeInTheDocument();
  });
});
