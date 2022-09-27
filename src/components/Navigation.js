import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/galerie">
          <li>Galerie</li>
        </NavLink>
        <NavLink to="/">
          <li>Store</li>
        </NavLink>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;
export default Navigation;
