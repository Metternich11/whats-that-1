import React, {useState, useEffect} from 'react';
import styled from "styled-components/macro";
import posed from 'react-pose';

// Utils import
import generatePicRotateDegree from "../utils/generatePicRotateDegree";

const Box = posed.div({
  hidden: {
    opacity: 0,
    scale: 1.1,
    rotate: () => (Math.random() * 45) * (Math.random() > .5 ? 1 : -1)
  },
  visible: {
    opacity: 1,
    scale: .6,
    rotate: () => (Math.random() * 5) * (Math.random() > .5 ? 1 : -1)
  }
})

const Polaroid = (props) => {
  const [pose, setPose] = useState('hidden');
  useEffect(() => {
    setTimeout(() => {setPose('visible')}, props.delay);
  }, [])
  return (
    <Box className={props.className} pose={pose}>
      {props.children}
    </Box>
  )
}


const rotationDegree = `rotate(${generatePicRotateDegree()}deg)`;

const PolaroidPicBackground = styled(Polaroid)`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 51px 3px rgba(0, 0, 0, 0.2);
  transform: ${rotationDegree} scale(0.8);
  transform-origin: center;
  transition: 75ms linear all;
  &:hover {
    transform: rotate(1deg) scale(0.8);
  };
  margin-top: -73px;
  margin-left: -37px;
  color: black;
`;

export default PolaroidPicBackground;
