import React from "react";
import styled, { css } from "styled-components";
import generateAvatarProps from "../utils/generateAvatarProps";
import Avatar from "avataaars";

const AvatarContainer = styled.div`
  cursor: pointer;
  transform: all 0.15s ease;
  &:hover {
    transform: translateY(-1px);
  }

  ${props =>
    props.solo &&
    css`
      margin: 0 20px 0 0;
      width: 60px;
      height: 60px;
    `};
`;

const PlayerAvatar = () => {
  const props = generateAvatarProps();
  //TOODO: Save the props above into the Redux store for the current user
  return (
    <AvatarContainer>
      <Avatar
        style={{
          width: "60px",
          height: "60px"
        }}
        {...props}
      />
    </AvatarContainer>
  );
};

export default PlayerAvatar;
