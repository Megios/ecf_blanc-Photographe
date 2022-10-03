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
  text-align: center;
`;
export default Galerie;
