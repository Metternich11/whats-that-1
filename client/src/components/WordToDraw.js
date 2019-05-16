import styled, { css } from "styled-components/macro";

const WordToDraw = styled.div`
  color: white;
  margin: 20px 0;
  p {
    margin: 0;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
  }
  h3 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
  }

  ${props =>
    props.inBetween &&
    css`
      width: 95%;
      padding: 10px;
      background-color: #472c81;
      border-radius: 50px;
      text-transform: uppercase;
    `};
`;

export default WordToDraw;
