import React from "react";
import CanvasDraw from "../components/CanvasDraw";
import CanvasDrawButtons from "../components/CanvasDrawButtons";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import GameHeader from "../components/GameHeader";
import Timer from "../components/Timer";
import WordToDraw from "../components/WordToDraw";

export const Game = () => {
  return (
    <>
      <GameHeader>
        <Timer>00:20</Timer>
        <WordToDraw>
          <span role="img" aria-label="Currently Drawing:">
            🎨
          </span>{" "}
          ANIMAL MIGRATION
        </WordToDraw>
      </GameHeader>

      <CanvasDraw
        brushColor="#fff"
        brushRadius={1}
        catenaryColor="#fff"
        lazyRadius={0}
        backgroundColor="rgba(0,0,0,0.2)"
        gridColor="rgba(0,0,0,0)"
      />
      <CanvasDrawButtons />
      <PlayerList>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Concerned&skinColor=Brown" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=WinkWacky&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Prescription01&hatColor=Red&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Yellow" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Prescription02&hatColor=Pink&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerShirt&clotheColor=White&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=DarkBrown" />
        </PlayerListItem>
      </PlayerList>
    </>
  );
};

export default Game;
