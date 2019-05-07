import React from "react";
import DrawingArea from "../components/DrawingArea";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Button from "../components/Button";

export const Lobby = () => {
  return (
    <>
      <DrawingArea />
      <Button>Clear Canvas</Button>
      <PlayerList>
        <PlayerListItem />
      </PlayerList>
      <Button>Start</Button>
    </>
  );
};

export default Lobby;
