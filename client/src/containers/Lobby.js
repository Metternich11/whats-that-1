import React, { useEffect } from "react";
import styled from "styled-components/macro";

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
import DeviceDetector from "../utils/deviceDetector";

const host = window.location.protocol + "//" + window.location.host;

const ShareIcon = styled.i`
  margin-top: 20px;
  font-size: 2em;
`;

const ShareButton = ({ url }) => {
  if (typeof window.navigator.share !== "function") return null;

  const share = () => {
    if (typeof window.navigator.share === "function") {
      window.navigator.share({ url });
    }
  };

  let icon = DeviceDetector.isAndroid() ? "fa-share-alt" : "fa-share-square";

  return <ShareIcon onClick={share} className={`fas ${icon}`} />;
};

export const Lobby = ({ currentUser, game, startGame, history }) => {
  const startTheGame = () => {
    startGame();
  };

  const shareUrl = `${host}/${currentUser.gameKey}`;

  const opponents = game.players;

  useEffect(() => {
    if (game.word.length) history.push("/game");
  }, [game.word]);

  return (
    <Wrapper>
      <GameHeader>
        <h2 className="gameHeader">{currentUser.gameKey}</h2>
        {currentUser.isCreator === "createGame" ? (
          <Button primary noMargin onClick={startTheGame}>
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
            .filter(player => player.playerId !== currentUser.userId)
            .map((player, index) => <PlayerAvatar key={index} info={player} />)}
      </PlayerList>
      <ShareButton url={shareUrl} />
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
