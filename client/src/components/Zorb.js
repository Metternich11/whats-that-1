import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as ZorbSVG } from "./Zorb.svg";

const ZorbContainer = styled.div`
  svg {
    width: 150px;
    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.1));
  }

  .levitate {
    animation: levitate 3s cubic-bezier(0.57, 0.19, 0.25, 0.75) infinite;
    transform-origin: 50% 50%;
  }

  @keyframes levitate {
    from {
      transform: rotate(0deg) translate(-15px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translate(-15px) rotate(-360deg);
    }
  }
`;

const Zorb = () => {
  return (
    <ZorbContainer>
      <ZorbSVG />
    </ZorbContainer>
  );
};

export default Zorb;
