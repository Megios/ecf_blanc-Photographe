import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Galerie = () => {
  return (
    <Wrapper>
      <Header />
      <h1>Galerie</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "font-1";
  text-align: center;
  color: #f6efef;
`;
export default Galerie;
