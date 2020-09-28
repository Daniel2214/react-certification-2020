import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../state/UserContext";

const ProtectedRoute = ({component: Component, ...rest}) => {

  const [session] = useContext(UserContext)

  return (
    <Route {...rest} render={(props) => {

      if(session) { 
        return <Component {...props} />
      } else {
        return <Redirect to={"/"}/>
      }

      }}
    />
  )

}

export default ProtectedRoute;