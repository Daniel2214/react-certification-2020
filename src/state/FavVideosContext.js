import React, { useState, useEffect, createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const FavVideosContext = createContext(null);

export const FavoriteVideos = ({ children }) => {
  const initialValue = loadFromLocalStorage("favVideos") ? [] : loadFromLocalStorage("favVideos");
  const [favVideos, setFavVideos] = useState(initialValue);

  const removeFavVideo = (videos, video) => {
    const index = videos.indexOf(video);
    if (index > -1) {
      videos.splice(index, 1);
    }    
    setFavVideos ([...videos])
    console.log(favVideos)
  };

  const isInFavs = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  };
  
  const addFavVideo = (videos, video) => {
    setFavVideos([video, ...videos]);
  }

  useEffect(() => {
    saveToLocalStorage(favVideos, "favVideos");
  }, [favVideos]);

  return (
    <FavVideosContext.Provider value={[favVideos, addFavVideo, removeFavVideo, isInFavs]}>
      {children}
    </FavVideosContext.Provider>
  );
};


