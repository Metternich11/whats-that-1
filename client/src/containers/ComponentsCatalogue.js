import React from "react";

// Redux Imports

// Component & Container Imports
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerListItem from "../components/PlayerListItem";
import PlayerList from "../components/PlayerList";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import Wrapper from "../components/Wrapper";
import Modal from "../components/Modal";

export const ComponentsCatalogue = () => {
  return (
    <>
      <Wrapper>
        <div className="divider">
          <h2>TestModal</h2>
          <Modal />
        </div>
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
        <div className="divider">
          <h2>Polaroid Pic Background</h2>
          <PolaroidPicBackground />
        </div>
      </Wrapper>
    </>
  );
};

export default ComponentsCatalogue;
