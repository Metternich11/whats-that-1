import React from "react";

// Redux Imports

// Component & Container Imports
import ArtistDetails from "../containers/ArtistDetails";
import CurrentWord from "../components/CurrentWord";
import DrawingStack from "../components/DrawingStack";
import NextRoundCountdown from "../components/NextRoundCountdown";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerHasSolvedRound from "../components/PlayerHasSolvedRound";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import SingleDrawing from "../components/SingleDrawing";
import SpeechBubble from "../components/SpeechBubble";
import TestVG from "../containers/TestVG";
import Wrapper from "../components/Wrapper";

export const BetweenRounds = () => {
  return (
    <Wrapper lessPadding>
      <NextRoundCountdown>Next round starts in... 00:04</NextRoundCountdown>
      <CurrentWord>Hurricane</CurrentWord>
      <DrawingStack>
        <SingleDrawing>
          <PolaroidPicBackground>
            <TestVG />
          </PolaroidPicBackground>
          <ArtistDetails>
            <SpeechBubble inGame>I drew that!</SpeechBubble>
            <PlayerAvatar solo />
          </ArtistDetails>
        </SingleDrawing>
      </DrawingStack>
      <PlayerList>
        <PlayerListItem>
          <PlayerHasSolvedRound />
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
    </Wrapper>
  );
};

export default BetweenRounds;
