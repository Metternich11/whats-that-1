import React, { useEffect } from 'react';
import Countdown from 'react-countdown-now';

// Redux Imports
import { connect } from 'react-redux';

// Component & Container Imports
import AvatarShelf from '../components/AvatarShelf';
import Canvas from '../components/Canvas';
import GameHeader from '../components/GameHeader';
import GameName from '../components/GameName';
import PlayerAvatar from '../components/PlayerAvatar';
import PlayerList from '../components/PlayerList';
import PlayerListItem from '../components/PlayerListItem';
import WordToDraw from '../components/WordToDraw';
import Wrapper from '../components/Wrapper';

export const Game = ({ gameWord, inBetweenRounds, endGame, history, guess }) => {

  useEffect(() => {
    if (inBetweenRounds) history.push('/between-rounds');
    if (endGame) history.push('/results')
    }, [inBetweenRounds, endGame]);


  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <span>TIME'S UP!!!</span>;
    } else {
      return <span> {seconds} </span>;
    }
  };

  const Guessing = (props) => {
    if (props.guess) return (<h2>I see {props.guess}!</h2>)
    else return (<h2></h2>);
  }

  return (
    <Wrapper>
      <GameHeader timer>
        <GameName timer>
          <Countdown date={Date.now() + 20000} renderer={renderer} />
        </GameName>
        <WordToDraw>
          Drawing: <strong>{gameWord}</strong>
        </WordToDraw>
      </GameHeader>

      <Canvas />
      <Guessing guess={guess}/>
      <PlayerList game>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
      </PlayerList>
      <AvatarShelf>Your Opponents</AvatarShelf>
    </Wrapper>
  );
};


const mapStateToProps = state => ({
  gameWord: state.game.word,
  inBetweenRounds: state.game.inBetweenRounds,
  endGame: state.game.endGame,
  guess: state.game.guess
});

export default connect(
  mapStateToProps
)(Game);