import React from "react";
import CanvasDraw from "../components/CanvasDraw";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Button from "../components/Button";

export const Lobby = () => {
  return (
    <>
      <p>Room Name</p>
      <CanvasDraw />
      <Button onClick={null}>Clear Canvas</Button>
      <PlayerList>
        <PlayerListItem />
      </PlayerList>
      <p>
        TODO: Setup https://github.com/fangpenlin/avataaars-generator to
        autogenerate avatars.
      </p>
      <Button>Start</Button>
    </>
  );
};

export default Lobby;
