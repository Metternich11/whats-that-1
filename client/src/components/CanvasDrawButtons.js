import React from "react";
import Button from "./Button";

export const CanvasDrawButtons = () => {
  return (
    <>
      <Button onClick={() => this.saveableCanvas.clear()}>Clear</Button>
      <Button onClick={() => this.saveableCanvas.undo()}>Undo</Button>
    </>
  );
};

export default CanvasDrawButtons;
