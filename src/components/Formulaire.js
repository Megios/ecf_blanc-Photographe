import React from "react";
import styled from "styled-components";

const Formulaire = () => {
  return (
    <Form>
      <h2>Nous contacté</h2>
      <FormGroupe>
        <label id="nom">Votre Nom</label>
        <input type="text" id="nom" />
      </FormGroupe>
      <FormGroupe>
        <label id="prenom">Votre Prenom*</label>
        <input type="text" id="prenom" />
      </FormGroupe>
      <FormGroupe>
        <label id="email">Votre Email*</label>
        <input type="text" id="email" />
      </FormGroupe>
      <FormGroupe>
        <label id="message">Votre Message*</label>
        <textarea id="message" rows="5" cols="43" />
      </FormGroupe>
      <button type="submit">Envoyer</button>
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-left: 10vw;
  margin-bottom: 10vh;
  width: 50%;
  background: rgba(0, 0, 0, 0.4);
  label {
    font-size: 1.2rem;
  }
  button {
    font-size: 1.2rem;
    width: 40%;
    align-self: center;
    margin: 2vw;
    background: transparent;
    color: white;
    box-sizing: border-box;
    border: 2px solid white;
    width: 50%;
    padding: 15px 0;
  }
  input {
    font-size: 1.2rem;
    background: transparent;
    color: white;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    width: 50%;
    transition: width 0.4s ease-in-out;
    padding: 15px 0;
    outline: none;
    &:focus {
      transition: width 0.4s ease-in-out;
      width: 100%;
    }
  }
  textarea {
    background: transparent;
    color: white;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    height: 5rem;
    transition: height 0.4s ease-in-out;
    outline: none;
    width: 100%;
    max-width: 100%;
    &:focus {
      transition: height 0.4s ease-in-out;
      height: 9rem;
    }
  }
`;
const FormGroupe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px;
  color: white;
`;

export default Formulaire;
