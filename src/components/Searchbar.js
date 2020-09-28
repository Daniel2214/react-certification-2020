import React, { useState, useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Searchbar.css";
import { login } from "../utils/login";
import { UserContext } from "../state/UserContext";

export default function Searchbar(props) {
  const [term, setTerm] = useState("");
  const [session, setSession] = useContext(UserContext);


  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(term);
  };

  return (
    <div className="ui container" style={{ paddingTop: "1rem" }}>
      <div className="search-bar ui segment">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                  <input
                    className="searchBar"
                    onChange={handleChange}
                    name="video-search"
                    type="text"
                    value={term}
                  />
                </div>
              </form>
            </div>
            <div className="five wide column">
              {session !== null ? (
                <Button
                  className="logButton"
                  onClick={() => {
                    setSession(null);
                  }}
                >
                  <Icon className="userIcon" name="logout" />
                </Button>
              ) : (
                <Button
                  className="logButton"
                  onClick={async (event) => {
                    event.preventDefault();
                    const currentUser = await login();
                    setSession(currentUser);
                  }}
                >
                  <Icon className="userIcon" name="user" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
