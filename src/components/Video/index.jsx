import React, { useContext } from "react";
import VideosContext from "../../state/VideosContext";
import { FavVideosContext } from "../../state/FavVideosContext";
import { UserContext } from "../../state/UserContext";
import VideoList from "../VideoList";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Video() {
  const { currentVideo } = useContext(VideosContext);
  const { id } = useParams();
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  const title = currentVideo
    ? currentVideo.snippet.title
    : "Not title available";
  const description = currentVideo
    ? currentVideo.snippet.description
    : "Not description available";
  const [session] = useContext(UserContext);
  const [favVideos, setFavVideos, removeFavVideo, isInFavs] = useContext(FavVideosContext);

  
  const isAlreadyFavorite = isInFavs(currentVideo, favVideos);
  console.log(isAlreadyFavorite)
  return (
    <div className="ui container" style={{ marginTop: "3rem" }}>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <div className="ui embed">
              <iframe src={videoSrc} allowFullScreen title="Video" />
            </div>
            <div className="ui segment">
              <h4 className="ui header">{title}</h4>
              <p>{description}</p>
            </div>
            {session !== null && currentVideo ? (
              <div className="ui segment">
                {isAlreadyFavorite ? (
                  <Button
                    onClick={() => {
                      removeFavVideo(favVideos, currentVideo)
                    }}
                  >
                    Remove from favorites
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setFavVideos([currentVideo, ...favVideos]);
                    }}
                  >
                    Add to favorites
                  </Button>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
}
