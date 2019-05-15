import React, { useEffect, useState } from "react";
import Countdown from "react-countdown-now";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import DrawingStack from "../components/DrawingStack";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerEmptySlot from "../components/PlayerEmptySlot";
import PlayerList from "../components/PlayerList";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import TimeRemaining from "../components/TimeRemaining";
import TestVG from "../components/TestVG";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";

export const BetweenRounds = ({ history, game, currentUser }) => {
  const [count, setCount] = useState(0);
  const opponents = game.players;
  console.log('BetweenRounds game: ', game); // eslint-disable-line
  console.log('BetweenRounds roundDrawings: ', game.roundDrawings); // eslint-disable-line
  const roundDrawings = game.roundDrawings;

  useEffect(() => {
    if (count > 0) {
      if (game.word) history.push("/game");
      setCount(0);
    }
    setCount(1);
  }, [game.word]);

  const renderer = ({ seconds }) => {
    return <span> {seconds} </span>;
  };

  return (
    <Wrapper>
      {console.log('in between rounds', game)}
      <WordToDraw inBetween>
        {/* <h3>{game.word}</h3> */}
        <h2 className="gameHeader">Test</h2>
      </WordToDraw>

      <DrawingStack>
        <PolaroidPicBackground>
          <TestVG />
        </PolaroidPicBackground>
      </DrawingStack>

      <PlayerList betweenRounds>
        {opponents &&
          Object.values(opponents)
            .filter(player => player.playerId !== currentUser.userId)
            .map((player, index) => <PlayerAvatar key={index} info={player} />)}
      </PlayerList>

      <TimeRemaining>
        Next round starts in{" "}
        <Countdown date={Date.now() + 4000} renderer={renderer} /> seconds
      </TimeRemaining>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  game: state.game,
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(BetweenRounds);
