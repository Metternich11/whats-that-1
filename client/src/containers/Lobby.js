import React, { useEffect } from "react";

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Component & Container Imports
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import GameHeader from "../components/GameHeader";
import LobbyWaiting from "../components/LobbyWaiting";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerEmptySlot from "../components/PlayerEmptySlot";
import PlayerList from "../components/PlayerList";
import Wrapper from "../components/Wrapper";

export const Lobby = props => {
  const startGame = () => {
    props.startGame();
  };

  const opponents = props.game.players;

  useEffect(() => {
    if (props.game.word.length) props.history.push("/game");
  }, [props.game.word]);

  return (
    <Wrapper>
      <GameHeader>
        <h2 className="gameHeader">{props.currentUser.gameKey}</h2>
        {props.currentUser.isCreator === "createGame" ? (
          <Button primary noMargin onClick={startGame}>
            {" "}
            Start!{" "}
          </Button>
        ) : (
          ""
        )}
      </GameHeader>
      <h3>Practice your drawing skills!</h3>

      <Canvas />
      <LobbyWaiting>
        <p>Waiting for other players...</p>
      </LobbyWaiting>

      <PlayerList>
        {opponents &&
          Object.values(opponents)
            .filter(player => player.playerId !== props.currentUser.userId)
            .map((player, index) => <PlayerAvatar key={index} info={player} />)}
        <PlayerEmptySlot />
        <PlayerEmptySlot />
        <PlayerEmptySlot />
        <PlayerEmptySlot />
      </PlayerList>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(Actions.startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
