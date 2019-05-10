import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import SingleDrawing from "../components/SingleDrawing";
import TestVG from "./TestVG";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Button from "../components/Button";
import GameWinner from "../components/GameWinner";
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
