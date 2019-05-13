import React, { useState, useEffect } from "react";

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
import Modal from "../components/Modal";

const Join = ({ game, join, connectGame, history }) => {
  const [playerName, setPlayerName] = useState("");
  const [gameKey, setGameKey] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (game.message) history.push("/lobby");
    //else if (join.error) setErrorMessage(true);
  }, [game]);

  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };

  const handleGameName = event => {
    const value = event.target.value;
    setGameKey(value);
  };

  const submitAndConnect = e => {
    e.preventDefault();
    connectGame(playerName, game.userAvatar, gameKey, "joinGame");
    //connectGame(playerName, game.userAvatar, gameKey, 'noGo')
  };

  const goBack = () => {
    history.goBack();
  };

  const visible = () => {
    setErrorMessage(false);
  };

  return errorMessage ? (
    <Wrapper>
      <Modal visible={visible} />
    </Wrapper>
  ) : (
    <Wrapper>
      <Form onSubmit={submitAndConnect}>
        <FormLabel>Your Avatar</FormLabel>
        <SpeechBubble>Looking good!</SpeechBubble>
        <AvatarContainer
          style={{ transform: "scale(2.5)", margin: "2vh 0 4vh 0" }}
        >
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

const mapStateToProps = state => {
  return {
    game: state.game,
    join: state.pages.join
  };
};

const mapDispatchToProps = { connectGame: Actions.connectGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
