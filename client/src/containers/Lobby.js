import React from "react";

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Component & Container Imports
import AvatarShelf from "../components/AvatarShelf";
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import GameHeader from "../components/GameHeader";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Wrapper from "../components/Wrapper";

export const Lobby = props => {
  const startGame = () => {
    props.startGame();
    props.history.push("/game");
  };

  return (
    <Wrapper>
      <GameHeader>
        <h2 className="gameHeader">Wild-Winter</h2>
      </GameHeader>
      <p>Practice drawing whilst waiting...</p>

      <Canvas />
      <p>Waiting for other players...</p>
      <PlayerList>
        <PlayerListItem>
          <PlayerAvatar info={props.beAvatar} />
        </PlayerListItem>
      </PlayerList>
      <AvatarShelf>Your Opponents</AvatarShelf>
      {props.isCreator === "createGame" ? (
        <Button primary onClick={startGame}>
          {" "}
          Start!{" "}
        </Button>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  userAvatar: state.userAvatar,
  gameKey: state.gameKey,
  beAvatar: state.message,
  isCreator: state.isCreator
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(Actions.startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
