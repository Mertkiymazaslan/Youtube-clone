import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import VideoRow from "./VideoRow";
import { useParams } from "react-router-dom";
import Youtube from "../api/Youtube";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getVideos = async () => {
      const response = await Youtube.get("search", {
        params: { q: searchTerm, maxResults: 10 },
      });
      setVideos(response.data.items);
      setIsLoading(false);
    };
    getVideos();
  }, [searchTerm]);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {isLoading && <h2>Loading...</h2>}
      {!isLoading &&
        videos.map((video) => {
          return (
            <VideoRow
              key={video.id.videoId}
              videoId={video.id.videoId}
              channelId={video.snippet.channelId}
            />
          );
        })}
    </div>
  );
};

export default SearchPage;
