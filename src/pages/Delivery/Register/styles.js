import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding-bottom: 50px;

  h1 {
    font-size: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

export const Button = styled(Link)`
  border: 0;
  color: #fff;
  padding: 5px 20px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: background 0.2s;

  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    padding-right: 5px;
  }

  & + a {
    margin-left: 15px;
  }

  ${(props) =>
    props.back &&
    css`
      background: #a5a5a5;

      &:hover {
        background: ${darken(0.07, '#a5a5a5')};
      }
    `}

  ${(props) =>
    props.save &&
    css`
      background: ${colors.primary};

      &:hover {
        background: ${darken(0.07, colors.primary)};
      }
    `}
`;

export const RegisterBody = styled.div`
  margin-top: 30px;
  background: #fff;
  padding: 30px 30px;

  label {
    font-weight: bold;
    text-transform: capitalize;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #eee;
    width: 100%;
    margin-top: 12px;
  }
`;
