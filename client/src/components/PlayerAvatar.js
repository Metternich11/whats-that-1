import React, { useEffect } from "react";

// Redux Imports
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// Util imports
import generateAvatarProps from "../utils/generateAvatarProps";

// Library imports
import Avatar from "avataaars";

const PlayerAvatar = props => {
  let localProps = generateAvatarProps();

  useEffect(() => {
    props.userAvatar(localProps);
  }, [localProps]);

  return !props.info ? (
    <Avatar
      style={{
        width: "60px",
        height: "60px"
      }}
      {...localProps}
    />
  ) : (
      <Avatar
        style={{
          width: "60px",
          height: "60px"
        }}
        {...props.info.playerAvatar}
      />
    );
};

const mapDispatchToProps = dispatch => ({
  userAvatar: avatar => dispatch(Actions.saveAvatar(avatar))
});

export default connect(
  null,
  mapDispatchToProps
)(PlayerAvatar);
