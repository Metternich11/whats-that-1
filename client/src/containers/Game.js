import React, { useEffect, useState } from "react";
import Countdown from "react-countdown-now";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import Canvas from "../components/Canvas";
import GuessingContainer from "../components/GuessingContainer";
import PlayerAvatar from "../components/PlayerAvatar";
import CheckMark from "../components/CheckMark";
import PlayerList from "../components/PlayerList";
import SpeechBubble from "../components/SpeechBubble";
import TimeRemaining from "../components/TimeRemaining";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";
import Zorb from "../components/Zorb";
import ZorbContainer from "../components/ZorbContainer";
import ZorbThinkingContainer from "../components/ZorbThinkingContainer";

export const Game = ({ history, game, currentUser }) => {
  const [count, setCount] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [time, setTime] = useState(0);

  const opponents = game.players;

  useEffect(() => {
    setTime(Date.now() + 15000);
    if (game.endGame) history.push("/results");
    else if (game.endRound && count > 0) {
      history.push("/between-rounds");
      setCount(0);
    }
    setCount(1);
  }, [game.endGame, game.endRound]);

  useEffect(() => {
    let win;
    if (game.rounds && count > 0) {
      win = game.rounds
        .filter(round => {
          return round.roundNum === game.round;
        })
        .map(el => el.winners);

      if (win.flat().includes(currentUser.userId)) {
        history.push("/guessed-correctly");
        win = null;
        setGuessCount(0);
      }
    }
    setGuessCount(1);
  }, [game.rounds]);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <p>{`Time's up!`}</p>;
    } else {
      return (
        <>
          <h2>{seconds}</h2>
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
        <h1>{game.word}</h1>
      </WordToDraw>

      <Canvas />

      <GuessingContainer>
        <ZorbThinkingContainer>
          <ZorbContainer zorbGuessing>
            <Zorb />
          </ZorbContainer>
          <SpeechBubble zorbThinking>
            <Guessing guess={game.guess} />
          </SpeechBubble>
        </ZorbThinkingContainer>

        <TimeRemaining>
          <Countdown date={time} renderer={renderer} />
        </TimeRemaining>
      </GuessingContainer>

      <PlayerList game mobile>
        {opponents &&
          Object.values(opponents).map((player, index) => {
            if (
              game.rounds[game.round - 1] &&
              game.rounds[game.round - 1].winners.includes(player.playerId)
            ) {
              return (
                <div key={player.playerId}>
                  <CheckMark key={index} />
                  <h3>{player.playerName}</h3>
                </div>
              );
            } else {
              return (
                <div key={player.playerId}>
                  <PlayerAvatar key={index} info={player} />
                  <h3>{player.playerName}</h3>
                </div>
              );
            }
          })}
      </PlayerList>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  game: state.game,
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Game);
