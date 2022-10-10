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
  position: absolute;
  display: flex;
  flex-direction: column;
  background: black;
  width: 100%;
  bottom: -100px;
  height: 80px;
  padding-top: 20px;
  text-align: center;
  span {
    color: white;
  }
`;

export default Footer;
