import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 25px;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;
