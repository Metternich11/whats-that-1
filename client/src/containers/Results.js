import React, { Fragment, useState, useEffect } from "react";

//Animation
import posed from "react-pose";
import styled from "styled-components";

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Component & Container Imports
import Button from "../components/Button";
import GameWinner from "../components/GameWinner";
import PlayerList from "../components/PlayerList";
import PlayerAvatar from "../components/PlayerAvatar";
import Wrapper from "../components/Wrapper";
import ResultsRoundBar from "../components/ResultsRoundBar";
import DrawingWrapper from "../components/DrawingWrapper";

// tried moving this to separate component but it breaks
const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

// leaving it here in case we need to apply styles
const DrawnImage = styled.img``;
const downArrow = <i className="fas fa-chevron-down" />;
const rightArrow = <i className="fas fa-chevron-right" />;
//eslint-disable-next-line
const Results = ({ history, restartGame, game }) => {
  const [open, setOpen] = useState(false);
  const players = game.players;
  const allRounds = game.rounds;
  let obj = {};

  allRounds
    .map(round => round.winners)
    .flat()
    .forEach(winner => {
      if (obj[winner] === undefined) obj[winner] = 1;
      else obj[winner]++;
    });

  let score = Math.max(...Object.values(obj));
  let winnerId = [];
  for (let el in obj) {
    if (obj[el] === score) winnerId.push(el);
  }

  useEffect(() => {
    if (game.round === 0) history.push("/lobby");
  }, [game.round]);

  const playAgain = () => {
    restartGame();
  };

  return (
    <Wrapper results>
      <PlayerList>
        {players &&
          Object.values(players).map((player, i) => (
            <div key={i}>
              <PlayerAvatar key={i} info={player} />
              {winnerId.includes(player.playerId) && <GameWinner />}
            </div>
          ))}
      </PlayerList>

      <div>
        <Fragment>
          {allRounds.map((object, i) => (
            <ResultsRoundBar
              key={i}
              onClick={() => setOpen(open === i ? false : i)}
            >
              <div>
                {object.drawings && object.drawings[0].word.toUpperCase()}{" "}
                {open === i ? downArrow : rightArrow}
              </div>

              <Content
                className="content"
                pose={open === i ? "open" : "closed"}
                style={{ overflow: "hidden", fontSize: "18px" }}
              >
                <DrawingWrapper>
                  {object.drawings &&
                    object.drawings.map((drawing, i) => (
                      <div key={i} style={{ width: "50%", height: "50%" }}>
                        <SimpleSvg image={drawing.svg} />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <PlayerAvatar info={drawing} />
                          <b>{drawing.playerName}</b> drew that!
                        </div>
                      </div>
                    ))}
                </DrawingWrapper>
              </Content>
            </ResultsRoundBar>
          ))}
        </Fragment>
      </div>

      <Button marginTop onClick={playAgain}>
        Play Again
      </Button>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

function SimpleSvg(props) {
  const encodedImage = btoa(props.image);
  const imageSrc = `data:image/svg+xml;base64,${encodedImage}`;
  return (
    <DrawnImage src={imageSrc} style={{ width: "100%", height: "100%" }} />
  );
}

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(Actions.restartGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
