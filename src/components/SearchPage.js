import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
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
      {/* <hr />

        <ChannelRow 
            image="https://i.pinimg.com/736x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1--flat-icons-free-icon.jpg"
            channel="Clever Programmer"
            verified
            subs="867K"
            noOfVideos={325}
            description="loremf msadfsdf wer ywywe fe ww we rtrthrth rt wwgwgrwgdkfms sdkmfmkewpf wekmf  kmwefwe"
        /> */}
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
