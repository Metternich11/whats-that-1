import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import SingleDrawing from "../components/SingleDrawing";
import TestVG from "./TestVG";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Button from "../components/Button";
import GameWinner from "../components/GameWinner";

export const Results = () => {
  return (
    <>
      <PlayerList>
        <PlayerListItem>
          <GameWinner />
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Concerned&skinColor=Brown" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=WinkWacky&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned" />
        </PlayerListItem>
      </PlayerList>
      <ImageCarousel>
        <SingleDrawing>
          <TestVG />
          <p>Lulu</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Lala</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Lili</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Lolo</p>
        </SingleDrawing>
        <SingleDrawing>
          <TestVG />
          <p>Lyly</p>
        </SingleDrawing>
      </ImageCarousel>
      <Button>Play Again</Button>
    </>
  );
};

export default Results;
