import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

import Button from "../components/Button";
import Form from "../components/Form";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";

function Create(props) {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };

  const submitName = e => {
    e.preventDefault();
    props.addName(playerName, props.userAvatar, props.gameKey, "Create");
    props.history.push("/lobby"); //not sure about this line, maybe ask Arol
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <Wrapper>
      <Form onSubmit={submitName}>
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

        <FormLabel>Game ID</FormLabel>
        <GameName>{props.loading ? "Loading..." : props.gameKey}</GameName>

        <ButtonContainer>
          <Button primary marginTop form type="submit">
            Create
          </Button>
        </ButtonContainer>
      </Form>
      <Button back marginBottom onClick={goBack}>
        Back
      </Button>
    </Wrapper>
  );
}

const GameName = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: #472c81;
  display: flex;
  font-size: 1.4rem;
  font-weight: bold;
  justify-content: center;
  min-height: 40px;
  width: 100%;
`;

const SpeechBubble = styled.span`
  animation: shake 3s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: #472c81;
  font-size: 0.8rem;
  padding: 4px 10px;
  position: relative;

  &:after {
    border: 20px solid transparent;
    border-left: 0;
    border-bottom: 0;
    border-top-color: rgba(255, 255, 255, 0.5);
    bottom: 0;
    content: "";
    height: 0;
    left: 50%;
    margin-left: -20px;
    margin-bottom: -20px;
    position: absolute;
    width: 0;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    25% {
      transform: translate(-1px, 2px) rotate(1deg);
    }
    75% {
      transform: translate(1px, 0px) rotate(4deg);
    }
    100% {
      transform: translate(1px, 1px) rotate(0deg);
    }
  }
`;

const AvatarContainer = styled.div`
  margin-bottom: 2vh;
`;

const ButtonContainer = styled.div`
  margin: 4vh 0;
  align-self: center;
`;

const mapStateToProps = state => ({
  userAvatar: state.userAvatar,
  gameKey: state.gameKey,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  addName: (player, avatar, gameKey, socketType) =>
    dispatch(Actions.addName(player, avatar, gameKey, socketType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
