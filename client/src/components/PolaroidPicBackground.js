import styled from "styled-components";

// Utils import
import generatePicRotateDegree from "../utils/generatePicRotateDegree";

const rotationDegree = `rotate(${generatePicRotateDegree()}deg)`;

const PolaroidPicBackground = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 51px 3px rgba(0, 0, 0, 0.2);
  color: #000;
  height: 375px;
  width: 375px;
  transform: ${rotationDegree};

  transition: 75ms linear all;
`;

export default PolaroidPicBackground;
