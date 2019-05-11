import React, { useState } from "react";

import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

import Button from "../components/Button";
import Form from "../components/Form";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";

const Join = props => {
  const [playerName, setPlayerName] = useState("");
  const [game, setGame] = useState("");

  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };

  const handleGameName = event => {
    const value = event.target.value;
    setGame(value);
  };

  const submitAndConnect = e => {
    e.preventDefault();
    props.addName(playerName, props.userAvatar, game, "Join");
    props.history.push("/lobby");
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <Wrapper>
      <Button onClick={goBack}>Go Back</Button>
      <Form onSubmit={submitAndConnect}>
        <FormLabel>Your Avatar: </FormLabel>
        <PlayerAvatar />

        <FormLabel>Enter your name: </FormLabel>
        <InputField type="text" name="name" onChange={handlePlayerName} />

        <FormLabel>Enter Game Name: </FormLabel>
        <InputField type="text" name="gameName" onChange={handleGameName} />

        <Button primary marginTop type="submit">
          Join
        </Button>
      </Form>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  userAvatar: state.userAvatar,
  gameKey: state.gameKey
});

const mapDispatchToProps = dispatch => ({
  addName: (player, avatar, gameKey, socketType) =>
    dispatch(Actions.addName(player, avatar, gameKey, socketType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
