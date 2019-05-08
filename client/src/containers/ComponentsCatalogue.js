import React from "react";
import Button from "../components/Button";
import Main from "../containers/Main";
import NavBar from "../components/NavBar";
import CanvasDraw from "../components/CanvasDraw";
import CanvasDrawButtons from "../components/CanvasDrawButtons";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Create from "./Create";

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
        <h2>Main</h2>
        <Main />
      </div>
      <div className="divider">
        <h2>Input fields</h2>
        <Create />
      </div>
      <div className="divider">
        <h2>Drawing Area</h2>
        <CanvasDraw
          brushColor="#fff"
          brushRadius={1}
          catenaryColor="#fff"
          lazyRadius={0}
          backgroundColor="rgba(0,0,0,0.2)"
          gridColor="rgba(0,0,0,0)"
        />
        <CanvasDrawButtons />
      </div>
      <div className="divider">
        <h2>Player List & Player List Item</h2>
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
      </div>
    </>
  );
};

export default ComponentsCatalogue;
