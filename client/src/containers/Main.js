import React from "react";

// React Router Imports
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // eslint-disable-line

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Component & Container Imports
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Zorb from "../components/Zorb";
import ZorbContainer from "../components/ZorbContainer";

// Library Imports
import styled from "styled-components/macro";

export const Main = props => {
  return (
    <Wrapper>
      <Container>
        <ZorbContainer>
          <Zorb />
        </ZorbContainer>
        <div>
          <Header>{`What's that?`}</Header>
          <Hero>
            You draw, <strong>BUGY</strong> guesses. You have only 15 seconds
            per round to show off your artistic skills. Can{" "}
            <strong>BUGY</strong> understand what you are trying to draw?
            Let&apos;s get started!
          </Hero>
        </div>
        <div>
          <Link to="/join">
            <Button>Join</Button>
          </Link>
          <Link to="/create">
            <Button primary onClick={props.getGameKey}>
              Create
            </Button>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`;

const Header = styled.h1`
  margin: 4vh 0;
`;

const Hero = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  margin-bottom: 6vh;
  padding: 0 15vw;
`;

const mapDispatchToProps = dispatch => ({
  getGameKey: () => dispatch(Actions.getKey())
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
