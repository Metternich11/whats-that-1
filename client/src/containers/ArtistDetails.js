import styled, { css } from "styled-components";

const ArtistDetails = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  margin-top: 4vh;
  padding: 2vh 4vw;

  ${props =>
    props.scaled &&
    css`
      transform: scale(1.5);
    `};
`;

export default ArtistDetails;
