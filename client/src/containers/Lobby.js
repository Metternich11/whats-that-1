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

export const Lobby = (props) => {
  const startGame = () => {
    props.startGame();
  };

  const opponents = props.game.players;

  useEffect(() => {
    if (props.game.word.length) props.history.push('/game');
  }, [props.game.word]);

  return (
    <Wrapper>
      <GameHeader>
        <h2 className='gameHeader'>{props.currentUser.gameKey}</h2>
        {props.currentUser.isCreator === 'createGame' ? (
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
          {opponents && Object.values(opponents).map((player, index) => <PlayerAvatar key={index} info={player} />)}
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
  currentUser: state.currentUser,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(Actions.startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
