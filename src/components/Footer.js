import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright Megios Dev</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: black;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding-top: 50px;
  text-align: center;
`;

export default Footer;
