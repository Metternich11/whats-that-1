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
          <Button primary marginTop form type="submit">
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

const mapDispatchToProps = { addName: Actions.addName };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
