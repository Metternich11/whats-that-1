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

import Button from "./components/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  // <Button onClick={props.createGame}>CLICK ME FOR REDUX</Button>

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Route exact path='/' component={Main}></Route>
        <Route path='/create' component={Create}></Route>
        <Route path='/components' component={ComponentsCatalogue}></Route>
        <Route path='/lobby' component={Lobby}></Route>
        <Route path='/game' component={Game}></Route>
        <Route path='/results' component={Results}></Route>
      </div>
    </>

  )
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
