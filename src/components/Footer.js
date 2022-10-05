import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <span>Facebook</span>
      <span>instagram</span>
      <p>@Copyright Megios Dev</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: black;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding-top: 30px;
  text-align: center;
`;

export default Footer;
