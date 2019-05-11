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
    props.addName(playerName, props.userAvatar, props.gameKey, "createGame");
    props.history.push("/lobby"); //not sure about this line, maybe ask Arol
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <Wrapper>
      <Button back marginBottom onClick={goBack}>
        Back
      </Button>
      <Form onSubmit={submitName}>
        <p>Your Avatar</p>
        <PlayerAvatar />
        <FormLabel>Name:</FormLabel>
        <InputField type="text" name="name" onChange={handlePlayerName} required />

        <FormLabel>Game:</FormLabel>
        <GameName>{props.loading ? 'Loading...' : props.gameKey}</GameName>

        {/* <Button primary marginTop form type="submit">
          Create
        </Button> */}
      </Form>
    </Wrapper>
  );
}

const GameName = styled.div`
  color: #472c81;
  background-color: white;
  min-height: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 3px;
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
