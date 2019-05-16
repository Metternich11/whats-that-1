import React, {useState, useEffect, useRef} from 'react';

// Redux Imports
import {connect} from 'react-redux';
import * as Actions from '../redux/actions/index';

// Component & Container Imports
import AvatarContainer from '../components/AvatarContainer';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import Form from '../components/Form';
import FormLabel from '../components/FormLabel';
import InputField from '../components/InputField';
import PlayerAvatar from '../components/PlayerAvatar';
import SpeechBubble from '../components/SpeechBubble';
import Wrapper from '../components/Wrapper';

// Util imports
import generateAvatarProps from "../utils/generateAvatarProps";


const Join = ({game, pages, connectGame, history, currentUser}) => {
  const [playerName, setPlayerName] = useState('');
  const [gameKey, setGameKey] = useState('');
  const [userChoice, setUserChoice] = useState("");
  const joinForm = useRef();
  const gameKeyInput = useRef();

  useEffect(() => {
    if (game.players) history.push('/lobby');
  }, [game]);

  useEffect(() => {
    if (pages.join.error) {
      gameKeyInput.current.setCustomValidity('Game code does not exist');
      gameKeyInput.current.reportValidity();
    }
  }, [pages.join]);

  const handlePlayerName = event => {
    const value = event.target.value;
    setPlayerName(value);
  };

  const handleGameName = event => {
    const value = event.target.value;
    setGameKey(value);
    gameKeyInput.current.setCustomValidity('');
  };

  const submitAndConnect = e => {
    e.preventDefault();
    connectGame(playerName, currentUser.userAvatar, gameKey, 'joinGame');
  };

  const goBack = () => {
    history.goBack();
  };

  const refreshAvatar = (e) => {
    e.preventDefault();
    let props = generateAvatarProps();
    setUserChoice(props);
  }

  return (
    <Wrapper>
      <Form onSubmit={submitAndConnect} ref={joinForm}>
        <FormLabel>Your Avatar</FormLabel>
        <SpeechBubble inGame>Looking good!</SpeechBubble>
        <div>
          <AvatarContainer
            style={{transform: 'scale(2.5)', marginTop: '2vh'}}
          >
            <PlayerAvatar userChoice={userChoice} />
          </AvatarContainer>
        </div>
        <Button refresh onClick={refreshAvatar}>
          <i className='fas fa-sync-alt' />
        </Button>
        <FormLabel>Name</FormLabel>
        <InputField
          type='text'
          name='name'
          onChange={handlePlayerName}
          required
          maxLengthf="28"
        />

        <FormLabel>Enter Game ID:</FormLabel>
        <InputField
          type='text'
          name='gameName'
          onChange={handleGameName}
          ref={gameKeyInput}
          required
        />

        <ButtonContainer>
          <Button primary formButton type='submit'>
            Join
          </Button>
          <p className='small lightweight'>or</p>
          <Button back marginBottom onClick={goBack}>
            Back
          </Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    game: state.game,
    pages: state.pages,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = {connectGame: Actions.connectGame};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);
