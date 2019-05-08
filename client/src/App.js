import React from "react";
import { createGlobalStyle } from "styled-components";
import ComponentsCatalogue from "./containers/ComponentsCatalogue";
import Create from "./containers/Create";
import Lobby from "./containers/Lobby";
import Game from "./containers/Game";
import Results from "./containers/Results";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #764ad7;
    color: #ffffff;
    margin: 0;
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600");
    font-family: 'Nunito', sans-serif;
  }
`;

function App () {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ComponentsCatalogue />
        <h2>VIEW: CREATE</h2>
        <Create />
        <h2>VIEW: LOBBY</h2>
        <Lobby />
        <h2>VIEW: GAME</h2>
        <Game />
        <h2>VIEW: RESULTS</h2>
        <Results />
      </div>
    </>
  );
}

export default App;
