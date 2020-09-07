import React from 'react';

import { Link } from 'react-router-dom';

import { Container, NavLink, NavBar } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <NavBar>
        <NavLink>
          <Link to="/">Listagem</Link>
        </NavLink>
        <NavLink>
          <Link to="import">Importar</Link>
        </NavLink>
      </NavBar>
    </header>
  </Container>
);

export default Header;
