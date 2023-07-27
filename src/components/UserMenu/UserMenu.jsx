import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Navigation, NavigationLink, LogOutButton } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const { userName } = useAuth();
  return (
    <>
      <Navigation>
        <NavigationLink to="/contacts">View contacts</NavigationLink>
        <NavigationLink to="/add">Add contact</NavigationLink>
      </Navigation>
      <p>Welcome, {userName}</p>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutButton>
    </>
  );
}
export default UserMenu;
