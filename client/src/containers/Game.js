import React, { useEffect, useState } from 'react';
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

export const Game = ({ history, game }) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now() + 20000);
    if (game.endGame) history.push('/results');
    else if (game.round && count > 0) {
      history.push('/between-rounds');
      setCount(0);
    }
    setCount(1);
  }, [game.endGame, game.round]);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <span>TIME'S UP!!!</span>;
    } else {
      return <span> {seconds} </span>;
    }
  };

  return (
    <Wrapper>
      <GameHeader timer>
        <GameName timer>
          <Countdown date={time} renderer={renderer} />
        </GameName>
        <WordToDraw>
          Drawing: <strong>{game.word}</strong>
        </WordToDraw>
      </GameHeader>

      <Canvas />
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
  game: state.game
});

export default connect(mapStateToProps)(Game);
