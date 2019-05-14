import React, { useEffect } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

// Component & Container Imports
import AvatarShelf from '../components/AvatarShelf';
import Button from '../components/Button';
import Canvas from '../components/Canvas';
import GameHeader from '../components/GameHeader';
import PlayerAvatar from '../components/PlayerAvatar';
import PlayerList from '../components/PlayerList';
import PlayerListItem from '../components/PlayerListItem';
import Wrapper from '../components/Wrapper';

export const Lobby = props => {
  const startGame = () => {
    props.startGame();
  };

  useEffect(() => {
    if (props.game.word) props.history.push('/game');
  }, [props.game.word]);

  return (
    <Wrapper>
      <GameHeader>
        <h2 className='gameHeader'>{props.gameKey}</h2>
        {props.isCreator === 'createGame' ? (
          <Button primary onClick={startGame}>
            {' '}
            Start!{' '}
          </Button>
        ) : (
          ''
        )}
      </GameHeader>
      <p>Practice drawing whilst waiting...</p>

      <Canvas />
      <p>Waiting for other players...</p>
      <PlayerList>
        <PlayerListItem>
          <PlayerAvatar info={props.beAvatar} />
        </PlayerListItem>
      </PlayerList>
      <AvatarShelf>Your Opponents</AvatarShelf>
      {props.isCreator === 'createGame' ? (
        <Button primary onClick={startGame}>
          {' '}
          Start!{' '}
        </Button>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  userAvatar: state.game.userAvatar, ///CAUTION, SUBJECT TO CHANGE
  gameKey: state.game.gameKey,
  beAvatar: state.game.players, /// This too
  isCreator: state.game.isCreator,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(Actions.startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
