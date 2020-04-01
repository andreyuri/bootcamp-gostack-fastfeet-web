import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.png';

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />
        <label htmlFor="password">Sua senha</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="*********"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
