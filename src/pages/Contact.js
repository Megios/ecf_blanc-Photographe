import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <Wrapper>
      <Header />
      <h1>Contact</h1>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-family: "font-1";
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Contact;
