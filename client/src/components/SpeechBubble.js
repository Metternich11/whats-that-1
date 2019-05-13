import styled, { css } from "styled-components/macro";

const SpeechBubble = styled.span`
  animation: float 5s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: #472c81;
  font-size: 0.8rem;
  padding: 5px 20px;
  position: relative;
  margin-left: 160px;
  z-index: 9999;

  &:after {
    border: 20px solid transparent;
    border-left: 0;
    border-bottom: 0;
    border-top-color: rgba(255, 255, 255, 0.5);
    bottom: 0;
    content: "";
    height: 0;
    right: 60%;
    margin-left: -20px;
    margin-bottom: -20px;
    position: absolute;
    width: 0;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px) rotate(20deg);
    }
    50% {
      box-shadow: 0 15px 15px 0px rgba(0, 0, 0, 0.1);
      transform: translate(-2px, -2px) rotate(17deg);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px) rotate(20deg);
    }
  }

  ${props =>
    props.inGame &&
    css`
      background-color: #472c81;
      color: #fff;

      &:after {
        border-top-color: #472c81;
        margin-left: 20px;
      }
    `};
`;

export default SpeechBubble;
