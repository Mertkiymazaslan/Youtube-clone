import React, { useState, useEffect } from "react";
import "./VideoRow.css";
import { Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Youtube from "../api/Youtube";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import { useVideo } from "../contexts/VideoContext";

const VideoRow = ({ videoId, channelId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const {setCurrentVideo, setCurrentChannel} = useVideo();
  const navigate = useNavigate();

  useEffect(() => {
    const getVideoDetails = async () => {
      const response = await Youtube.get("videos", {
        params: { part: "snippet,statistics", id: videoId },
      });
      setVideoDetails(response.data.items[0]);
    };

    const getChannelDetails = async () => {
      const response = await Youtube.get("channels", {
        params: { part: "snippet,statistics", id: channelId },
      });
      setChannelDetails(response.data.items[0]);
    };

    getVideoDetails();
    getChannelDetails();
  }, []);

  const onVideoRowSelect = () => {
    setCurrentVideo(videoDetails);
    setCurrentChannel(channelDetails);
    navigate("/video")
  };

  return (
    <Paper
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => onVideoRowSelect()}
    >
      {videoDetails && channelDetails && (
        <div className="videoRow">
          <img src={videoDetails.snippet.thumbnails.medium.url} alt="" />
          <div className="videoRow__text">
            <h3>{videoDetails.snippet.title}</h3>
            <p className="videoRow__headline">
              {videoDetails.statistics.viewCount} views -{" "}
              {moment(new Date(videoDetails.snippet.publishedAt)).fromNow()}
            </p>

            <div className="videoRow__channel">
              <Avatar
                className="videoCard__avatar"
                alt=""
                src={channelDetails.snippet.thumbnails.medium.url}
              />
              <p className="videoRow__channelInfo">
                {channelDetails.snippet.title} - {channelDetails.statistics.subscriberCount} Subscribers
              </p>
            </div>
            <p className="videoRow__description">
              {videoDetails.snippet.description
                .split(" ")
                .slice(0, 20)
                .join(" ") + "..."}
            </p>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default VideoRow;
