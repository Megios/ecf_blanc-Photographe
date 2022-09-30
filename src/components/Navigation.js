import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <NavLink to="/">
          <Li>Accueil</Li>
        </NavLink>
        <NavLink to="/galerie">
          <Li>Galerie</Li>
        </NavLink>
        <NavLink to="/offres">
          <Li>Offres</Li>
        </NavLink>
        <NavLink to="/">
          <Li>Store</Li>
        </NavLink>
      </List>
    </Nav>
  );
};
const Li = styled.li`
  list-style-type: none;
  font-size: 2rem;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin: 0;
  padding: 0;
`;
export default Navigation;
