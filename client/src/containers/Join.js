import React, { useState } from "react";
import { connect } from "react-redux";
import * as Actions from '../redux/actions/index'

import Button from "../components/Button";
import FormField from "../components/FormField";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";

const Join = (props) => {

  const [ playerName, setPlayerName ] = useState('');
  const [ game, setGame ] = useState('');

  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };

  const handleGameName = event => {
    const value = event.target.value;
    setGame(value);
  };

  const submitAndConnect = (e) => {
    e.preventDefault();
    props.addName(playerName, props.userAvatar, game, 'Join');
    props.history.push('/lobby');
  }

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <Wrapper>
      <Button onClick={goBack}>Go Back</Button>
      <form onSubmit={submitAndConnect}>
        <FormField>
          <FormLabel>Your Avatar: </FormLabel>
          <PlayerAvatar />
        </FormField>
        <FormField>
          <FormLabel>Enter your name: </FormLabel>
          <InputField type="text" name="name" onChange={handlePlayerName} />
        </FormField>
        <FormField>
          <FormLabel>Enter Game Name: </FormLabel>
          <InputField type="text" name="gameName" onChange={handleGameName} />
        </FormField>
          <Button primary marginTop type="submit">
            Join
          </Button>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  userAvatar: state.userAvatar,
  gameKey: state.gameKey
});

const mapDispatchToProps = dispatch => ({
  addName: (player, avatar, gameKey, socketType) => dispatch(Actions.addName(player, avatar, gameKey, socketType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join); 

