import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MenuInferior from '../Components/MenuInferior';

test('renderiza link com imagem food', () => {
  const { getByTestId } = render(
  <MemoryRouter>
    <MenuInferior />
  </MemoryRouter>
  );
  const foodBottom = getByTestId('food-bottom-btn');
  expect(foodBottom).toBeInTheDocument();
});

test('renderiza link com imagem explore', () => {
  const { getByTestId } = render(
  <MemoryRouter>
    <MenuInferior />
  </MemoryRouter>
  );
  const exploreBottom = getByTestId('explore-bottom-btn');
  expect(exploreBottom).toBeInTheDocument();
});

test('renderiza link com imagem drink', () => {
  const { getByTestId } = render(
  <MemoryRouter>
    <MenuInferior />
  </MemoryRouter>
  );
  const drinkBottom = getByTestId('drinks-bottom-btn');
  expect(drinkBottom).toBeInTheDocument();
});