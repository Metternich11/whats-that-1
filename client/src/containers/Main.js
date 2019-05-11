import React from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

import styled from "styled-components";

import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // eslint-disable-line

export const Main = props => {
  return (
    <Wrapper>
      <Container>
        <Link to="/create">
          <Button primary onClick={props.getGameKey}>
            Create
          </Button>
        </Link>
        <Link to="/join">
          <Button>Join</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = state => ({
  getKey: state.getKey
});

const mapDispatchToProps = dispatch => ({
  getGameKey: () => dispatch(Actions.getKey())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
