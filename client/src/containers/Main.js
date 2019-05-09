import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import * as Actions from '../redux/actions/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // eslint-disable-line

export const Main = (props) => {
  return (
    <ContainerWrapper>
      <Link to="/create"><Button onClick={props.getGameKey}>Create</Button></Link>
      <Link to="/join"><Button>Join</Button></Link>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100px;
`;

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
)(Main);
