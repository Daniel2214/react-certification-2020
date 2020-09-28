import React from "react";

const VideosContext = React.createContext({
  videos: [],
  currentVideo: {},
  setCurrentVideo: () => {}
});

export default VideosContext;
