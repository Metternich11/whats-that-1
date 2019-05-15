import styled, { css } from "styled-components/macro";

const PlayerList = styled.div`
  align-items: flex-end;
  justify-content: space-around;
  display: flex;
  width: 100%;

  @media (min-width: 375px) {
    max-width: 375px;
  }

  ${props =>
    props.betweenRounds &&
    css`
      margin-top: -50px;
    `};
`;

export default PlayerList;
