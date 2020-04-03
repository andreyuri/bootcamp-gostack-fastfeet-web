import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdMoreHoriz,
  MdFiberManualRecord,
  MdVisibility,
  MdEdit,
  MdDelete,
} from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  HeaderBody,
  AddButton,
  Table,
  Deliveryman,
  Status,
  Actions,
  ActionsButton,
  ActionList,
  ActionButton,
} from './styles';

export default function Delivery() {
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('/deliveries');

      const data = response.data.map((d) => ({
        ...d,
        actionsVisible: false,
        firstLetters:
          d.deliveryman.name.split(' ')[0].substring(0, 1) +
          d.deliveryman.name.split(' ')[1].substring(0, 1),
      }));

      setDelivery(data);
    }

    loadDelivery();
  }, []);

  function handleToggleVisible(id) {
    setDelivery(
      delivery.map((d) => {
        if (d.id === id) {
          d.actionsVisible = !d.actionsVisible;
        } else {
          d.actionsVisible = false;
        }

        return d;
      })
    );
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando encomendas</h1>
        <HeaderBody>
          <input type="text" placeholder="Buscar por encomendas" />
          <AddButton type="button" to="/delivery/register">
            <MdAdd size={18} color="#fff" />
            Cadastrar
          </AddButton>
        </HeaderBody>
      </header>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Produto</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {delivery.map((item) => (
            <tr key={String(item.id)}>
              <td>#{item.id}</td>
              <td>{item.recipient.name}</td>
              <Deliveryman color={item.color}>
                <span>{item.firstLetters}</span>
                {item.deliveryman.name}
              </Deliveryman>
              <td>{item.recipient.city}</td>
              <td>{item.product}</td>
              <td>
                <Status
                  entregue={item.status === 'Entregue'}
                  cancelada={item.status === 'Cancelado'}
                  retirada={item.status === 'Retirada'}
                >
                  <MdFiberManualRecord size={10} />
                  {item.status}
                </Status>
              </td>
              <td>
                <Actions>
                  <ActionsButton onClick={() => handleToggleVisible(item.id)}>
                    <MdMoreHoriz size={24} color="black" />
                  </ActionsButton>

                  <ActionList visible={item.actionsVisible}>
                    <ActionButton>
                      <MdVisibility size={12} color="purple" /> Visualizar
                    </ActionButton>
                    <ActionButton>
                      <MdEdit size={12} color="blue" /> Editar
                    </ActionButton>
                    <ActionButton>
                      <MdDelete size={12} color="red" /> Excluir
                    </ActionButton>
                  </ActionList>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
