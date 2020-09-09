import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <input data-testid="email-input" type="email" >Email</input>
      <input data-testid="password-input" type="password" minLength="6">Senha</input>
      <button data-testid="login-submit-btn" type="button" disabled>Entrar</button>
    </div>
  )
}

