import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  header {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 24px;
    }
  }
`;

export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;

  input {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    padding: 10px 20px;

    transition: border 0.2s;

    &:hover {
      border: 1px solid ${colors.primary};
    }

    &:focus {
      border: 1px solid ${lighten(0.2, colors.primary)};
    }
  }
`;

export const AddButton = styled.button`
  color: #fff;
  border: 0;
  border-radius: 4px;
  background: ${colors.primary};
  padding: 10px 20px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.1, colors.primary)};
  }
`;

export const Table = styled.table.attrs({
  rules: 'none',
  border: 0,
})`
  width: 100%;
  text-align: left;
  border-spacing: 0 20px;

  thead {
    th {
      padding: 5px 20px;
    }
    th:last-child {
      text-align: right;
    }
  }

  tbody {
    background: #fff;

    td {
      padding: 10px 20px;
      height: 38px;
      border: 0;

      &:last-child {
        text-align: right;
        opacity: 0.9;
      }
    }
  }
`;

export const Deliveryman = styled.td`
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  span {
    margin-right: 8px;
    font-weight: bold;
    padding: 7px;
    border-radius: 50px;
    color: #fff;
    text-transform: uppercase;

    ${(props) =>
      props.color &&
      css`
        background: ${props.color};
      `}
  }
`;

export const Status = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;

  svg {
    margin-right: 4px;
  }

  background: ${lighten(0.5, '#a0a016')};
  color: #a0a016;

  ${(props) =>
    props.entregue &&
    css`
      background: ${lighten(0.5, '#426942')};
      color: #426942;
    `}

  ${(props) =>
    props.cancelada &&
    css`
      background: ${lighten(0.2, '#de5c5c')};
      color: #de5c5c;
    `}

  ${(props) =>
    props.retirada &&
    css`
      background: ${lighten(0.35, '#2727dc')};
      color: #2727dc;
    `}
`;

export const ActionsButton = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: 0;
`;
