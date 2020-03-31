import React from 'react';

import logo from '~/assets/images/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <label htmlFor="email">Seu e-mail</label>
        <input id="email" type="email" placeholder="exemplo@email.com" />
        <label htmlFor="password">Sua senha</label>
        <input id="password" type="password" placeholder="*********" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
