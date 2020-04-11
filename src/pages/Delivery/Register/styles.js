import styled, { css } from 'styled-components';
import { darken } from 'polished';

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

export const Content = styled.div`
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
`;

export const Button = styled.button`
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

  & + button {
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

export const InputLine = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 7px;
  }

  > div {
    margin-bottom: 10px;
  }

  > input {
    height: 34px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    padding: 10px;
    transition: border 0.2s;

    &:hover {
      border: 1px solid #b3b3b3;
    }
  }
`;
