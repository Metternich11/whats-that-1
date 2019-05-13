import React, { useState, useEffect, useRef } from "react";

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

const Join = ({ game, pages, connectGame, history }) => {

  const [playerName, setPlayerName] = useState("");
  const [gameKey, setGameKey] = useState("");
  const joinForm = useRef();
  const gameKeyInput = useRef();

  useEffect(() => {
    if (game.players) history.push('/lobby');  // Ole, please don't touch this
    else if (pages.join.error) {
      gameKeyInput.current.setCustomValidity('Game code does not exist')
      joinForm.current[1].reportValidity()
    }
  }, [game])

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
    connectGame(playerName, game.userAvatar, gameKey, 'joinGame');
  }

  const goBack = () => {
    history.goBack();
  };


  return (
       <Wrapper> 
      <Form onSubmit={submitAndConnect} ref={joinForm}>
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
          ref={gameKeyInput}
          required
        />

        <ButtonContainer>
          <Button primary marginTop formButton type="submit">
            Join
          </Button>
        </ButtonContainer>
      </Form> 
      <Button back marginBottom onClick={goBack}>Back</Button>
      </Wrapper>
  );
};

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    game: state.game,
    pages: state.pages
  }
};

const mapDispatchToProps = { connectGame: Actions.connectGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
