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

// Library Imports
import styled from "styled-components/macro";

export const Main = props => {
  return (
    <Wrapper>
      <Container>
        <Zorb />
        <div>
          <Text>
            You draw, Zorb guesses. You have only 20 seconds per round to show
            off your artistic skills. Can Zorb understand what you are trying to
            draw? Let&apos;s get started!
          </Text>
        </div>
        <div>
          <Link to="/create">
            <Button primary onClick={props.getGameKey}>
              Create
            </Button>
          </Link>
          <Link to="/join">
            <Button>Join</Button>
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
`;

const Text = styled.p`
  font-size: 1.4rem;
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
