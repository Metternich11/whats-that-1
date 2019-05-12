import styled, { css } from "styled-components";

const PlayerList = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;

  ${props =>
    props.betweenRounds &&
    css`
      margin-top: -50px;
    `};
`;

export default PlayerList;
