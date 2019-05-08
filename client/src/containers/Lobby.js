import React from "react";
import CanvasDraw from "../components/CanvasDraw";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Button from "../components/Button";

export const Lobby = () => {
  return (
    <>
      <p>Room Name</p>
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
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=WinkWacky&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Prescription01&hatColor=Red&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Yellow" />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Concerned&skinColor=Brown" />
        </PlayerListItem>
      </PlayerList>
      <p>
        TODO: Setup https://github.com/fangpenlin/avataaars-generator to
        autogenerate avatars.
      </p>
      <Button primary>Start</Button>
    </>
  );
};

export default Lobby;
