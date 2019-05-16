import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import Wrapper from "../components/Wrapper";
import SpeechBubble from "../components/SpeechBubble";
import Zorb from "../components/Zorb";
import ZorbContainer from "../components/ZorbContainer";

import CheckMark from "../components/CheckMark";
import PlayerList from "../components/PlayerList";
import PlayerAvatar from "../components/PlayerAvatar";

export const GuessedCorrectly = ({ history, game }) => {
  const [count, setCount] = useState(0);

  const opponents = game.players;

  useEffect(() => {
    if (count > 0) {
      if (game.endGame) {
        history.push("/results");
        setCount(0);
    }
      else if (game.endRound) {
        history.push("/between-rounds");
        setCount(0);
    }
  }
   setCount(1)
}, [game.endRound, game.endGame]);

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
      <PlayerList game>
        {opponents &&
          Object.values(opponents).map((player, index) => {
            if (game.rounds[game.round-1] && game.rounds[game.round-1].winners.includes(player.playerId)) {
              return (
                <div key={player.playerId}>
                  <CheckMark key={index}/>
                  <h3>{player.playerName}</h3>
                </div>
              )
            }
            else {
              return (
                <div key={player.playerId}>
                  <PlayerAvatar key={index} info={player} />
                  <h3>{player.playerName}</h3>
                </div>
              )
            } 
        })}
      </PlayerList>

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
