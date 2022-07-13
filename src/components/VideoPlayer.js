import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useVideo } from "../contexts/VideoContext";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const { currentVideo, currentChannel } = useVideo(); //oynatılacak video ve kanalın bilgileri.
  return (
    <div className="videoPlayer">
      {currentVideo && currentChannel && (
        <>
          <Paper elevation={6} >
            <iframe
              frameBorder={0}
              height="600px"
              width="100%"
              title="Video Player"
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
            />
          </Paper>
          <Paper elevation={6} style={{ padding: "15px" }}>
            <Typography variant="h5">{currentVideo.snippet.title}</Typography>
            <Typography variant="subtitle1">
              {currentVideo.snippet.channelTitle}
            </Typography>
            <Typography variant="subtitle2">
              {currentVideo.snippet.description
                .split(" ")
                .slice(0, 20)
                .join(" ") + "..."}
            </Typography>
          </Paper>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
