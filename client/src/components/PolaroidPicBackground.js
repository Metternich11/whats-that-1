import styled from "styled-components";

const PolaroidPicBackground = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vh;
  transition: 75ms linear all;
  &:hover {
    transform: rotate(1deg);
  }
`;

export default PolaroidPicBackground;
