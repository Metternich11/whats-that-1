import React from "react";
import NextRoundCountdown from "../components/NextRoundCountdown";
import DrawingStack from "../components/DrawingStack";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import SingleDrawing from "../components/SingleDrawing";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import TestVG from "../containers/TestVG";
import ArtistDetails from "../containers/ArtistDetails";
import CurrentWord from "../components/CurrentWord";
import PlayerHasSolvedRound from "../components/PlayerHasSolvedRound";

export const BetweenRounds = () => {
  return (
    <>
      <NextRoundCountdown>Next round starts in... 00:04</NextRoundCountdown>
      <DrawingStack>
        <SingleDrawing>
          <PolaroidPicBackground>
            <TestVG />
            <ArtistDetails>
              <PlayerHasSolvedRound />
              <PlayerAvatar
                solo
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Concerned&skinColor=Brown"
              />
              <CurrentWord>Animal Migration</CurrentWord>
            </ArtistDetails>
          </PolaroidPicBackground>
        </SingleDrawing>
      </DrawingStack>
      <PlayerList>
        <PlayerListItem>
          <PlayerHasSolvedRound />
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

export default BetweenRounds;
