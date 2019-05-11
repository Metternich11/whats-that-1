import React from "react";

// Redux Imports

// Component & Container Imports
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Wrapper from "../components/Wrapper";

export const ComponentsCatalogue = () => {
  return (
    <>
      <Wrapper>
        <div className="divider">
          <h2>Canvas</h2>
          <Canvas />
        </div>
        <div className="divider">
          <h2>Buttons</h2>
          <Button>default</Button>
          <Button primary>primary</Button>
          <Button gradient>Gradient</Button>
        </div>
        <div className="divider">
          <h2>NavBar</h2>
        </div>
        <div className="divider">
          <h2>Player List & Player List Item</h2>
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
        </div>
      </Wrapper>
    </>
  );
};

export default ComponentsCatalogue;
