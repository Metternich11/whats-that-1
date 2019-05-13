import styled, { css } from "styled-components/macro";

const GameName = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: #472c81;
  display: flex;
  font-size: 1.4rem;
  font-weight: bold;
  justify-content: center;
  min-height: 40px;
  width: 100%;

  ${props =>
    props.lobby &&
    css`
      border-radius: 0px;
      justify-content: flex-start;
      padding-left: 4vw;
    `}
  ${props =>
    props.timer &&
    css`
      width: 25%
      font-size: 1rem;
    `}
    ${props =>
      props.betweenRounds &&
      css`
        width: 100%;
      `}
`;

export default GameName;
