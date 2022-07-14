import React, { useEffect, useState } from "react";
import "./SideVideoList.css";
import { useVideo } from "../contexts/VideoContext";
import Youtube from "../api/Youtube";
import VideoCard from "./VideoCard";
import moment from "moment";

const SideVideoList = () => {
  const { currentVideo } = useVideo();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await Youtube.get("search", {
        params: {
          relatedToVideoId: currentVideo.id,
          maxResults: 5,
          type: "video",
        },
      });
      setRelatedVideos(response.data.items);
    };

    getVideos();
  }, []);
  console.log(relatedVideos)
  const decodeString = (Str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = Str;
    return textArea.value;
  };

  return (
    <>
      {relatedVideos && (
        <div className="sideVideoList">
          {relatedVideos.map((video) => {
            if(video.snippet){
                const title = decodeString(video.snippet.title);
            const date = new Date(video.snippet.publishTime);
            const dateStr = moment(date).fromNow();
            return (
              <VideoCard
                key={video.id.videoId}
                videoId={video.id.videoId}
                channelId={video.snippet.channelId}
              />
            );
            }
          })}
        </div>
      )}
    </>
  );
};

export default SideVideoList;
