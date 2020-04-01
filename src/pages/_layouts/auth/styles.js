import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, ${colors.primary}, ${colors.second});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #fff;
  padding: 40px 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-align: left;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
      margin-top: 10px;
    }

    input {
      background: #fff;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 10px 0 10px;
      border: 1px solid #d3d3d3;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      color: #fff;
      background: ${colors.primary};
      padding: 12px 22px;
      border-radius: 4px;
      border: 0;
      margin-top: 10px;
    }
  }
`;
