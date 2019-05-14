import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown-now';

// Redux Imports
import { connect } from 'react-redux';

// Component & Container Imports
import ArtistDetails from '../components/ArtistDetails';
import AvatarShelf from '../components/AvatarShelf';
import DrawingStack from '../components/DrawingStack';
import GameHeader from '../components/GameHeader';
import GameName from '../components/GameName';
import PlayerAvatar from '../components/PlayerAvatar';
import PlayerHasSolvedRound from '../components/PlayerHasSolvedRound';
import PlayerList from '../components/PlayerList';
import PlayerListItem from '../components/PlayerListItem';
import PolaroidPicBackground from '../components/PolaroidPicBackground';
import SingleDrawing from '../components/SingleDrawing';
import SpeechBubble from '../components/SpeechBubble';
import TestVG from '../components/TestVG';
import WordToDraw from '../components/WordToDraw';
import Wrapper from '../components/Wrapper';

export const BetweenRounds = ({ history, game, props }) => {
  // const opponents = props.beAvatar;
  // opponents && console.log('inbetween', opponents);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      if (game.word) history.push('/game');
      setCount(0);
    }
    setCount(1);
  }, [game.word]);

  const renderer = ({ seconds }) => {
    return <span> {seconds} </span>;
  };

  return (
    <Wrapper>
      <GameHeader timer>
        <GameName timer betweenRounds>
          Next Round...{' '}
          <Countdown date={Date.now() + 4000} renderer={renderer} />
        </GameName>
        <WordToDraw>
          Drawing: <strong>Hurricane</strong>
        </WordToDraw>
      </GameHeader>
      <DrawingStack>
        <SingleDrawing>
          <PolaroidPicBackground>
            <TestVG />
          </PolaroidPicBackground>
          <ArtistDetails scaled>
            <SpeechBubble inGame>I drew that!</SpeechBubble>
            <PlayerAvatar />
          </ArtistDetails>
        </SingleDrawing>
      </DrawingStack>

      <PlayerList betweenRounds>
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
      <AvatarShelf>Your Opponents</AvatarShelf>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(BetweenRounds);
