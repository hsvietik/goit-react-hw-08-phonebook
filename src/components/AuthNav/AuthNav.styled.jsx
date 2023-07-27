import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  font-size: 18px;
  font-weight: 900;
  &.active {
    color: #1f7ba0;
  }
`;
