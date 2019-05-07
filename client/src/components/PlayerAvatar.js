import styled from "styled-components";

const PlayerAvatar = styled.img`
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-left: -20px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transform: all 0.15s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;

export default PlayerAvatar;
