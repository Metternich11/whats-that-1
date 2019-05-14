import styled, { css } from "styled-components/macro";

const GameHeader = styled.div`
  align-items: center;
  background-color: #6a43c2;
  color: white;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;

  ${props =>
    props.timer &&
    css`
      justify-content: flex-start;
      padding: 1vh 4vw;
    `}
`;

export default GameHeader;
