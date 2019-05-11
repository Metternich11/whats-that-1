import React from "react";

// Redux Imports

// Component & Container Imports
import Button from "../components/Button";
import GameWinner from "../components/GameWinner";
import ImageCarousel from "../components/ImageCarousel";
import PlayerList from "../components/PlayerList";
import PlayerListItem from "../components/PlayerListItem";
import PlayerAvatar from "../components/PlayerAvatar";
import SingleDrawing from "../components/SingleDrawing";
import Wrapper from "../components/Wrapper";
import sampleSVGArray from '../utils/quickdrawSvgRender/sampleSVGArray';

export const Results = () => {
  return (
    <Wrapper>
      <PlayerList>
        <PlayerListItem>
          <GameWinner />
          <PlayerAvatar />
        </PlayerListItem>
        <PlayerListItem>
          <PlayerAvatar />
        </PlayerListItem>
      </PlayerList>
      <ImageCarousel>
        {sampleSVGArray.map((svg, index) =>
          <SimpleSvg image={svg} key={index} />
        )}
      </ImageCarousel>
      <Button>Play Again</Button>
    </Wrapper>
  );
};

function SimpleSvg (props) {
  const encodedImage = btoa(props.image);
  const imageSrc = `data:image/svg+xml;base64,${encodedImage}`;
  return <img src={imageSrc} style={{ height: '375px', width: '375px', border: '1px solid purple', margin: '0 5px 0 0' }} />;
}

export default Results;
