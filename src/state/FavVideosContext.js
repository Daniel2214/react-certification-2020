import React, { useState, useEffect, createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const FavVideosContext = createContext(null);

export const FavoriteVideos = ({ children }) => {
  const initialValue = loadFromLocalStorage("favVideos") === null ? [] : loadFromLocalStorage("favVideos");
  const [favVideos, setFavVideos] = useState(initialValue);

  useEffect(() => {
    saveToLocalStorage(favVideos, "favVideos");
  }, [favVideos]);

  return (
    <FavVideosContext.Provider value={[favVideos, setFavVideos]}>
      {children}
    </FavVideosContext.Provider>
  );
};


