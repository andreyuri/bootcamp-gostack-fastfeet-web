import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdMoreHoriz,
  MdFiberManualRecord,
  MdVisibility,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import { Button, MenuItem } from '@material-ui/core';

import api from '~/services/api';
import SimpleModal from '~/components/SimpleModal';

import {
  Container,
  HeaderBody,
  AddButton,
  Table,
  Deliveryman,
  Status,
  ActionButton,
  ModalBody,
  ModalBodyTextHighlight,
  StyledMenu,
} from './styles';

export default function Delivery() {
  const [delivery, setDelivery] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenModal = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function treatDeliveryResponse(deliveries) {
    const data = deliveries.map((d) => ({
      ...d,
      actionsVisible: false,
      firstLetters:
        d.deliveryman.name.split(' ')[0].substring(0, 1) +
        d.deliveryman.name.split(' ')[1].substring(0, 1),
    }));
    return data;
  }

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('/deliveries');

      const data = treatDeliveryResponse(response.data);

      setDelivery(data);
    }

    loadDelivery();
  }, []);

  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const response = await api.get('/deliveries', {
      params: {
        q: searchText,
      },
    });

    setDelivery(treatDeliveryResponse(response.data));
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando encomendas</h1>
        <HeaderBody onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={handleChangeSearchText}
            placeholder="Buscar por encomendas"
          />
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
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleOpenModal}
                >
                  <MdMoreHoriz size={24} color="black" />
                </Button>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    {' '}
                    <SimpleModal
                      openButtonContent={
                        <>
                          <MdVisibility size={12} color="purple" /> Visualizar
                        </>
                      }
                      bodyContent={
                        <ModalBody>
                          <ModalBodyTextHighlight>
                            Informações da encomenda
                          </ModalBodyTextHighlight>
                          <p>
                            {item.recipient.street}, {item.recipient.number}
                          </p>
                          <p>
                            {item.recipient.city} - {item.recipient.state}
                          </p>
                          <p>{item.recipient.postal_code}</p>
                        </ModalBody>
                      }
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ActionButton>
                      <MdEdit size={12} color="blue" /> Editar
                    </ActionButton>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ActionButton>
                      <MdDelete size={12} color="red" /> Excluir
                    </ActionButton>
                  </MenuItem>
                </StyledMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
