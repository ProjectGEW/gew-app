import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType; 
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { usuario } = useAuth();
  
  return (
    <ReactDOMRoute {...rest} render={({ location }) => {
      // console.log('isPrivate: ' + isPrivate);
      // console.log('usuario: ' + usuario);
      if(isPrivate === !!usuario) {
        return (<Component />);
      } else {
        if(localStorage.getItem('Cargo') === 'fmb8xNYF02BPXsGJohcOkw' || localStorage.getItem('Cargo') === 'GZ4_7WPQgajvmSlKlRgn8A' || 
           localStorage.getItem('Cargo') === 'aIj5vqAY-nXFQC0DLJUrxA' || localStorage.getItem('Cargo') === 'V_mJKGFmvh7XtkEVhOCgTw') {
          return (<Redirect to={{ pathname: isPrivate ? "/" : "/home", state: { from: location },}}/>)
        } else {
          localStorage.removeItem("Token");
          localStorage.removeItem("User");
          localStorage.removeItem("User:nome");
          localStorage.removeItem("Cargo");
          return (<Component />)
        }
      }
    }} />
  );
}

export default Route;