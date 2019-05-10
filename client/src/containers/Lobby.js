import React from "react";
import CanvasDraw from "../components/CanvasDraw";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import GameHeader from "../components/GameHeader";

export const Lobby = () => {
  return (
    <Wrapper>
      <GameHeader>
        <>ROOM NAME</>
        <Button primary>Start!</Button>
      </GameHeader>
      <CanvasDraw
        brushColor="#fff"
        brushRadius={1}
        catenaryColor="#fff"
        lazyRadius={0}
        backgroundColor="rgba(0,0,0,0.2)"
        gridColor="rgba(0,0,0,0)"
      />
      <Button marginTop onClick={null}>
        Clear Canvas
      </Button>
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

export default Lobby;
