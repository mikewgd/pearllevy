import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { H1 } from '../styles';

export const Wrapper = styled.header`
  text-align: center;
	padding: 20px;
`;

export const Logo = styled(H1)`
  position: relative;

  &:after {
    content: '';
    width: 150px;
    height: 1px;
    background-color: #cebd84;
    position: absolute;
    bottom: -4px;
    left: 50%;
    margin-left: -75px;
  }

  div {
    font-size: 50%;
  }
`;

export const Nav = styled.nav`
  font-size: 12px;
  display: grid;
  max-width: 220px;
  margin: 10px auto 0 auto;
`;

export const NavItem = styled(NavLink)`
  padding: 10px;
  grid-row: 1;
`;
