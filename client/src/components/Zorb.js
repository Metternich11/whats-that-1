import React from "react";
import styled from "styled-components";
import { ReactComponent as ZorbSVG } from "./Zorb.svg";

const ZorbContainer = styled.div`
  height: 213.33px;
  margin-top: 4vh;
  width: 100px;
`;

const Zorb = () => {
  return (
    <ZorbContainer>
      <ZorbSVG />
    </ZorbContainer>
  );
};

export default Zorb;
