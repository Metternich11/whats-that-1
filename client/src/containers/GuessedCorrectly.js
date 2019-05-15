import React, { useEffect, useState } from "react";
import Countdown from "react-countdown-now";
import styled from "styled-components/macro";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import TimeRemaining from "../components/TimeRemaining";
import Wrapper from "../components/Wrapper";
import SpeechBubble from "../components/SpeechBubble";
import Zorb from "../components/Zorb";
import ZorbContainer from "../components/ZorbContainer";

export const GuessedCorrectly = ({ history, game }) => {
  const [count, setCount] = useState(0);

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
    <Wrapper GuessedCorrectly>
      <SpeechBubble inGame>Great drawing speedy!</SpeechBubble>
      <ZorbContainer>
        <Zorb />
      </ZorbContainer>
      <StyledText>
        <p>
          You made that one <strong>easy</strong> for me to guess. Just waiting
          for your opponents to finish...
        </p>
      </StyledText>

      <TimeRemaining>
        <h2>
          <Countdown date={Date.now() + 4000} renderer={renderer} />
        </h2>{" "}
        seconds left until the round ends.
      </TimeRemaining>
    </Wrapper>
  );
};

const StyledText = styled.div`
  padding: 0 40px;
  color: #472c81;

  p {
    font-size: 1.4rem;
    font-weight: 200;
  }
`;

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(GuessedCorrectly);
