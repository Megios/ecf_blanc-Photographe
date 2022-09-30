import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Wrapper>
      <h2>Logo</h2>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  top: 0;
  flex-direction: column;
  align-items: center;
  background: transparent;
  font-family: "font-1";
`;

export default Header;
