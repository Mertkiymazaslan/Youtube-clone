import React, { useContext, useState } from "react";

const VideoContext = React.createContext();

export function useVideo() {
    return useContext(VideoContext);
}

export const VideoProvider = ({ children }) => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
  
    return (
      <VideoContext.Provider
        value={{
          currentVideo,
          currentChannel,
          setCurrentVideo,
          setCurrentChannel
        }}
      >
        {children}
      </VideoContext.Provider>
    );
  };