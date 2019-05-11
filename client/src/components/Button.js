import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.5em 1em;
  transform: all 0.15s ease;
  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  :hover {
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
    props.gradient &&
    css`
      background-color: #fa709a;
      background-image: linear-gradient(90deg, #fa709a 0%, #f5c964 87%);
      border-color: pink;
    `};

  ${props =>
    props.marginTop &&
    css`
      margin-top: 2vh;
    `};

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: 2vh;
    `};

  ${props =>
    props.form &&
    css`
      margin-left: 0;
      align-self: center;
    `};

  ${props =>
    props.back &&
    css`
      margin-top: 4vh;
      text-transform: none;
    `};

  ${props =>
    props.clear &&
    css`
      font-size: 0.8rem;
      text-transform: none;
      margin: 0;
    `};
`;

export default Button;
