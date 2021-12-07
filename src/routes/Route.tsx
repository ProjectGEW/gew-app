import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";
import api from '../service/api';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType; 
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { usuario } = useAuth();
  
  return (
    <ReactDOMRoute {...rest} render={({ location }) => {
      console.log('isPrivate: ' + isPrivate);
      console.log('usuario: ' + usuario);
      if(isPrivate === !!usuario) {
        return (<Component />);
      } else {
        if(localStorage.getItem('Level') === 'fmb8xNYF02BPXsGJohcOkw' || localStorage.getItem('Level') === 'GZ4_7WPQgajvmSlKlRgn8A' || 
           localStorage.getItem('Level') === 'aIj5vqAY-nXFQC0DLJUrxA' || localStorage.getItem('Level') === 'V_mJKGFmvh7XtkEVhOCgTw') {
          return (<Redirect to={{ pathname: isPrivate ? "/" : "/home", state: { from: location },}}/>)
        } else {
          localStorage.removeItem("Token");
          localStorage.removeItem("User");
          localStorage.removeItem("User:nome");
          localStorage.removeItem("Level");
          return (<Component />)
        }
      }
    }} />
  );
}

export default Route;