import React from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import CanvasDraw from "../components/CanvasDraw";
import CanvasDrawButtons from "../components/CanvasDrawButtons";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";

export const ComponentsCatalogue = () => {
  return (
    <>
      <div className="divider">
        <h2>Buttons</h2>
        <Button>default</Button>
        <Button primary>primary</Button>
        <Button secondary>secondary</Button>
      </div>
      <div className="divider">
        <h2>NavBar</h2>
        <NavBar>Logo and name</NavBar>
      </div>
      <div className="divider">
        <h2>Input fields</h2>
        <p>Coming Soon</p>
      </div>
      <div className="divider">
        <h2>Drawing Area</h2>
        <CanvasDraw
          brushColor="#fff"
          brushRadius="1"
          catenaryColor="#fff"
          lazyRadius="0"
          backgroundColor="rgba(0,0,0,0.2)"
          gridColor="rgba(0,0,0,0)"
        />
        <CanvasDrawButtons />
      </div>
      <div className="divider">
        <h2>Player List & Player List Item</h2>
        <PlayerList>
          <PlayerListItem />
        </PlayerList>
      </div>
    </>
  );
};

export default ComponentsCatalogue;
