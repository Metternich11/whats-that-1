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

  const submitAndConnect = async e => {
    e.preventDefault();
    
    props.addName(playerName, props.userAvatar, game, "joinRoom");

    props.history.push("/lobby");
  //   const user = { name: playerName };

  //   try {
  //     setLoading(true);
  //     const result = await joinGame(user, gameKey);
  //     redirectToLobby();
  //   } catch (error) {
  //     error = error && error.message;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const joinGame(user, gameKey) {
  //   return new Promise((resolve, reject) => {
  //     props.joinGame("randomstrings", user, gameKey);

  //   });
  }

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
        <InputField type="text" name="name" onChange={handlePlayerName} required />

        <FormLabel>Enter Game Name: </FormLabel>
        <InputField type="text" name="gameName" onChange={handleGameName} required />

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

const mapDispatchToProps = { addName: Actions.addName };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
