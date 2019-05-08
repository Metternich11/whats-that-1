import React from "react";
import { createGlobalStyle } from "styled-components";
import ComponentsCatalogue from "./containers/ComponentsCatalogue";
import Create from "./containers/Create";
import Lobby from "./containers/Lobby";
import Game from "./containers/Game";
import Results from "./containers/Results";
import "./App.css";
import { connect } from "react-redux";
import { createGame } from "./redux/actions/index";
import Button from "./components/Button";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #764ad7;
    color: #ffffff;
    margin: 0;
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600");
    font-family: 'Nunito', sans-serif;
  }
`;

const App = props => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Button onClick={props.createGame}>CLICK ME FOR REDUX</Button>
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
};

const mapStateToProps = state => ({
  createGame: state.createGame
});

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
