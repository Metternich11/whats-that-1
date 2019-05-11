import React from "react";
import Countdown from 'react-countdown-now';

// Redux Imports

// Component & Container Imports
import Canvas from "../components/Canvas";
import GameHeader from "../components/GameHeader";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Timer from "../components/Timer";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";

export const Game = () => {

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <span>TIME'S UP!!!</span>
    } else {
      return <span> {seconds} </span>
    }
  };

  return (
    <Wrapper>
      <GameHeader>
        Time left: <Timer><Countdown date={Date.now() + 20000} renderer={renderer} /></Timer>
        <WordToDraw>
          <span role="img" aria-label="Currently Drawing:">
            🎨
          </span>{" "}
          Hurricane
        </WordToDraw>
      </GameHeader>

      <Canvas />
      <PlayerList>
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
    </Wrapper>
  );
};

export default Game;
