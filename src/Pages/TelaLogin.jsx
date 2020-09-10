import React, { useState } from 'react';
import { useEffect } from 'react';

// HA https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function onclickFuntion() {
  localStorage.setItem('mealsToken', 'tokenAqui');
  localStorage.setItem('cocktailsToken', 'tokenAqui');
  localStorage.setItem('user', 'tokenAqui');
/*   localStorage.setItem('doneRecipes', 'tokenAqui');
  localStorage.setItem('favoriteRecipes ', 'tokenAqui');
  localStorage.setItem('inProgressRecipes', 'tokenAqui'); */
}

export default function Login() {
  const [validation, setValidation] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (validateEmail(email) && password.length > 6) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  }, [email, password]);

  return (
    <form>
      <h1>Login</h1>
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        data-testid="password-input"
        type="password"
        minLength="7"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        onClick={() => onclickFuntion()}
        disabled={validation}
      >
        Entrar
      </button>
    </form>
  );
}
