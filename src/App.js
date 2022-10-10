import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galerie from "./pages/Galerie";
import Home from "./pages/Home";
import Offre from "./pages/Offre";
import { createGlobalStyle } from "styled-components";
import NovaMono from "./assets/fonts/NovaMono.ttf";
import Contact from "./pages/Contact";
import img from "./assets/images/photobackgroundfix.png";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/offres" element={<Offre />} />
        <Route path="*" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'font-1';
    src: url(${NovaMono});
  }
  body{
    margin:0;
    padding:0;
    background: fixed center/cover url(${img});
  }
  h2,h1,h3,p,li{
    font-family: 'font-1';
    color:color: #f6efef;
    color: white;
  }
`;
export default App;
