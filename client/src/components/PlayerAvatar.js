import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

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
      margin-right: 0 20px s0 0;
      width: 60px;
      height: 60px;
    `};
`;

const PlayerAvatar = props => {

  let localProps = generateAvatarProps();

  useEffect(() => {
    props.userAvatar(localProps);
  }, [localProps]);


  return (
    !props.info ? 
    <AvatarContainer>
      <Avatar
        style={{
          width: "60px",
          height: "60px"
        }}
        {...localProps}
      />
    </AvatarContainer>
    :
    <AvatarContainer>
      <Avatar
        style={{
          width: "60px",
          height: "60px"
        }}
        {...props.info.playerAvatar}
      />
    </AvatarContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  userAvatar: avatar => dispatch(Actions.saveAvatar(avatar))
});

export default connect(
  null,
  mapDispatchToProps
)(PlayerAvatar);
