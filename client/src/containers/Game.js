import React, { useEffect, useState } from "react";
import Countdown from "react-countdown-now";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import Canvas from "../components/Canvas";
import GuessingContainer from "../components/GuessingContainer";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerList from "../components/PlayerList";
import SpeechBubble from "../components/SpeechBubble";
import TimeRemaining from "../components/TimeRemaining";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";
import Zorb from "../components/Zorb";
import ZorbContainer from "../components/ZorbContainer";

export const Game = ({ history, game }) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  const opponents = game.players;

  useEffect(() => {
    setTime(Date.now() + 20000);
    if (game.endGame) history.push("/results");
    else if (game.round && count > 0) {
      history.push("/between-rounds");
      setCount(0);
    }
    setCount(1);
  }, [game.endGame, game.round]);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <p>{`Time's up!`}</p>;
    } else {
      return (
        <>
          <h2>{seconds}</h2>
          <p>{" seconds remaining"}</p>
        </>
      );
    }
  };

  const Guessing = props => {
    if (props.guess) {
      return `I see ${props.guess}!`;
    } else {
      return "Thinking...";
    }
  };

  return (
    <Wrapper>
      <WordToDraw>
        Can you draw...
        <h3>{game.word}</h3>
      </WordToDraw>

      <Canvas />
      <GuessingContainer>
        <div>
          <SpeechBubble zorbThinking>
            <Guessing guess={game.guess} />
          </SpeechBubble>
          <ZorbContainer zorbGuessing>
            <Zorb />
          </ZorbContainer>
        </div>

        <TimeRemaining>
          <Countdown date={time} renderer={renderer} />
        </TimeRemaining>
      </GuessingContainer>

      <PlayerList game>
        {opponents &&
          Object.values(opponents).map((player, index) => (
            <PlayerAvatar key={index} info={player} />
          ))}
      </PlayerList>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(Game);
