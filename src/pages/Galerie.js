import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import Footer from "../components/Footer";

const Galerie = () => {
  const [data, setData] = useState([]);
  const [selectedCat, setSelectedCat] = useState();
  const categories = [
    "Grossesse",
    "Mariage",
    "Bébé",
    "Famille",
    "Baptême",
    "CouplePortrait",
  ];
  useEffect(() => {
    axios.get("http://localhost:3200/photos").then((res) => setData(res.data));
  }, []);

  return (
    <Wrapper>
      <Header />
      <h1>Galerie</h1>
      <NavTri>
        {categories.map((categorie) => (
          <li key={Math.random()}>
            <input
              type="radio"
              id={categorie}
              name="categoriesRadio"
              checked={categorie === selectedCat}
              onChange={(e) => setSelectedCat(e.target.id)}
            />
            <label htmlFor={categorie}>{categorie}</label>
          </li>
        ))}
      </NavTri>
      {selectedCat && (
        <button onClick={() => setSelectedCat()}>Annuler le filtre</button>
      )}
      <WrapperCard>
        {selectedCat
          ? data
              .filter((photo) => photo.categories.includes(selectedCat))
              .map((photo) => <Card key={Math.random()} photo={photo} />)
          : data.map((photo) => <Card key={Math.random()} photo={photo} />)}
      </WrapperCard>
      <Footer />
    </Wrapper>
  );
};
const WrapperCard = styled.ul`
  margin: 0;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: relative;
  text-align: center;
`;
const NavTri = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 1vw;
    &:hover {
      color: black;
    }
  }
  label {
    &:hover {
      cursor: pointer;
    }
  }
`;
export default Galerie;
