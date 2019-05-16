import styled, { css } from "styled-components/macro";

const TimeRemaining = styled.span`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }

  h2 {
    margin: -20px 0 0 0;
  }

  ${props =>
    props.betweenRounds &&
    css`
      margin-top: 60px;
    `};
`;

export default TimeRemaining;
