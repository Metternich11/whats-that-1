import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import FormField from "../components/FormField";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";

const stateTest = { name: "" };

const handleChangeTest = event => {
  const value = event.target.value;
  stateTest.name = value;
};

const handleSubmitTest = event => {
  event.preventDefault();
  // would save the name
};

function Create() {
  return (
    <ContainerWrapper>
      <form onSubmit={handleSubmitTest}>
        <FormField>
          <FormLabel>Enter your name: </FormLabel>
          <InputField type="text" name="name" onChange={handleChangeTest} />
        </FormField>
        <FormField>
          <FormLabel>Game Name: </FormLabel>
          <GameName>Awesome-Battle-436</GameName>
        </FormField>
        <Button primary marginTop type="submit">
          Create
        </Button>
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
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  width: 100%;
`;

export default Create;
