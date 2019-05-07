import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid;
  color: white;
  cursor: pointer;
  margin: 0 1em;
  padding: 0.5em 1em;
  font-size: 16px;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  :hover {
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
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
      background-color: #fa709a;
      background-image: linear-gradient(90deg, #fa709a 0%, #f5c964 87%);
      border-color: pink;
    `};
`;

export default Button;
