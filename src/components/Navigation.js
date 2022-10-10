import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <NavLink
          to="/accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <Li>Accueil</Li>
        </NavLink>
        <NavLink
          to="/galerie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <Li>Galerie</Li>
        </NavLink>
        <NavLink
          to="/offres"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <Li>Offres</Li>
        </NavLink>
        <NavLink to="/contact">
          <Li>Contact</Li>
        </NavLink>
      </List>
    </Nav>
  );
};
const Li = styled.li`
  list-style-type: none;
  font-size: 2vw;
  transition: 0.2s;
  &:hover {
    color: #152028;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    border-radius: 30px;
    padding: 10px;
    text-decoration: none;
  }

  .nav-active {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin: 0;
  padding: 0;
`;
export default Navigation;
