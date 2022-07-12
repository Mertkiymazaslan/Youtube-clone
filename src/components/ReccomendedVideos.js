import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import Youtube from "../api/Youtube";
import moment from 'moment'

const ReccomendedVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodeString = (Str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = Str;
    return textArea.value;
  };

  useEffect(() => {
    const getVideos = async () => {
      const response = await Youtube.get("search", {
        params: { q: "table tennis", maxResults: 10 },
      });
      setVideos(response.data.items);
      setIsLoading(false);
    };

    getVideos();
  }, []);

  return (
    <div className="recommendedVideos">
      <h2>Reccomended</h2>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <div className="recommendedVideos__videos">
          {videos.map((video) => {
            const title = decodeString(video.snippet.title);
            const date = new Date(video.snippet.publishTime);
            const dateStr = moment(date).fromNow();
            return(<VideoCard
                key={video.id.videoId}
                title={title}
                timestamp={dateStr}
                channelImage="https://i.pinimg.com/736x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1--flat-icons-free-icon.jpg"
                channel={video.snippet.channelTitle}
                image={video.snippet.thumbnails.medium.url}
              />)
        })}
        </div>
      )}
    </div>
  );
};

export default ReccomendedVideos;
