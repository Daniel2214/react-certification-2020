import React, { Fragment, useState, useContext } from "react";
import { Button, Form } from 'semantic-ui-react';
import login from "../../utils/login";
import { UserContext } from "../../state/UserContext";
import { useHistory } from "react-router-dom";



const Login = () => {
  const [session, clearSession, addUser] = useContext(UserContext);
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleClickSession = () => history.push("/");


  return (
    <Fragment>
      {session !== null ? (
        <Form>
          <Button type="submit"
            onClick={() => {
              clearSession();
              handleClickSession();
            }}
          >
            Logout
          </Button>
        </Form>
      ) : (
      <Form>
        <Form.Field>
          <label>User</label>
          <input placeholder="User" onChange={(e) => {
            setUser(e.target.value)
          }} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </Form.Field>
        <Button type="submit"
          onClick={async (event) => {
            event.preventDefault();
            await login(user, password)
            .then((currentUser) => { 
              addUser(currentUser)
              handleClickSession();
            })
            .catch((error) => alert(error));    
          }}
        >
          Login
        </Button>
      </Form>
      )}
    </Fragment>
  );
};

export default Login;
