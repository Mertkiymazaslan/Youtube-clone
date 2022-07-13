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
                image={video.snippet.thumbnails.medium.url}
                channelId={video.snippet.channelId}
              />)
        })}
        </div>
      )}
    </div>
  );
};

export default ReccomendedVideos;
