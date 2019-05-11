import styled from "styled-components";

const SpeechBubble = styled.span`
  animation: shake 3s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  color: #472c81;
  font-size: 0.8rem;
  padding: 4px 10px;
  position: relative;

  &:after {
    border: 20px solid transparent;
    border-left: 0;
    border-bottom: 0;
    border-top-color: rgba(255, 255, 255, 0.5);
    bottom: 0;
    content: "";
    height: 0;
    left: 50%;
    margin-left: -20px;
    margin-bottom: -20px;
    position: absolute;
    width: 0;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    25% {
      transform: translate(-1px, 2px) rotate(1deg);
    }
    75% {
      transform: translate(1px, 0px) rotate(4deg);
    }
    100% {
      transform: translate(1px, 1px) rotate(0deg);
    }
  }
`;

export default SpeechBubble;
