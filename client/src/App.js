import React from "react";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";

import ComponentsCatalogue from "./containers/ComponentsCatalogue";
import Button from './components/Button'
import * as Actions from './redux/actions/index'
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
    @import url("https://fonts.googleapis.com/css?family=Nunito:400,600");
    font-family: 'Nunito', sans-serif;
  }
`;

const App = (props) => {
  
  return (
    <>
    <Button onClick={props.getGameKey}>CLICK ME FOR CREATION</Button>
    <Button onClick={props.joinRoom}>CLICK ME FOR JOINING</Button>
      <GlobalStyle />
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/join" component={Join} />
        <Route path="/components" component={ComponentsCatalogue} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
        <Route path="/between-rounds" component={BetweenRounds} />
        <Route path="/results" component={Results} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  getKey: state.getKey
});

const mapDispatchToProps = dispatch => ({
  getGameKey: () => dispatch(Actions.getKey()),
  joinRoom: () => dispatch(Actions.joinRoom())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
