import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import img from "../assets/images/backgroundAccueil.jpg";

const Home = () => {
  return (
    <Accueil>
      <HeaderA>
        <h2>Logo</h2>
        <Navigation />
      </HeaderA>
      <h1>Charles Cantin - photographe</h1>
    </Accueil>
  );
};
const HeaderA = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  align-items: center;
  background: transparent;
  width: 100vw;
  font-family: "font-1";
`;
const Accueil = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: center/cover url(${img});
  align-items: center;
  overflow: hidden;
  font-family: "font-1";
  color: #f6efef;
`;

export default Home;
