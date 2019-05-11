import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid;
  color: white;
  cursor: pointer;
  margin: 0 1em;
  padding: 0.5em 1em;
  font-size: 16px;
  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  transform: all 0.15s ease;
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
    `};

  ${props =>
    props.back &&
    css`
      align-self: flex-start;
      margin-top: -50px;
      text-transform: none;
    `};
`;

export default Button;
