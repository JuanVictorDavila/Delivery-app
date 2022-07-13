import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import dataTestIds from '../utils/dataTestIds';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const checkInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;
    if (email.includes('@') && email.includes('.com')
    && password.length > MIN_LENGTH_PASSWORD) return false;
    return true;
  };

  const handleButtonClick = () => {
    setLogged(true);
  };

  return (
    <div className="formBox">
      {
        logged && <Navigate to="/customer" />
      }
      <div className="field">
        <label htmlFor="loginInput">
          Login
          <input
            id="loginInput"
            data-testid={ dataTestIds['1'] }
            className="input"
            type="email"
            placeholder="email@trybeer.com.br"
            onChange={ ({ target: { value } }) => setEmail(value) }
            value={ email }
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="passwordInput">
          Senha
          <input
            id="passwordInput"
            className="input"
            data-testid={ dataTestIds['2'] }
            type="password"
            placeholder="******"
            onChange={ ({ target: { value } }) => setPassword(value) }
            value={ password }
          />
        </label>
      </div>
      <div className="buttons">
        <button
          id="loginButton"
          data-testid={ dataTestIds['3'] }
          className="button is-success"
          type="button"
          disabled={ checkInputs() }
          onClick={ handleButtonClick }
        >
          LOGIN
        </button>
      </div>
      <div className="buttons">
        <Link
          to="/register"
        >
          <button
            id="newUserBtn"
            data-testid={ dataTestIds['4'] }
            className="button is-ghost"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </div>
    </div>
  );
}
