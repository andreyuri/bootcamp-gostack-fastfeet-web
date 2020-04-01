import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, HeaderBody, AddButton } from './styles';

export default function Delivery() {
  return (
    <Container>
      <header>
        <h1>Gerenciando encomendas</h1>
        <HeaderBody>
          <input type="text" placeholder="Buscar por encomendas" />
          <AddButton type="button">
            <MdAdd size={18} color="#fff" />
            Cadastrar
          </AddButton>
        </HeaderBody>
      </header>
    </Container>
  );
}
