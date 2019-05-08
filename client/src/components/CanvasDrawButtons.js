import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export const CanvasDrawButtons = () => {
  return (
    <Container>
      <Button onClick={() => this.saveableCanvas.clear()}>Clear</Button>
      <Button onClick={() => this.saveableCanvas.undo()}>Undo</Button>
    </Container>
  );
};

export default CanvasDrawButtons;
