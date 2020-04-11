import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import Async from 'react-select/async';

import api from '~/services/api';

import { Container, Header, Button, InputLine } from './styles';

export default function Register() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');

      const data = response.data.map((r) => ({
        ...r,
        label: r.name,
        value: r.name,
      }));

      setRecipients(data);
    }

    async function loadDeliverymans() {
      const response = await api.get('/deliverymans');

      const data = response.data.map((r) => ({
        ...r,
        label: r.name,
        value: r.name,
      }));

      setDeliverymans(data);
    }

    loadRecipients();
    loadDeliverymans();
  }, []);

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

      <Form>
        <InputLine>
          <label htmlFor="recipient">Destinatário</label>
          <Async
            id="recipient"
            name="recipient"
            cacheOptions
            defaultOptions={recipients}
            placeholder="Nome do destinatário"
            isSearchable={false}
          />
          <label htmlFor="deliveryman">Entregador</label>
          <Async
            id="deliveryman"
            name="deliveryman"
            cacheOptions
            defaultOptions={deliverymans}
            placeholder="Nome do entregador"
            isSearchable={false}
          />
        </InputLine>
        <InputLine>
          <label htmlFor="product">Nome do produto</label>
          <Input
            id="product"
            name="product"
            type="text"
            placeholder="Nome do produto"
          />
        </InputLine>
      </Form>
    </Container>
  );
}
