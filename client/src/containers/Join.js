import React from "react";

import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

import Button from "../components/Button";
import FormField from "../components/FormField";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";

const stateTest = { name: "", gameName: "" };

const handleChangeTest = event => {
  const value = event.target.value;
  stateTest.name = value;
};

const handleSubmitTest = event => {
  event.preventDefault();
  // would save the name
};

const Join = props => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmitTest}>
        <FormField>
          <FormLabel>Your Avatar: </FormLabel>
          <PlayerAvatar />
        </FormField>
        <FormField>
          <FormLabel>Enter your name: </FormLabel>
          <InputField type="text" name="name" onChange={handleChangeTest} />
        </FormField>
        <FormField>
          <FormLabel>Enter Game Name: </FormLabel>
          <InputField type="text" name="gameName" onChange={handleChangeTest} />
        </FormField>
        <Button primary marginTop type="submit" onClick={props.joinRoom}>
          Join
        </Button>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  gameKey: state.gameKey
});

const mapDispatchToProps = dispatch => ({
  joinRoom: () => dispatch(Actions.joinRoom())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
