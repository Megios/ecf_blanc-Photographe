import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const photo = props.photo;
  return (
    <Wrapper>
      <img src={photo.source} alt={photo.title} />
      <h3>{photo.title}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 25vw;
  width: 25vw;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h3 {
    opacity: 0;
    position: absolute;
  }

  &:hover {
    transform: scale(1.0541);
    transition: 0.2s;
    h3 {
      opacity: 1;
      transition: 0.5s;
    }
  }
  img {
    height: 100%;
  }
`;
export default Card;
