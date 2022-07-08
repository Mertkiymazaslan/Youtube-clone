import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} subscribers
        </p>
        <p>
            {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
