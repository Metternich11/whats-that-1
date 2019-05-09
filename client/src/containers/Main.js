import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

export const Main = () => {
  return (
    <>
      <ContainerWrapper>
        <Button>CREATE</Button>
        <Button>JOIN</Button>
      </ContainerWrapper>
    </>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100px;
`;

export default Main;
