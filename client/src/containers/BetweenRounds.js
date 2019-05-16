import React, { useEffect, useState, useRef } from "react";
import Countdown from "react-countdown-now";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import DrawingStack from "../components/DrawingStack";
import PlayerAvatar from "../components/PlayerAvatar";
// import PlayerEmptySlot from "../components/PlayerEmptySlot";
import PlayerList from "../components/PlayerList";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import TimeRemaining from "../components/TimeRemaining";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
const DrawnImage = styled.img``;

export const BetweenRounds = ({ history, game, currentUser }) => {
  const [count, setCount] = useState(0);
  const opponents = game.players;
  const countRef = useRef(count);
  countRef.current = count;

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
      <WordToDraw inBetween>
        {/* <h3>{game.word}</h3> */}
        <h2 className="gameHeader">{game.word}</h2>
      </WordToDraw>

      <DrawingStack>
        {/* {game.rounds[game.round - 1] &&
          game.rounds[game.round - 1].drawings.map((drawing, i) => (
            <PolaroidPicBackground key={i}>
              <div key={i}>
                <SimpleSvg image={drawing.svg} />
                <div>
                  <PlayerAvatar info={drawing} />
                  <b>{drawing.playerName}</b> drew that!
                </div>
              </div>
            </PolaroidPicBackground>
          ))} */}
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

function SimpleSvg(props) {
  const encodedImage = btoa(props.image);
  const imageSrc = `data:image/svg+xml;base64,${encodedImage}`;
  return (
    <DrawnImage src={imageSrc} style={{ width: "100%", height: "100%" }} />
  );
}

const mapStateToProps = state => ({
  game: state.game,
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(BetweenRounds);
