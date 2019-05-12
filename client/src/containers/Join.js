import React, { useState } from "react";

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Component & Container Imports
import AvatarContainer from "../components/AvatarContainer";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Form from "../components/Form";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import SpeechBubble from "../components/SpeechBubble";
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
      <Form onSubmit={submitAndConnect}>
        <FormLabel>Your Avatar</FormLabel>
        <SpeechBubble>Looking good!</SpeechBubble>
        <AvatarContainer>
          <PlayerAvatar />
        </AvatarContainer>
        <FormLabel>Name</FormLabel>
        <InputField
          type="text"
          name="name"
          onChange={handlePlayerName}
          required
        />

        <FormLabel>Enter Game ID</FormLabel>
        <InputField
          type="text"
          name="gameName"
          onChange={handleGameName}
          required
        />

        <ButtonContainer>
          <Button primary marginTop formButton type="submit">
            Join
          </Button>
        </ButtonContainer>
      </Form>
      <Button back marginBottom onClick={goBack}>
        Back
      </Button>
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
