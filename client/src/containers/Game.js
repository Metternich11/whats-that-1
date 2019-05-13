import React from 'react';
import Countdown from 'react-countdown-now';

// Redux Imports

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

export const Game = () => {
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
          <Countdown date={Date.now() + 20000} renderer={renderer} />
        </GameName>
        <WordToDraw>
          Drawing: <strong>Hurricane</strong>
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

export default Game;
