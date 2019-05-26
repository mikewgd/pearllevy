import React from 'react';

import { Wrapper, Nav, NavItem, Logo } from './Header.css';

const NavItems = [
  {
    id: 0,
    to: '/',
    name: 'Home',
  },
  {
    id: 1,
    to: '/services',
    name: 'Services',
  },
  {
    id: 2,
    to: '/contact',
    name: 'Contact',
  },
];

export const Header = () => (
  <Wrapper>
    <Logo>
      <div>Law Office of</div>
      Edward S. Levy
    </Logo>

    <Nav>
      {
        NavItems.map(item => <NavItem key={item.id} to={item.to}>{item.name}</NavItem>)
      }
    </Nav>
  </Wrapper>
);
