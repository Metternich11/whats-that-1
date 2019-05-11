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
        <p>Your Avatar</p>
        <PlayerAvatar />
        <FormLabel>Name:</FormLabel>
        <InputField
          type="text"
          name="name"
          onChange={handlePlayerName}
          required
        />

        <FormLabel>Game:</FormLabel>
        <GameName>{props.loading ? "Loading..." : props.gameKey}</GameName>

        <Button primary marginTop form type="submit">
          Create
        </Button>
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
