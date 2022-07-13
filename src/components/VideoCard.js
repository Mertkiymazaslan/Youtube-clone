import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import Youtube from "../api/Youtube";

const VideoCard = ({ image, title, channelId, timestamp }) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      const response = await Youtube.get("channels", {
        params: { part: "snippet,statistics", id: channelId },
      });
      setChannelDetails(response.data.items[0]);
      console.log(response.data.items[0])
    };

    getChannelDetails();
  }, []);

  return (
    <>
      {channelDetails && (
        <div className="videoCard">
          <img className="videoCard__thumbnail" src={image} alt=""></img>
          <div className="videoCard__info">
            <Avatar
              className="videoCard__avatar"
              alt=""
              src={channelDetails.snippet.thumbnails.medium.url}
            />
            <div className="videoCard__text">
              <h4>{title}</h4>
              <p>{channelDetails.snippet.title}</p>
              <p>{timestamp}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
