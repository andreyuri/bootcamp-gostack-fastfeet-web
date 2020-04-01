import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/images/logo.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/delivery">Encomendas</NavLink>
          <NavLink to="/deliveryman">Entregadores</NavLink>
          <NavLink to="/recipient">Destinatários</NavLink>
          <NavLink to="/problems">Problemas</NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
