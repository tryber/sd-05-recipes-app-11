import React from 'react';
import { render } from '@testing-library/react';
import TelaLogin from '../Pages/TelaLogin';


test('renderiza caixa de texto do email', () => {
  const { getByTestId } = render(<TelaLogin />);
  const inputEmail = getByTestId('email-input');
  expect(inputEmail).toBeInTheDocument();
});

test('renderiza caixa de texto para senha', () => {
  const { getByTestId } = render(<TelaLogin />);
  const inputPassword = getByTestId('password-input');
  expect(inputPassword).toBeInTheDocument();
});

test('renderiza o botão para login', () => {
  const { getByTestId } = render(<TelaLogin />);
  const loginButton = getByTestId('login-submit-btn');
  expect(loginButton).toBeInTheDocument();
});
