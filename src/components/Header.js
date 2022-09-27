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
  flex-direction: colum;
  align-item: center;
  background: #fff;
  border: 1px solid #ccc;
`;

export default Header;
