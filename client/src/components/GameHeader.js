import styled, { css } from "styled-components/macro";

const GameHeader = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 0 0 2vh 0;
  padding: 1vh 0;
  width: 100%;

  ${props =>
    props.timer &&
    css`
      justify-content: flex-start;
      padding: 1vh 4vw;
    `}
`;

export default GameHeader;
