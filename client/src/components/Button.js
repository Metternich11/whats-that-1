import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid;
  color: white;
  margin: 0 1em;
  padding: 0.5em 1em;
  font-size: 16px;
  :hover {
    color: grey;
  }

  ${props =>
    props.primary &&
    css`
      background: #ff87ad;
      border-color: #e6a8bc;
    `};

  ${props =>
    props.secondary &&
    css`
      background-color: #FA709A;
      background-image: linear-gradient(90deg, #FA709A 0%, #f5c964 87%);
      border-color: pink;
    `};
`;

export default Button;
