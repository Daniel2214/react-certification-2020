import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import VideoCard from "../VideoCard";
import { FavVideosContext } from "../../state/FavVideosContext";
import "./Favorites.css";

const Favorites = () => {
  const [favVideos] = useContext(FavVideosContext);

  return (
    <div className="favorites">
      {favVideos.length === 0 ? (
        <div>
          <h1>No favorite videos</h1>
        </div>
      ) : (
        <Grid columns="equal" style={{ marginTop: "1rem" }}>
          <Grid.Row>
            {favVideos.map((video) => (
              <Grid.Column key={video.id.videoId} width={4}>
                <VideoCard key={video.id.videoId} video={video} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
};

export default Favorites;
