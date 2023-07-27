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

export const LogOutButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  background-color: #c7a149;
  &:focus,
  &:hover {
    background-color: #b38f41;
  }
`;
