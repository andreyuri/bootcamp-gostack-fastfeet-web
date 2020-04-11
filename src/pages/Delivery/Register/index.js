import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import AsyncSelect from '~/components/AsyncSelect';
import { addDeliveryRequest } from '~/store/modules/delivery/actions';

import { Container, Header, Button, Content, InputLine } from './styles';

export default function Register() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
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

  function handleSubmit(data) {
    dispatch(addDeliveryRequest(data));
  }

  function goHome() {
    history.push('/delivery');
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de encomendas</h1>
          <div>
            <Button type="button" onClick={goHome} back>
              <MdArrowBack size={24} color="#fff" />
              Voltar
            </Button>
            <Button type="submit" save>
              <MdCheck size={24} color="#fff" />
              Salvar
            </Button>
          </div>
        </Header>
        <Content>
          <InputLine>
            <label htmlFor="recipient">Destinatário</label>
            <AsyncSelect
              id="recipient"
              name="recipient"
              cacheOptions
              defaultOptions={recipients}
              placeholder="Nome do destinatário"
              isSearchable={false}
            />
            <label htmlFor="deliveryman">Entregador</label>
            <AsyncSelect
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
        </Content>
      </Form>
    </Container>
  );
}
