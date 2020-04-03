import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import { Container, Header, Button, RegisterBody } from './styles';

export default function Register() {
  return (
    <Container>
      <Header>
        <h1>Cadastro de encomendas</h1>
        <div>
          <Button type="button" to="/delivery" back>
            <MdArrowBack size={24} color="#fff" />
            Voltar
          </Button>
          <Button type="button" save>
            <MdCheck size={24} color="#fff" />
            Salvar
          </Button>
        </div>
      </Header>

      <RegisterBody>
        <Form>
          <div>
            <label htmlFor="recipient">Destinatário</label>
            <Input
              id="recipient"
              name="recipient"
              type="text"
              placeholder="Nome do destinatário"
            />
            <label htmlFor="deliveryman">Entregador</label>
            <Input
              id="deliveryman"
              name="deliveryman"
              type="text"
              placeholder="Nome do entregador"
            />
          </div>
          <label htmlFor="product">Nome do produto</label>
          <Input
            id="product"
            name="product"
            type="text"
            placeholder="Nome do produto"
          />
        </Form>
      </RegisterBody>
    </Container>
  );
}
