import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as Actions from '../redux/actions/index'

import Button from "../components/Button";
import FormField from "../components/FormField";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";


function Create (props) {
  const [ playerName, setPlayerName ] = useState('');
  
  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };
  
  const submitName = (e) => {
    e.preventDefault();
    props.addName(playerName, props.gameKey);
  };

  return (
    <Wrapper>
      <form onSubmit={submitName}>
        <FormField>
          <FormLabel>Your Avatar: </FormLabel>
          <PlayerAvatar />
        </FormField>
        <FormField>
          <FormLabel>Enter your name: </FormLabel>
          <InputField type="text" name="name" onChange={handlePlayerName} />
        </FormField>
        <FormField>
          <FormLabel>Game Name: </FormLabel>
          <GameName>{props.gameKey}</GameName>
        </FormField>
        <Button primary marginTop type="submit">
          Create
        </Button>
      </form>
    </Wrapper>
  );
}

const GameName = styled.div`
  color: #472c81;
  background-color: white;
  margin: 10px;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  width: 100%;
`;

const mapStateToProps = state => ({
  gameKey: state.gameKey,
});

const mapDispatchToProps = dispatch => ({
  addName: (player, gameKey) => dispatch(Actions.addName(player, gameKey)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create); 