import React from "react";
import { connect } from "react-redux";

import CanvasDraw from "../components/CanvasDraw";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import GameHeader from "../components/GameHeader";

export const Lobby = props => {

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <Wrapper>
      <Button onClick={goBack}>Go Back</Button>
      <GameHeader>
        <>ROOM NAME</>
        <Button primary>Start!</Button>
      </GameHeader>
      <CanvasDraw
        brushColor="#fff"
        brushRadius={1}
        catenaryColor="#fff"
        lazyRadius={0}
        backgroundColor="rgba(0,0,0,0.2)"
        gridColor="rgba(0,0,0,0)"
      />
      <Button marginTop onClick={null}>
        Clear Canvas
      </Button>
      <PlayerList>
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
  gameKey: state.gameKey
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lobby); 
