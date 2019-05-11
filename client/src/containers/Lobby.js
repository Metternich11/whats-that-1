import React from "react";

// Redux Imports
import { connect } from "react-redux";

// Component & Container Imports
import Button from "../components/Button";
import Canvas from "../components/Canvas";
import GameHeader from "../components/GameHeader";
import GameName from "../components/GameName";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import Wrapper from "../components/Wrapper";

export const Lobby = props => {
  const startGame = () => {
    props.history.push("/game");
  };

  return (
    <Wrapper lessPadding>
      <GameHeader>
        <GameName lobby>Wild-Winter</GameName>
        <Button primary onClick={startGame}>
          Start!
        </Button>
      </GameHeader>

      <Canvas />
      <PlayerList>
        <PlayerListItem>
          <PlayerAvatar info={props.beAvatar} />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
      </PlayerList>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  userAvatar: state.userAvatar,
  gameKey: state.gameKey,
  beAvatar: state.message
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
