import React from "react";
import Button from "../components/Button";
import styled, { css } from "styled-components";

const stateTest = { name: "" };

const handleChangeTest = event => {
  const value = event.target.value;
  stateTest.name = value;
};

const handleSubmitTest = event => {
  event.preventDefault();
  // would save the name
};

function Create () {
  return (
    <ContainerWrapper>
      <form onSubmit={handleSubmitTest}>
        <label>
          <Title> Enter your name:</Title>
          <NameInput type="text" name="name" onChange={handleChangeTest} />
        </label>
        <GameName>Zebra.Lion.123</GameName>
        <Button primary type="submit">Create</Button>
      </form>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  text-align: center;
  align-items: center;
`;

const GameName = styled.div`
  color: #472c81;
  background-color: white;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const Title = styled.div`
  margin: 10px;
`;

const NameInput = styled.input`
  border: 0;
  outline: none;
  color: #472c81;
  background-color: white;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
`;

export default Create;
