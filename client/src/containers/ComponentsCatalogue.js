import React from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export const ComponentsCatalogue = () => {
  return (
    <>
      <h2>Buttons</h2>
      <Button>default</Button>
      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
      <h2>NavBar</h2>
      <NavBar>Logo and name</NavBar>
      <h2>Input fields</h2>
    </>
  );
};

export default ComponentsCatalogue;
