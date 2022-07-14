import { Avatar, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import Youtube from "../api/Youtube";
import { useVideo } from "../contexts/VideoContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ channelId, videoId }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const { setCurrentVideo, setCurrentChannel } = useVideo();
  const navigate = useNavigate();
  
  useEffect(() => {
    const getChannelDetails = async () => {
      const response = await Youtube.get("channels", {
        params: { part: "snippet,statistics", id: channelId },
      });
      setChannelDetails(response.data.items[0]);
    };

    const getVideoDetails = async () => {
      const response = await Youtube.get("videos", {
        params: { part: "snippet,statistics", id: videoId },
      });
      setVideoDetails(response.data.items[0]);
    };

    getVideoDetails();
    getChannelDetails();
  }, []);

  const onVideoCardSelect = () => {
    setCurrentVideo(videoDetails);
    setCurrentChannel(channelDetails);
    navigate("/video")
  };

  return (
    <Paper
      style={{ cursor: "pointer" }}
      elevation={1}
      onClick={() => onVideoCardSelect()}
    >
      {channelDetails && videoDetails && (
        <div className="videoCard">
          <img
            className="videoCard__thumbnail"
            src={videoDetails.snippet.thumbnails.medium.url}
            alt=""
          ></img>
          <div className="videoCard__info">
            <Avatar
              className="videoCard__avatar"
              alt=""
              src={channelDetails.snippet.thumbnails.medium.url}
            />
            <div className="videoCard__text">
              <h4>{videoDetails.snippet.title}</h4>
              <p className="videoCard__channelName">{channelDetails.snippet.title}</p>
              <p>
                {videoDetails.statistics.viewCount} views -{" "}
                {moment(new Date(videoDetails.snippet.publishedAt)).fromNow()}
              </p>
            </div>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default VideoCard;
