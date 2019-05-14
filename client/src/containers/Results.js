import React, { Fragment, useState } from 'react';

//Animation
import posed from 'react-pose';
import styled from 'styled-components';

// Redux Imports
import { connect } from 'react-redux';

// Test array
import sampleSVGArray from '../utils/quickdrawSvgRender/sampleSVGArray';

// Component & Container Imports
import Button from '../components/Button';
import GameWinner from '../components/GameWinner';
import PlayerList from '../components/PlayerList';
import PlayerListItem from '../components/PlayerListItem';
import PlayerAvatar from '../components/PlayerAvatar';
import Wrapper from '../components/Wrapper';
import ResultsRoundBar from '../components/ResultsRoundBar';
import DrawingWrapper from '../components/DrawingWrapper';

// tried moving this to separate component but it breaks
const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
});

// leaving it here in case we need to apply styles
const DrawnImage = styled.img`
`;
const downArrow = <i className='fas fa-chevron-down'></i>
const rightArrow = <i className='fas fa-chevron-right'></i>

const Results = ({ history }) => {

  // const opponents = props.beAvatar;
  // opponents && console.log('results', opponents);
  
  const [open, setOpen] = useState(false);
  
  const playAgain = () => {
    history.push('/lobby');
  }

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

      <Fragment>
        {sampleSVGArray.map((object, i) => (
          <ResultsRoundBar key={i} onClick={() => setOpen(open === i ? false : i)}>

            <div>{object.round} {open === i ? downArrow : rightArrow}</div>

            <Content className='content' pose={open === i ? 'open' : 'closed'} style={{ overflow: 'hidden', fontSize: '18px' }}>
              <DrawingWrapper>
                {object.drawings.map((svg, i) =>
                  <SimpleSvg key={i} image={svg} />
                )}
              </DrawingWrapper>
            </Content>
          </ResultsRoundBar>
        ))}
      </Fragment>
      <Button marginTop onClick={playAgain}>Play Again</Button>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  game: state.game
});

function SimpleSvg (props) {
  const encodedImage = btoa(props.image);
  const imageSrc = `data:image/svg+xml;base64,${encodedImage}`;
  return <DrawnImage src={imageSrc} style={{ width: '50%', height: '50%' }} />;
}

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
)(Results);
