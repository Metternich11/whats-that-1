import React from "react";

// Redux Imports

// Component & Container Imports
import Button from "../components/Button";
import GameWinner from "../components/GameWinner";
import ImageCarousel from "../components/ImageCarousel";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import SingleDrawing from "../components/SingleDrawing";
import TestVG from "../components/TestVG";
import Wrapper from "../components/Wrapper";

export const Results = () => {
  return (
    <Wrapper>
      <PlayerList>
        <PlayerListItem>
          <GameWinner />
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
      </PlayerList>
      <ImageCarousel>
        <SingleDrawing>
          <TestVG />
          <p>Username: Lulu</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Username: Lala</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Username: Lili</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Username: Lolo</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Username: Lyly</p>
        </SingleDrawing>
      </ImageCarousel>
      <Button>Play Again</Button>
    </Wrapper>
  );
};

export default Results;
