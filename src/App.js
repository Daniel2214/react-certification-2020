import React, { useState, useContext } from "react";
import SearchBar from "./components/Searchbar";
import { Switch, Route, useHistory } from "react-router-dom";
import VideosGrid from "./components/VideoGrid";
import Video from "./components/Video";
import Youtube from "./api/Youtube";
import VideosContext from "./state/VideosContext";
import { UserContext } from "./state/UserContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Favorites from "./components/Favorites/";
import Login from "./components/Login";
import { FavoriteVideos } from "./state/FavVideosContext";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import "./App.css";
import "./components/Favorites/Favorites.css";


export default function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();
  const history = useHistory();
  const [session] = useContext(UserContext);

  const handleSubmit = async (search) => {
    const response = await Youtube.get("/search", {
      params: {
        q: search,
      },
    });
    setVideos(response.data.items);
  };

  return (
    <VideosContext.Provider value={{ currentVideo, videos, setCurrentVideo }}>
      <FavoriteVideos>
        <div className="favorites">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item as="a" onClick={() => history.push("/")} >
              <Icon name="home" />
              Home
            </Menu.Item>
            {session !== null ? (
              <Menu.Item as="a" onClick={() => history.push("/favs")} >
                <Icon name="favorite" />
                Favorites
              </Menu.Item>
            ) : (
              <div></div>
            )}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <div className="ui container" style={{ marginTop: "1em" }}>
                <Switch>
                  <Route path="/video/:id">
                    <Video />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <ProtectedRoute component={Favorites} path="/favs" />

                  <Route path="/">
                    <SearchBar handleFormSubmit={handleSubmit} />
                    <VideosGrid />
                  </Route>
                </Switch>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </FavoriteVideos>
    </VideosContext.Provider>
  );
}
