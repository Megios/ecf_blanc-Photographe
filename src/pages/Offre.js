import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
const Offre = () => {
  return (
    <Wrapper>
      <Header />
      <h1>Offre</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "font-1";
  text-align: center;
  color: #f6efef;
`;
export default Offre;
