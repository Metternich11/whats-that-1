import React from "react";
import Canvas from "../components/Canvas";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import GameHeader from "../components/GameHeader";
import Timer from "../components/Timer";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";

export const Game = () => {
  return (
    <Wrapper>
      <GameHeader>
        <Timer>00:20</Timer>
        <WordToDraw>
          <span role="img" aria-label="Currently Drawing:">
            🎨
          </span>{" "}
          ANIMAL MIGRATION
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
