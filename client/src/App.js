import React from "react";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import { createGame } from "./redux/actions/index";

import ComponentsCatalogue from "./containers/ComponentsCatalogue";
import Create from "./containers/Create";
import Join from "./containers/Join";
import Lobby from "./containers/Lobby";
import Game from "./containers/Game";
import Results from "./containers/Results";
import BetweenRounds from "./containers/BetweenRounds";
import Main from "./containers/Main";
import "./App.css";
<<<<<<< HEAD
import { connect } from "react-redux";
import * as Actions from './redux/actions';
import Button from "./components/Button";
=======

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // eslint-disable-line
>>>>>>> 79694a4a0e3857425437d439fc0b2e481f84747e

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #764ad7;
    color: #ffffff;
    margin: 0;
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600");
    font-family: 'Nunito', sans-serif;
  }
`;

const App = () => {
  // <Button onClick={props.createGame}>CLICK ME FOR REDUX</Button>

  return (
    <>
      <GlobalStyle />
      <div className="App">
<<<<<<< HEAD
        <Button onClick={props.getGameKey}>CLICK ME FOR REDUX</Button>
        <ComponentsCatalogue />
        <h2>VIEW: CREATE</h2>
        <Create />
        <h2>VIEW: LOBBY</h2>
        <Lobby />
        <h2>VIEW: GAME</h2>
        <Game />
        <h2>VIEW: RESULTS</h2>
        <Results />
=======
        <Route exact path="/" component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/components" component={ComponentsCatalogue} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
        <Route path="/join" component={Join} />
        <Route path="/between-rounds" component={BetweenRounds} />
>>>>>>> 79694a4a0e3857425437d439fc0b2e481f84747e
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  getKey: state.getKey
});

const mapDispatchToProps = dispatch => ({
  getGameKey: key => dispatch(Actions.getKey(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
