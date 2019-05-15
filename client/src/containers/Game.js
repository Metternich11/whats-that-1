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

export const Game = ({ history, game, currentUser }) => {
  const [count, setCount] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [time, setTime] = useState(0);

  const opponents = game.players;

  useEffect(() => {
    setTime(Date.now() + 20000);
    if (game.endGame) history.push("/results");
    else if (game.round && count > 0) {
      console.log('I TRY TO GO TO BETWEEN ROUNDS NOW FROM GAME')
      history.push("/between-rounds");
      setCount(0);
    }
    setCount(1);
  }, [game.endGame, game.round]);

  useEffect(() => {
    let win;
    if (game.rounds && count > 0) {
      game.rounds.forEach(round => {
        console.log('I AM GOING TO GUESS AGAIN FROM GAME')
        win = round.winners.includes(currentUser.userId)
        if (win) {
          history.push('/guessed-correctly');
          win = null;
          setGuessCount(0);
        }
        console.log('WIIIIIIIIIIN', win)
      })
      }
      setGuessCount(1) 
  }, [game.rounds])

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
        <div style={{ width: "80%" }}>
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
  game: state.game,
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Game);
