import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';

// Router Setup
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // eslint-disable-line

// Component & Container Imports
import ComponentsCatalogue from './containers/ComponentsCatalogue';
import Create from './containers/Create';
import Join from './containers/Join';
import Lobby from './containers/Lobby';
import Game from './containers/Game';
import Results from './containers/Results';
import BetweenRounds from './containers/BetweenRounds';
import GuessedCorrectly from './containers/GuessedCorrectly';
import Main from './containers/Main';
import Playground from './containers/Playground';

// Styling & Animations
import './App.css';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
      <>
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Main} pathname="Main" />
              <Route path="/create" component={Create} pathname="Create" />
              <Route path="/join" component={Join} pathname="Join" />
              <Route
                path="/components"
                component={ComponentsCatalogue}
                pathname="ComponentsCatalogue"
              />
              <Route path="/lobby" component={Lobby} pathname="Lobby" />
              <Route path="/game" component={Game} pathname="Game" />
              <Route
                path="/between-rounds"
                component={BetweenRounds}
                pathname="BetweenRounds"
              />
              <Route
                path="/guessed-correctly"
                component={GuessedCorrectly}
                pathname="GuessedCorrectly"
              />
              <Route path="/results" component={Results} pathname="Results" />
              <Route path="/playground" component={Playground} />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </>
    )}
  />
);

export default App;
