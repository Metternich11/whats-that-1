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

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // eslint-disable-line

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #764ad7;
    color: #ffffff;
    margin: 0;
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600|Yeon+Sung");
    font-family: 'Nunito', sans-serif;
  }
  .gameTitle {
    font-size: 1.6rem;
    font-family: 'Yeon Sung', cursive;
  }
`;

const App = () => {
  // <Button onClick={props.createGame}>CLICK ME FOR REDUX</Button>

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/components" component={ComponentsCatalogue} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
        <Route path="/join" component={Join} />
        <Route path="/between-rounds" component={BetweenRounds} />
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
