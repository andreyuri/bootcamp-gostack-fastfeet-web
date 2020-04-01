import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 24px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      text-transform: uppercase;
      color: #999;
      transition: color 0.2s;

      & + a {
        margin-left: 10px;
      }

      &.active {
        color: black;
      }

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20ex;
  padding-left: 20px;
  text-align: right;

  strong {
    display: block;
    color: #999;
  }

  a {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #999;
  }

  button {
    background: none;
    border: 0;
    color: red;
    margin-top: 5px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;
