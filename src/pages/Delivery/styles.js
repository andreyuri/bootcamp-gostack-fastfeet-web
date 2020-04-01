import styled from 'styled-components';
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
