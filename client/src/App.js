import React from "react";
import { createGlobalStyle } from "styled-components";
import ComponentsCatalogue from "./containers/ComponentsCatalogue";

const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600");
    background-color: #764ad7;
    color: #ffffff;
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <ComponentsCatalogue />
        </header>
      </div>
    </>
  );
}

export default App;
